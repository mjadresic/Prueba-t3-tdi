import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    orders: [],
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersRes = await axios.get('/local-data/orders.json');
        const productsRes = await axios.get('/local-data/products.json');
        console.log('Orders:', ordersRes.data);
        console.log('Products:', productsRes.data);
        setData({
          orders: ordersRes.data,
          products: productsRes.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({
          orders: [],
          products: [],
          loading: false,
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
