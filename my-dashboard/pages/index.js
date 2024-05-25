import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../contexts/DataContext';

const Home = () => {
  const router = useRouter();
  const { loading, error, compileData } = useContext(DataContext);
  const [isCompiling, setIsCompiling] = useState(false);

  const handleButtonClick = (chart) => {
    router.push(`/charts/${chart}`);
  };

  const handleCompileData = async () => {
    setIsCompiling(true);
    try {
      await compileData();
    } finally {
      setIsCompiling(false);
    }
  };

  if (loading || isCompiling) {
    return <div>Descargando archivos... por favor espere</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  return (
    <div>
      <h1>Dashboard de Productos y Compras</h1>
      <div>Para actualizar la base de datos, presione el siguiente botón:</div>
      <br></br>
      <button onClick={handleCompileData} disabled={isCompiling}>
        {isCompiling ? 'Compilando Datos...' : 'Compilar Datos'}
      </button>
      <br></br>
      <br></br>
      <div><hr></hr></div>
      <h1>Seleccione un gráfico:</h1>
      <hr></hr>
      <button onClick={() => handleButtonClick('producto-mas-comprado')}>Producto más comprado</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('categoria-mas-popular')}>Categoría de producto más popular</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('cliente-con-mas-compras')}>Cliente que ha realizado más compras</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('total-gastado')}>Cantidad total gastada por el cliente que más ha gastado</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('calificacion-promedio')}>Calificación promedio de los productos comprados</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('metodos-pago-distribucion')}>Distribución de los métodos de pago utilizados</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('ciudad-mas-compras')}>Ciudad con más compras realizadas</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('tasa-devoluciones')}>Tasa de devoluciones (cancelaciones) de productos</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('peso-promedio-productos')}>Peso promedio de los productos comprados</button>
      <hr></hr>
      <button onClick={() => handleButtonClick('ventas-tiempo')}>Ventas a lo largo del tiempo</button>
    </div>
  );
};

export default Home;
