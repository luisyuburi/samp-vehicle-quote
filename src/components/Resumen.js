import React from 'react'
import styled from '@emotion/styled'
import { primeraMayuscula } from '../helper'
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Resumen = ({ datos }) => {
  // Extraer datos

  const {
    marca,
    kilometraje,
    nitro,
    llantas,
    bodykit,
    suspension,
    vinilo,
    pintura,
  } = datos

  if (
    marca === '' ||
    kilometraje === '' ||
    nitro === '' ||
    llantas === '' ||
    bodykit === '' ||
    suspension === '' ||
    vinilo === '' ||
    pintura === ''
  ) {
    return null
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Kilometraje: {primeraMayuscula(kilometraje)}</li>
        <li>Nitro: {nitro}</li>
      </ul>
    </ContenedorResumen>
  )
}
Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
}
export default Resumen
