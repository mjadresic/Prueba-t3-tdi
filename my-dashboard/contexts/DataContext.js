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
      console.log('Fetching data...');
      const ordersRes = await axios.get('/orders.json');
      console.log('Orders data:', ordersRes.data);
      const productsRes = await axios.get('/products.json');
      console.log('Products data:', productsRes.data);
      setData({
        orders: ordersRes.data,
        products: productsRes.data,
        loading: false,
        error: null,
      });
      console.log('Data fetched successfully');
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
      console.log('Compiling data...');
      // Realizar la solicitud a /api/etl y esperar a que se complete
      await axios.get('/api/etl');
      console.log('Data compiled successfully');
      
      // Después de que la compilación de datos esté completa, llamar a fetchData()
      await fetchData();
    } catch (error) {
      console.error('Error compiling data:', error);
      // Manejar el error y actualizar el estado en consecuencia
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