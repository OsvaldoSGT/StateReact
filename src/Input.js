import React from "react";
import './App.css'

function Input(props) {
    function handleChange(event) {
        props.setUser({
            ...props.user.name,
            [event.target.name]: event.target.value
        });
        localStorage.setItem("name", JSON.stringify(props.user.name));
    }
    const valor = localStorage.getItem("name");
    return (
        <div>
            <input placeholder="Introduce tu Nombre" onChange={handleChange} name="name" />
            <p>Hola {valor} , bienvenido !</p>
        </div>
    );
}

export default Input;