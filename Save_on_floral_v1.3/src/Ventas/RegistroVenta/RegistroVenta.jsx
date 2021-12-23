import React from "react";
import "./RegistroVenta.css";


function RegistroVenta (){

    return(
        <section className="form-register">
        <h3>REGISTRO DE VENTAS</h3>
        <div>
            <label>Nombre del vendedor</label>
            <input className="controls" type="text" name="nombreVendedor" id="" placeholder="Ingrese nombre del vendedor"/>
        </div>
        <div>
            <label>Identificación del cliente</label>
            <input className="controls" type="number" name="identificacionCliente" id=""
                placeholder="Ingrese identificación del cliente"/>
        </div>
        <div>
            <label>Nombre del cliente</label>
            <input className="controls" type="text" name="nombreCliente" id="" placeholder="Ingrese nombre del cliente"/>
        </div>
        <div>
            <label>Id de la venta</label>
            <input className="controls" type="number" name="IdVenta" id="" placeholder="Ingrese identificador de la venta"/>
        </div>
        <div>
            <label>Valor total venta</label>
            <input className="controls" type="number" name="totalVenta" id="" placeholder="Ingrese valor total de la venta"/>
        </div>
        <div>
            <label>Fecha de la venta</label>
            <input className="controls" type="date" name="fechaVenta" id=""/>
        </div>
        <div>
            <label>Id del producto</label>
            <input className="controls" type="number" name="IdProducto" id=""
                placeholder="Ingrese identificador del producto"/>
        </div>
        <div>
            <label>Cantidad del producto</label>
            <input className="controls" type="number" name="cantidadProducto" id=""
                placeholder="Ingrese la cantidad del producto"/>
        </div>
        <div>
            <label>Precio del producto</label>
            <input className="controls" type="number" name="precioProducto" id=""
                placeholder="Ingrese el precio del producto"/>
        </div>

        <p>
            <button type="button" className="btn btn-success">Agregar otro producto</button>
        </p>
        <p>
            <button type="button" className="btn btn-success btn-lg" >Registrar venta</button>
        </p>

    </section>



    )

}

export default RegistroVenta;