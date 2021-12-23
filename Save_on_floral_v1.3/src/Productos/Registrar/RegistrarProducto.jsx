import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";



function RegistroProducto() {
    const { isAuthenticated } = useAuth0();

    if (localStorage.getItem("state")  != 'vendedor' && isAuthenticated) {

    return (
        
<section className="form-register">
        <h3>REGISTRO DE PRODUCTOS</h3>
        <div>
            <label>Identificador del producto</label>
            <input className="controls" type="number" name="identificadorProducto" id=""
                placeholder="Ingrese el identificador del producto"/>
        </div>
        <div>
            <label>Descripcion del producto</label>
            <input className="controls" type="text" name="descripcionProducto" id="" placeholder="Ingrese la descripcion del producto"/>
        </div>
        <div>
            <label>Valor del producto</label>
            <input className="controls" type="number" name="valorProducto" id="" placeholder="Ingrese el valor unitario del producto"/>
        </div>
       

        <div>
        <input type="radio" name="sexo" id="hombre" />
        <label for="hombre">Disponible</label>
      </div>
      <div>
        <input type="radio" name="sexo" id="hombre" />
        <label for="hombre">No disponible</label>
      </div>

      
        <p>
            <button type="button" className="btn btn-success btn-lg" onClick={alert("El producto se guardo correctamente")}>Registrar producto</button>
        </p>
</section>
       
    )
}
else {
  return <Redirect to="/"></Redirect>
}
}

export default RegistroProducto;