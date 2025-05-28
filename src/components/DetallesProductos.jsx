import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';

const DetallesProductos = () => {
  const { productos, cargando, error } = useContext(CartContext);
  const { id } = useParams();

  const product = productos.find(producto => String(producto.id) === String(id));

  return (
    <>
      <Header />
      <main>
        <h1>Detalle del producto: {id}</h1>
        {cargando && <p>Cargando...</p>}
        {error && <p style={{ color: 'red' }}>Error al cargar productos: {error.message}</p>}
        {!cargando && !error && (
          product ? (
            <div>
              <h2>{product.nombre}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
              {/* Agrega más detalles si lo deseas */}
            </div>
          ) : (
            <p>Producto no encontrado</p>
          )
        )}
      </main>
      <Footer />
    </>
  );
};

export default DetallesProductos;