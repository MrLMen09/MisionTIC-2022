import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileStyles.css"
import { getDefaultNormalizer } from "@testing-library/react";
import baseURL from "../API/API";
import Info from "./info/Info";


function Profile() {

    const { user, isAuthenticated } = useAuth0();
    const [validUser, setValidUser] = useState(false);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    
    useEffect(() => {
        const getUsAct = () => {
            fetch(`${baseURL}/profile/lemendozat@correo.udistrital.edu.co`)
            .then(res => res.json())
            .then(res => setUsActual(res))
        }
        getUsAct()
    }, [])
    
    const validateUserRole = async () => {
        const response = await fetch(`${baseURL}/profile/${user.email}`);
        const jsonResponse = await response.json();
        return jsonResponse;

    }

    const grantAccess = async () => {
        let userData;
        if (isAuthenticated) {
            userData = await validateUserRole();
        }
        else {
            if (!verifySesion()) {
                loginWithRedirect();
            }

            setValidUser(false);
            return;
        }

        if (userData) {
            if (userData.role != "invitado") {
                setValidUser(true);
                localStorage.setItem("state", userData.role);

            }
            else {
                
                localStorage.setItem("state", userData.role);
                setValidUser(false);
                
            }
        }
        else {
            setValidUser(false);
        }
    }
    const[usuarioActual, setUsActual] = useState([]);

    const verifySesion = () => {
        const cookies = document.cookie;
        let state = false;
        if (cookies.includes('auth0')) {
            state = true;
        }
        return state;

    }

    useEffect(() => {
        grantAccess();

    }, [isAuthenticated, validUser]);




    return (
        

        <div className="container">

            <div className="container emp-profile">
                <form>
                    
                <Info info={usuarioActual}/>
                
                {isAuthenticated ? <Link className="nav-link active" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</Link> : null}

                </form>
            </div>

        </div>


    )

}

export default Profile;