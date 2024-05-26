import { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const CiudadMasCompras = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y contar las compras por ciudad
    const cityCounts = orders.reduce((acc, order) => {
      if (order.customer_city && order.customer_city !== 'unknown') {
        acc[order.customer_city] = (acc[order.customer_city] || 0) + 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const cityData = Object.keys(cityCounts).map(key => ({
      name: key,
      value: cityCounts[key],
    }));

    // Ordenar las ciudades por cantidad de compras y limitar a las top 40
    cityData.sort((a, b) => b.value - a.value);
    const top40Cities = cityData.slice(0, 40);

    setData(top40Cities);
  }, [orders]);

  // Colores para el gráfico de pastel
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FFBB28', '#00C49F', '#FF8042', '#0088FE', '#AF19FF'];

  return (
    <div>
      <h1>Ciudad con más compras realizadas (Top 40)</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CiudadMasCompras;
