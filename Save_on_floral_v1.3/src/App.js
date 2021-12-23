import React from "react";
import RegistroVenta from "./Ventas/RegistroVenta/RegistroVenta.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./Profile/Profile.jsx"
import Navigation from "./Nav/Navigation.jsx";
import RegistroProducto from "./Productos/Registrar/RegistrarProducto.jsx";
import ActualizarProducto from "./Productos/Actualizar/ActualizarProductos.jsx";
import ActualizarVentas from "./Ventas/Actualizar/ActualizarVentas.jsx";
import ListarVentas from "./Ventas/Listar/ListarVentas.jsx";
import ListarProductos from "./Productos/Listar/ListarProductos.jsx";
import ListarUsuarios from "./Usuarios/ListarUsuarios/ListarUsuarios.jsx";
import ActualizarUsuario from "./Usuarios/ActualizarUsuarios/ActualizarUsuario.jsx";



function App() {
  return (

    
      <Router>
        <Navigation/>

        <Route path="/" exact component={Profile} />
        <Route path="/RegistroVenta" exact component={RegistroVenta} />
        <Route path="/ListarVentas" exact component={ListarVentas} />
        <Route path="/ActualizarVentas" exact component={ActualizarVentas} />
        <Route path="/RegistroProducto" exact component={RegistroProducto} />
        <Route path="/ListarProductos" exact component={ListarProductos} />
        <Route path="/ActualizarProductos" exact component={ActualizarProducto} />
        <Route path="/ListarUsuarios" exact component={ListarUsuarios} />
        <Route path="/ActualizarUsuario" exact component={ActualizarUsuario} />

      </Router>
      

  );
}

export default App;
