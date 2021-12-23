import React, { useState, useEffect } from "react";
import "./ListarVenta.css";
import baseURL from "../../API/API";


function ListarVentas() {
    
    const[ventas, setVentas] = useState([]);

    useEffect(() => {
        const getUsAct = () => {
            fetch(`${baseURL}/sales`)
            .then(res => res.json())
            .then(res => setVentas(res))
        }
        getUsAct()
    }, [])

    return (

        <main >
            
            <div>
            <h3>LISTA DE VENTAS </h3>
                <table  >
                
                    <thead>
                        <tr>
                            <th>Nombre del vendedor</th>
                            <th>Identificacion del cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Id de la venta</th>
                            <th>Valor total venta</th>
                            <th>Fecha de la Venta</th>
                            <th>Id del producto</th>
                            <th>Cantidad del producto</th>
                            <th>Precio del producto</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map( venta => (
                            <tr key={venta.id_sale}>
                                <td>{venta.id_sale}</td>
                                <td>{venta.total_value}</td>
                                <td>{venta.id_product}</td>
                                <td>{venta.cant_product}</td>
                                <td>{venta.unit_price}</td>
                                <td>{venta.fecha}</td>
                                <td>{venta.id_client}</td>
                                <td>{venta.nombre}</td>
                                <td>{venta.vendedor}</td>
                            </tr>
                        ) 
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListarVentas;