import React from 'react'

export const StoreApp = ({nombre, valor}) => {
  return (
    <>
    <h1>Supermercado</h1>
    <div>Mi tienda Virtual</div>
    <p>La mejor tienda de la ciudad de {nombre} con {valor}</p>
    </>
  )
}
