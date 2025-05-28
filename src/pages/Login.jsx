import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Login() {
  const { setIsAuthenticated } = useContext(CartContext);
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías validar usuario y clave
    setIsAuthenticated(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={clave}
        onChange={e => setClave(e.target.value)}
        placeholder="Clave"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
