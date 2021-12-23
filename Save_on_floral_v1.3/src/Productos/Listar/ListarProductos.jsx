import React, { useState, useEffect } from "react";
import "./ListarProducto.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import baseURL from "../../API/API";

function ListarProductos() {
    const { isAuthenticated } = useAuth0();
    const[product, setProduct] = useState([]);

    useEffect(() => {
        const getUsAct = () => {
            fetch(`${baseURL}/products`)
            .then(res => res.json())
            .then(res => setProduct(res))
        }
        getUsAct()
    }, [])

    if (localStorage.getItem("state") != 'vendedor' && isAuthenticated) {

    return (

        <main>
            
            <div>
            <h3>LISTA DE PRODUCTOS </h3>
                <table  >
                
                    <thead>
                        <tr>
                            <th>Identificador del producto</th>
                            <th>Descripción del producto</th>
                            <th>Valor del producto</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map( prd => (
                            <tr key={prd.id_product}>
                                <td>{prd.id_product}</td>
                                <td>{prd.description_product}</td>
                                <td>{prd.unit_valor}</td>
                                <td>{prd.estado}</td>
                                <div>
                                    <button className = "btn btnDangeer">Eliminar</button>
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

export default ListarProductos;