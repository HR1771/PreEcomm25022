import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Admin from "./pages/Admin";
import Contactos from "./pages/Contactos";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"; // <-- Update import name
import DetallesProductos from "./components/DetallesProductos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acercade" element={<AcercaDe />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/galeria" element={<GaleriaDeProductos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/producto/:id" element={<DetallesProductos />} />
      <Route path="*" element={<NotFound />} /> {/* Update element name */}
    </Routes>
  );
}