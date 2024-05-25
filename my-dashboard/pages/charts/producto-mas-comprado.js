import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const ProductoMasComprado = () => {
  const { orders, products } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0 || products.length === 0) {
      console.log('No orders or products data');
      return;
    }

    // Agrupar y sumar las cantidades por product_id
    const mostBoughtProducts = orders.reduce((acc, order) => {
      if (order.product_id && order.product_id !== 'NULL' && order.quantity) {
        acc[order.product_id] = (acc[order.product_id] || 0) + order.quantity;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const mostBoughtProductsData = Object.keys(mostBoughtProducts).map(key => ({
      product_id: key,
      name: products.find(product => product.objectID === key)?.name || key,
      quantity: mostBoughtProducts[key],
    }));

    // Ordenar los productos por cantidad de compras
    mostBoughtProductsData.sort((a, b) => b.quantity - a.quantity);

    // Limitar a los top 37 productos
    const top37Products = mostBoughtProductsData.slice(0, 40);

    setData(top37Products);
  }, [orders, products]);

  return (
    <div>
      <h1>Producto más comprado (Top 40)</h1>
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
          <XAxis type="number" domain={[0, 850]} /> {/* Establecer el máximo del eje X a 850 */}
          <YAxis dataKey="name" type="category" width={200} /> {/* Más espacio para los IDs largos */}
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductoMasComprado;
