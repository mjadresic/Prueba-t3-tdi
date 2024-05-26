import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const TotalGastado = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y sumar la cantidad gastada por customer_id
    const customerTotalSpent = orders.reduce((acc, order) => {
      if (order.customer_id && order.customer_id !== 'missing_customer_id_undefined' && order.payment) {
        acc[order.customer_id] = (acc[order.customer_id] || 0) + order.payment;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const customerTotalSpentData = Object.keys(customerTotalSpent).map(key => ({
      customer_id: key,
      total_spent: customerTotalSpent[key],
    }));

    // Ordenar los clientes por cantidad total gastada
    customerTotalSpentData.sort((a, b) => b.total_spent - a.total_spent);

    // Limitar a los top 40 clientes
    const top40Customers = customerTotalSpentData.slice(0, 40);

    setData(top40Customers);
  }, [orders]);

  return (
    <div>
      <h1>Cantidad total gastada por el cliente que más ha gastado (Top 40)</h1>
      <ResponsiveContainer width="100%" height={800}>
        <BarChart
          width={800}
          height={800}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 200, // Más espacio para los IDs largos
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="customer_id" type="category" width={200} /> {/* Más espacio para los IDs largos */}
          <YAxis type="number" domain={[0, Math.max(...data.map(d => d.total_spent))]} tickFormatter={(tick) => tick.toFixed(2)} /> {/* Ajustar el máximo del eje Y dinámicamente */}
          <Tooltip />
          <Legend />
          <Bar dataKey="total_spent" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalGastado;
