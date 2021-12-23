import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



function Navigation() {
    //const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    if (localStorage.getItem("state") != 'invitado' && isAuthenticated) {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container">
                            <Link className="navbar-brand" to="/">Inicio</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Administracion de ventas
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/RegistroVenta">Registrar venta</Link></li>
                                        <li><Link className="dropdown-item" to="/ListarVentas">Listar ventas</Link></li>
                                        <li><Link className="dropdown-item" to="/ActualizarVentas">Buscar y actualizar ventas</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Administracion de productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/RegistroProducto">Registrar producto</Link></li>
                                        <li><Link className="dropdown-item" to="/ListarProductos">Listar productos</Link></li>
                                        <li><Link className="dropdown-item" to="/ActualizarProductos">Buscar y actualizar productos</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Gestion de usuarios
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/ListarUsuarios">Listar usuarios</Link></li>
                                        <li><Link className="dropdown-item" to="/ActualizarUsuario">Actualizar usuarios</Link></li>
                                    </ul>
                                </li>

                                {/* <Link to="/login" className="nav-link">Login</Link> */}
                                <li >
                                    {isAuthenticated ? <Link className="nav-link active" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</Link> : null}
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        )
    }
    else {
        return null
    }
}

export default Navigation;