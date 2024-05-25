import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const ClienteConMasCompras = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y contar las compras por customer_id
    const customerPurchaseCounts = orders.reduce((acc, order) => {
      if (order.customer_id && order.customer_id !== 'missing_customer_id_undefined') {
        acc[order.customer_id] = (acc[order.customer_id] || 0) + 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const customerPurchaseData = Object.keys(customerPurchaseCounts).map(key => ({
      customer_id: key,
      purchases: customerPurchaseCounts[key],
    }));

    // Ordenar los clientes por cantidad de compras
    customerPurchaseData.sort((a, b) => b.purchases - a.purchases);

    // Limitar a los top 40 clientes
    const top40Customers = customerPurchaseData.slice(0, 40);

    setData(top40Customers);
  }, [orders]);

  return (
    <div>
      <h1>Cliente que ha realizado más compras (Top 40)</h1>
      <ResponsiveContainer width="100%" height={800}>
        <BarChart
          layout="vertical"
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
          <XAxis 
            type="number" 
            domain={[0, Math.max(...data.map(d => d.purchases))]} 
            tickFormatter={(tick) => Number.isInteger(tick) ? tick : ''}
            allowDecimals={false}
          /> {/* Ajustar el máximo del eje X dinámicamente */}
          <YAxis dataKey="customer_id" type="category" width={200} /> {/* Más espacio para los IDs largos */}
          <Tooltip />
          <Legend />
          <Bar dataKey="purchases" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClienteConMasCompras;
