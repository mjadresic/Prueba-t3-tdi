import { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../contexts/DataContext';

const correctPaymentType = (type) => {
  const corrections = {
    'drac tiderc': 'credit_card',
    'cotelob': 'boleto',
    'rehcuov': 'voucher',
    'drac tibed': 'debit_card',
  };
  return corrections[type] || type;
};

const MetodosPagoDistribucion = () => {
  const { orders } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      console.log('No orders data');
      return;
    }

    // Agrupar y contar las compras por método de pago
    const paymentMethodCounts = orders.reduce((acc, order) => {
      const correctedPaymentType = correctPaymentType(order.payment_type);
      if (correctedPaymentType && correctedPaymentType !== 'unknown') {
        acc[correctedPaymentType] = (acc[correctedPaymentType] || 0) + 1;
      }
      return acc;
    }, {});

    // Crear el array de datos para el gráfico
    const paymentMethodData = Object.keys(paymentMethodCounts).map(key => ({
      name: key,
      value: paymentMethodCounts[key],
    }));

    setData(paymentMethodData);
  }, [orders]);

  // Colores para el gráfico de pastel
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div>
      <h1>Distribución de los métodos de pago utilizados</h1>
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

export default MetodosPagoDistribucion;
