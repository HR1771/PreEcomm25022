import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        fetch('/productos.json')
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err);
                setCargando(false);
            });
    }, []);

    // Persistencia del carrito
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (producto) => {
        setCart(prev => {
            const existe = prev.find(item => item.id === producto.id);
            if (existe) {
                // Calcula la nueva cantidad, pero no supera el stock
                const nuevaCantidad = Math.min(
                    existe.cantidad + producto.cantidad,
                    productos.find(p => p.id === producto.id)?.stock || existe.cantidad
                );
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: nuevaCantidad }
                        : item
                );
            }
            // Si es nuevo, tampoco supera el stock
            const cantidadInicial = Math.min(producto.cantidad, producto.stock);
            return [...prev, { ...producto, cantidad: cantidadInicial }];
        });
    };

    const handleDeleteFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    // Actualizar cantidad de un producto
    const updateCartItemQuantity = (id, cantidad) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, cantidad } : item
            )
        );
    };

    // Vaciar carrito
    const clearCart = () => setCart([]);

    // Agregar producto al listado de productos
    const agregarProducto = (nuevoProducto) => {
        setProductos(prev => [
            ...prev,
            { ...nuevoProducto, id: Date.now() }
        ]);
    };

    // Totales
    const totalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPagar = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // Login/logout
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <CartContext.Provider value={{
            cart,
            productos,
            cargando,
            error,
            handleAddToCart,
            handleDeleteFromCart,
            updateCartItemQuantity,
            clearCart,
            totalProductos,
            totalPagar,
            isAuthenticated,
            setIsAuthenticated,
            login,
            logout,
            setCart,
            agregarProducto // <-- ¡Ahora disponible en el contexto!
        }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };