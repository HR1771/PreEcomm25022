import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './styleCart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
    const {
        cart,
        handleDeleteFromCart,
        setIsAuthenticated,
        isAuthenticated,
        setCart
    } = useContext(CartContext);
    const navigate = useNavigate();

    // Total de productos y total a pagar
    const totalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPagar = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // Cierra el carrito y navega al home
    const handleClose = () => {
        onClose();
        navigate('/');
    };

    // Vacía el carrito
    const handleVaciarCarrito = () => {
        setCart([]);
    };

    // Overlay para cerrar el carrito al hacer click fuera
    return (
        <>
            {isOpen && <div className="cart-overlay" onClick={handleClose}></div>}
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className='cart-header'>
                    <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
                    <button onClick={handleClose} className='close-button'>X</button>
                </div>
                <div className='cart-content'>
                    {isAuthenticated && (
                        <div style={{ color: 'green', marginBottom: 10 }}>
                            ¡Bienvenido/a de nuevo! Gracias por comprar con nosotros.
                        </div>
                    )}
                    <div style={{ marginBottom: 10 }}>
                        <b>Productos en el carrito:</b> {totalProductos}
                    </div>
                    {cart.length === 0 ? (
                        <p style={{ color: 'red' }}>El carrito está vacío</p>
                    ) : (
                        <>
                            <ul className='cart-item'>
                                {cart.map((item) => (
                                    <li key={item.id} style={{ color: 'black', marginBottom: 8 }}>
                                        <b>{item.nombre}</b> - ${item.precio} x {item.cantidad}
                                        <button
                                            onClick={() => handleDeleteFromCart(item.id)}
                                            style={{ marginLeft: 8 }}
                                            title="Eliminar del carrito"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: 15, fontWeight: 'bold', color: '#222' }}>
                                Total a pagar: ${totalPagar}
                            </div>
                            <button
                                onClick={handleVaciarCarrito}
                                style={{
                                    marginTop: 15,
                                    background: '#e74c3c',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: 4,
                                    cursor: 'pointer'
                                }}
                            >
                                Vaciar carrito
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;