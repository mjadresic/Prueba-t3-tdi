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
      const ordersRes = await axios.get('https://tarea-3-mjadresic.onrender.com/public/orders.json');
      const productsRes = await axios.get('https://tarea-3-mjadresic.onrender.com/public/products.json');
      // const ordersRes = await axios.get('http://localhost:3001/public/orders.json');
      // const productsRes = await axios.get('http://localhost:3001/public/products.json');
      console.log('Orders data:', ordersRes.data);
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
      await axios.get('https://tarea-3-mjadresic.onrender.com/api/etl', {
      //await axios.get('http://localhost:3001/api/etl', {
        timeout: 0, // Establece el tiempo de espera en 0 para esperar indefinidamente
      });
      console.log('Data compiled successfully');
      await fetchData(); // Obtiene los datos actualizados
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
