import React, { useState, useEffect } from "react";
import "./ListarUsuario.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import baseURL from "../../API/API";

function ListarUsuarios() {
    const { isAuthenticated } = useAuth0();
    const[users, setUsers] = useState([]);

    useEffect(() => {
        const getUsAct = () => {
            fetch(`${baseURL}/users`)
            .then(res => res.json())
            .then(res => setUsers(res))
        }
        getUsAct()
    }, [])

    if (localStorage.getItem("state")  != 'vendedor' && isAuthenticated) {

    return (
        <main >

            <div>
                <h3>LISTA DE USUARIOS </h3>
                <table  >

                    <thead>
                        <tr>
                            <th>Identificador del usuario</th>
                            <th>Nombre de usuario</th>
                            <th>Nombre</th>
                            <th>Rol del usuario</th>
                            <th>Estado</th>
                            <th>Numero de telefono</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map( usr => (
                            <tr key={usr.id_user}>
                                <td>{usr.id_user}</td>
                                <td>{usr.userName}</td>
                                <td>{usr.nombre}</td>
                                <td>{usr.rol}</td>
                                <td>{usr.estado}</td>
                                <td>{usr.numTel}</td>
                                <td>{usr.email}</td>
                                <div>
                                    <button variant = "warning">Editar</button>
                                    <button variant = "danger">Eliminar</button>
                                </div>
                            </tr>
                        ) 
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
else {
  return <Redirect to="/"></Redirect>
}
}

export default ListarUsuarios
