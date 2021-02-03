import React from 'react';
import './login.css';

import { useState } from 'react';


function LoginScreen(props) {
    const [user, setUser] = useState('');
    const [password, setpassword] = useState('');

    function nameChange(event) {
        setUser(event.target.value);
    }
    function passwordChange(event) {
        setpassword(event.target.value);
    }

    function enviarFormulario(event) {
        event.preventDefault();
        console.log(`usuario: ${user}, contraseña:${password}`);
    }

    return (
        <div className="contenedor">
            <div className="login-form">
                <h1>Gestion Multirubro</h1>
                <form className="formulario">
                    <input type="text" autoComplete="off" required name="username" value={user} onChange={nameChange} placeholder="Usuario..." />
                    <input type="password" value={password} onChange={passwordChange} required placeholder="Contraseña..." />
                    <button type="submit" onClick={enviarFormulario}>Enviar</button>
                </form>

            </div>
        </div>

    );
}

export default LoginScreen;