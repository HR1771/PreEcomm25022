import React, { useState } from 'react';
import './styleProductos.css';
import { Link } from 'react-router-dom';

const Productos = ({ producto, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(producto.cantidad || 1);

  const increase = () => {
    if (cantidad < producto.stock) setCantidad(prev => prev + 1);
  };

  const decrease = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section className='card'>
      <div className='imganContainer'>
        <img src={producto.imagen} alt={producto.nombre} className='imagen' />
      </div>
      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>
        Stock: {producto.stock}
        {producto.stock < 5 && (
          <span style={{ color: 'red', marginLeft: 8, fontWeight: 600 }}>
            ¡Últimas unidades!
          </span>
        )}
      </p>
      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button
          className='qtyButton'
          onClick={increase}
          disabled={cantidad >= producto.stock}
        >
          +
        </button>
      </div>
      <button
        style={{ display: cantidad === 0 ? 'none' : 'block' }}
        onClick={() => agregarCarrito({ ...producto, cantidad })}
        disabled={producto.stock === 0}
      >
        Agregar al carrito
      </button>
      <Link to={`/productos/${producto.id}`}>Ver más</Link>
    </section>
  );
};

export default Productos;