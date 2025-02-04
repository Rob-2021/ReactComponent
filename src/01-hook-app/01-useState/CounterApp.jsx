import { useState } from 'react'


export const CounterApp = () => {
    
    const [contador, setContador] = useState(10)
    
    const contar = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{contador}</h2>
            <button onClick={contar}>+1</button>
        </>
    )
}
