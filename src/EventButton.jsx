import React from 'react'

// function clickHandler() {
//     console.log("Boton clickeado")
// }

export const EventButton = () => {
    return (
        <>
            <h2>Eventos del Boton</h2>
            <button onClick={function click() {alert("Hola mundo")}}
                >Enviar</button>
        </>
    )
}
