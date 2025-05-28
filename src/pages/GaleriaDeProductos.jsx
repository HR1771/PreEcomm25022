import React, { useContext } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';

const GaleriaDeProductos = () => {
  const {
    cart,
    productos,
    cargando,
    error,
    handleAddToCart,
    handleDeleteFromCart
  } = useContext(CartContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <h1>Galeria de productos</h1>
      {error && <p style={{ color: 'red' }}>Error al cargar productos: {error.message}</p>}
      {
        cargando
          ? <img src={loading} alt='loading' />
          : <ProductList agregarCarrito={handleAddToCart} productos={productos} />
      }
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;