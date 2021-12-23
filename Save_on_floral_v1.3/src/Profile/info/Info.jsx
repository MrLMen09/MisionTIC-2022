import { User } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import "../ProfileStyles.css"

const Info = ({info}) => {
    return(
        <form method="post">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="profile-head">
                                    {info.map( inf => (
                                        <h5>{inf.user_name}</h5>
                                    ) 
                                    )}

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">Perfil
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Id de usuario</label>
                                    </div>
                                    <div className="col-md-6">
                                        {info.map( inf => (
                                            <p>2</p>
                                        ) 
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                    </div>
                                    <div className="col-md-6">
                                        {info.map( inf => (
                                            <p>{inf.nombre}</p>
                                        ) 
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        {info.map( inf => (
                                            <p>{inf.email}</p>
                                        ) 
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Rol</label>
                                    </div>
                                    <div className="col-md-6">
                                        {info.map( inf => (
                                            <p>Administrador</p>
                                        ) 
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">                                        
                                    <label>Estado</label>
                                    </div>
                                    <div className="col-md-6">
                                        {info.map( inf => (
                                            <p>Autorizado</p>
                                        ) 
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
    );
}

export default Info;