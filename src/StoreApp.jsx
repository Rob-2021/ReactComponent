import React from 'react'

export const StoreApp = ({nombre, valor, description}) => {
  return (
    <>
    <h1>Supermercado {description}</h1>
    <div>Mi tienda Virtual</div>
    <p>La mejor tienda de la ciudad de {nombre} con {valor}</p>
    </>
  )
}


