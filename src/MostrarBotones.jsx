import React from 'react'
import { useState } from 'react'

export const MostrarBotones = () => {

    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }


    return (
        <>
            <h1>Mostrar Botones</h1>
            {show && <button>Boton 1</button>}
            {show && <button>Boton 2</button>}
            {show && <button>Boton 3</button>}
            <button onClick={handleShow}>Mostrar/Ocultar</button>
        </>
    )
}
