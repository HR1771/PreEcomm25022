import React, { useContext, useState } from "react";
import FormularioProducto from "../components/FormularioProducto";
import { CartContext } from "../context/CartContext";

const Admin = () => {
    const { productos, cargando } = useContext(CartContext);
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>
                                    <button className="deleteButton">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
            {open && (<FormularioProducto />)}
        </div>
    );
};

export default Admin;