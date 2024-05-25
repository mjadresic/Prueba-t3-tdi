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

  const fetchData = async () => {
    try {
      const ordersRes = await axios.get('/orders.json');
      const productsRes = await axios.get('/products.json');
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

  const compileData = async () => {
    try {
      await axios.get('/api/etl');
      await fetchData();
    } catch (error) {
      console.error('Error compiling data:', error);
      setData({
        orders: [],
        products: [],
        loading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        await fetchData();
      } catch (error) {
        console.error('Data not found, compiling data:', error);
        await compileData();
      }
    };

    initializeData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, setData, compileData }}>
      {children}
    </DataContext.Provider>
  );
};