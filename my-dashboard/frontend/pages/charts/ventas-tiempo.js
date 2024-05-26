import { useContext, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';
import moment from 'moment';

const VentasTiempo = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y contar las compras por timestamp (fecha)
    const salesOverTime = orders.reduce((acc, order) => {
      const date = moment(order.timestamp, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD');
      acc[date] = (acc[date] || 0) + order.quantity;
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const salesData = Object.keys(salesOverTime).map(date => ({
      date,
      sales: salesOverTime[date],
    }));

    // Ordenar los datos por fecha
    salesData.sort((a, b) => new Date(a.date) - new Date(b.date));

    setData(salesData);
  }, [orders]);

  return (
    <div>
      <h1>Ventas a lo largo del tiempo</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
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
          <XAxis dataKey="date" tickFormatter={(tick) => moment(tick).format('YYYY-MM-DD')} />
          <YAxis />
          <Tooltip labelFormatter={(label) => moment(label).format('YYYY-MM-DD')} />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VentasTiempo;
