import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos = [], agregarCarrito }) => {
    return (
        <>
            <h2>Nuestros cafés</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {productos.length === 0 ? (
                    <p>No hay productos disponibles.</p>
                ) : (
                    productos.map(producto => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            agregarCarrito={agregarCarrito}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default ProductList
