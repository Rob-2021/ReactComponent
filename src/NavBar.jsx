import React from 'react'
import PropTypes from 'prop-types'

export const NavBar = ({ valor = 9999 }) => {
  return (
    <>
      <h1>Navegando entre paginas</h1>
      <p>{valor}</p>
    </>
  )
}

NavBar.propTypes = {
  valor: PropTypes.number
}