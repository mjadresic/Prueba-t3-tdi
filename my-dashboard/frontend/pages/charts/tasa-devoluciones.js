import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const TasaDevoluciones = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y contar las compras por estado de la orden
    const orderStatusCounts = orders.reduce((acc, order) => {
      if (order.order_status) {
        acc[order.order_status] = (acc[order.order_status] || 0) + 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const statusData = Object.keys(orderStatusCounts).map(key => ({
      order_status: key,
      count: orderStatusCounts[key],
    }));

    setData(statusData);
  }, [orders]);

  return (
    <div>
      <h1>Tasa de devoluciones (cancelaciones) de productos</h1>
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
          <XAxis dataKey="order_status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TasaDevoluciones;
