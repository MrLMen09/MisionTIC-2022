import React from "react"
import "../RegistroVenta/RegistroVenta.css";

function ActualizarVentas() {
  return (

    <section className="form-register">
      <h3>EDITAR REGISTRO DE VENTAS</h3>
      <div>
        <label>Id de la venta</label>
        <input className="controls" type="number" name="IdVenta" id="" placeholder="Ingrese identificador de la venta" />
      </div>
      <div>
        <label>Identificación del cliente</label>
        <input className="controls" type="number" name="identificacionCliente" id=""
          placeholder="Ingrese identificación del cliente" />
      </div>
      <div>
        <label>Nombre del cliente</label>
        <input className="controls" type="text" name="nombreCliente" id="" placeholder="Ingrese nombre del cliente" />
      </div>
      <p>
        <button type="button" className="btn btn-success">Consultar Registro Venta</button>
      </p>
      <div>
        <label>Nombre del vendedor</label>
        <input className="controls" type="text" name="nombreVendedor" id="" placeholder="Ingrese nombre del vendedor" />
      </div>
      <div>
        <label>Identificación del cliente</label>
        <input className="controls" type="number" name="identificacionCliente" id=""
          placeholder="Ingrese identificación del cliente" />
      </div>
      <div>
        <label>Nombre del cliente</label>
        <input className="controls" type="text" name="nombreCliente" id="" placeholder="Ingrese nombre del cliente" />
      </div>

      <div>
        <label>Valor total venta</label>
        <input className="controls" type="number" name="totalVenta" id="" placeholder="Ingrese valor total de la venta" />
      </div>
      <div>
        <label>Fecha de la venta</label>
        <input className="controls" type="date" name="fechaVenta" id="" />
      </div>
      <div>
        <label>Id del producto</label>
        <input className="controls" type="number" name="IdProducto" id="" placeholder="Ingrese identificador del producto" />
      </div>
      <div>
        <label>Cantidad del producto</label>
        <input className="controls" type="number" name="cantidadProducto" id=""
          placeholder="Ingrese la cantidad del producto" />
      </div>
      <div>
        <label>Precio del producto</label>
        <input className="controls" type="number" name="precioProducto" id="" placeholder="Ingrese el precio del producto" />
      </div>

      <div>
        <input type="radio" name="sexo" id="hombre" />
        <label for="hombre">En proceso</label>
      </div>
      <div>
        <input type="radio" name="sexo" id="hombre" />
        <label for="hombre">Cancelada</label>
      </div>

      <div>
        <input type="radio" name="sexo" id="hombre" />
        <label for="hombre">Entregada</label>
      </div>




      <p>
        <button type="button" className="btn btn-success btn-lg" >Guardar Cambios</button>
      </p>

    </section>



  )

}

export default ActualizarVentas;
