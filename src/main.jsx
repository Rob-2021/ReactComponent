import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import { Button } from './Button'
import { PropType } from './PropType'
import { NavBar } from './NavBar'
import './index.css'
import { EventButton } from './EventButton'
import { CountApp } from './CountApp'
import { MostrarBotones } from './MostrarBotones'
import { CounterApp } from './01-hook-app/01-useState/CounterApp'
import { CounterWithCustomHook } from './01-hook-app/01-useState/CounterWithCustom'
import { MessageApp } from './01-hook-app/02-useEfect/MessageApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <StoreApp
        nombre={"Sucre"}
        valor={"20 años de experiencia"}
        description={"Mañana"}
        />
        <StoreApp
        nombre={"Sucre"}
        valor={"20 años de experiencia"}
        description={"Tarde"}
        /> */}

        {/* <Button label="Guardar" color="blue"/>
        <Button label="Cancelar" color="red"/> */}

        {/* <PropType title={"Clase"}/> */}
        {/* <NavBar/> */}
        {/* <EventButton/> */}

        {/* <CountApp value={5}/> */}

        {/* <MostrarBotones/> */}

        {/* <CounterApp/> */}
        {/* <CounterWithCustomHook/> */}
        <MessageApp/>
    </React.StrictMode>
)