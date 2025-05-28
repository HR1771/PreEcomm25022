import React, { useContext } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';

export default function Home() {
  const {
    handleDeleteFromCart,
    cart,
    cargando,
    productos,
    handleAddToCart,
    error
  } = useContext(CartContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <main>
        <h1>El Lado B</h1>
        <p>
          Descubrí El Lado B, donde cada taza cuenta una historia. Somos una cafetería de especialidad apasionada por ofrecer café de alta calidad, con granos seleccionados y métodos de extracción que resaltan sus mejores notas. Te invitamos a explorar nuevos sabores y a disfrutar de una experiencia única, lejos de lo convencional. Entrá a El Lado B y dejate sorprender por el verdadero arte del café.
        </p>
        {error && (
          <p style={{ color: 'red' }}>
            Error al cargar productos: {error.message}
          </p>
        )}
        {cargando ? (
          <img src={loading} alt='loading' />
        ) : (
          <ProductList agregarCarrito={handleAddToCart} productos={productos} />
        )}
      </main>
      <Footer />
    </>
  );
}