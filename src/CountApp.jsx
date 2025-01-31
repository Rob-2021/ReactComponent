import { useState } from "react"



export const CountApp = ({value}) => {

    const [count, setCount] = useState(value)


    const handlesAdd = () => {
        // console.log("Sumar")
        setCount(count + 1)
    }

    const handlesSubstract = () => {
        // console.log("Restar")
        if(count > value){
            setCount(count - 1)
        }else{
            alert("No se puede restar mas")
        }
    }

    const handlesReset = () => {
        // console.log("Reiniciar")
        setCount(value)
    }

    return(
        <>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <button onClick={handlesAdd}>+1</button>
        <button onClick={handlesSubstract}>-1</button>
        <button onClick={handlesReset}>Reinicio</button>
        </>
    )
}

//boton mostrar y ocultar