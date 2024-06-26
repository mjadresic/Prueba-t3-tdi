import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const PesoPromedioProductos = () => {
  const { orders, products } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0 || products.length === 0) {
      console.log('No orders or products data');
      return;
    }

    // Agrupar y calcular el peso promedio por product_id
    const productWeights = orders.reduce((acc, order) => {
      if (order.product_id && order.product_id !== 'NULL' && order.product_weight_g) {
        if (!acc[order.product_id]) {
          acc[order.product_id] = { totalWeight: 0, count: 0 };
        }
        acc[order.product_id].totalWeight += order.product_weight_g;
        acc[order.product_id].count += 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const averageWeightData = Object.keys(productWeights).map(key => ({
      product_id: key,
      name: products.find(product => product.objectID === key)?.name || key,
      average_weight: productWeights[key].totalWeight / productWeights[key].count,
    }));

    setData(averageWeightData);
  }, [orders, products]);

  return (
    <div>
      <h1>Peso promedio de los productos comprados</h1>
      <ResponsiveContainer width="100%" height={800}>
        <BarChart
          width={1000}
          height={800}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 100, // Más espacio para los nombres largos
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            type="category"
            angle={-45}
            textAnchor="end"
            interval={Math.ceil(data.length / 10)} // Mostrar aproximadamente 10 etiquetas
            height={150}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average_weight" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PesoPromedioProductos;
