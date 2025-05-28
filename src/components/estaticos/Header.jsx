import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const location = useLocation();

  // Cierra el carrito y navega al home si no estamos en home
  const handleCartClick = () => {
    if (isCartOpen) {
      setCartOpen(false);
      if (location.pathname !== '/') {
        window.location.href = '/';
      }
    } else {
      setCartOpen(true);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/' className='link'>Inicio</Link></li>
          <li><Link to='/acerca' className='link'>Sobre nosotros</Link></li>
          <li><Link to='/galeria' className='link'>Galería de productos</Link></li>
          <li><Link to='/contactos' className='link'>Contacto</Link></li>
          <li className='cartnav'>
            <button className='btnCart' onClick={handleCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </li>
          <li className='btnLogin'>
            <Link to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></Link>
          </li>
          <li className='btnAdmin'>
            <Link to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;