import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const CalificacionPromedio = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y calcular la calificación promedio por product_id
    const productRatings = orders.reduce((acc, order) => {
      if (order.product_id && order.product_id !== 'NULL' && order.rating) {
        if (!acc[order.product_id]) {
          acc[order.product_id] = { totalRating: 0, count: 0 };
        }
        acc[order.product_id].totalRating += order.rating;
        acc[order.product_id].count += 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const productRatingData = Object.keys(productRatings).map(key => ({
      product_id: key,
      avg_rating: productRatings[key].totalRating / productRatings[key].count,
    }));

    // Ordenar los productos por calificación promedio
    productRatingData.sort((a, b) => b.avg_rating - a.avg_rating);

    setData(productRatingData);
  }, [orders]);

  return (
    <div>
      <h1>Calificación promedio de los productos comprados</h1>
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
          <XAxis dataKey="product_id" type="category" width={200} /> {/* Más espacio para los IDs largos */}
          <YAxis type="number" domain={[0, 5]} /> {/* Calificaciones van de 0 a 5 */}
          <Tooltip />
          <Legend />
          <Bar dataKey="avg_rating" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CalificacionPromedio;
