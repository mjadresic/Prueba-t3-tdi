import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const CategoriaMasPopular = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const categoryCounts = orders.reduce((acc, order) => {
      if (order.product_category && order.product_category !== 'unknown') {
        acc[order.product_category] = (acc[order.product_category] || 0) + order.quantity;
      }
      return acc;
    }, {});

    const categoryData = Object.keys(categoryCounts).map(key => ({
      category: key,
      quantity: categoryCounts[key],
    }));

    // Ordenar las categorías por cantidad de compras
    categoryData.sort((a, b) => b.quantity - a.quantity);

    // Limitar a las top 10 categorías (opcional)
    const topCategories = categoryData.slice(0, 10);

    setData(topCategories);
  }, [orders]);

  return (
    <div>
      <h1>Categoría de producto más popular</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoriaMasPopular;
