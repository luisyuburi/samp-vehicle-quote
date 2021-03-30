import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularNitro,
  calcularLlantas,
  calcularBodykit,
  calcularPintura,
  calcularSuspension,
  calcularVinilo,
} from '../helper'
import PropTypes from 'prop-types'
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`
const Label = styled.label`
  flex: 0 0 100px;
`
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`
const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercas;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`
const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    marca: '',
    kilometraje: '',
    nitro: '',
    llantas: '',
    bodykit: '',
    suspension: '',
    vinilo: '',
    pintura: '',
    bateria: '',
  })

  const [error, guardarError] = useState(false)

  // Extraer valores del state
  const {
    marca,
    kilometraje,
    nitro,
    llantas,
    bodykit,
    suspension,
    vinilos,
    pintura,
    bateria,
  } = datos

  // Leer los datos del formulario y guardarlos en el state
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  // Cuando el usuario presiona submit
  const cotizarSeguro = (e) => {
    e.preventDefault()
    if (
      marca.trim() === '' ||
      kilometraje.trim() === '' ||
      nitro.trim() === '' ||
      llantas.trim() === '' ||
      bodykit.trim() === '' ||
      suspension.trim() === '' ||
      vinilos.trim() === '' ||
      pintura.trim() === ''
    ) {
      guardarError(true)
      return
    }
    guardarError(false)

    // Una base de 2000
    let resultado = 0

    //Obtenemos el valor del auto segun la marca seleccionada
    resultado += calcularMarca(marca)
    // Por cada kilometro, se resta 0.01%
    const reduccionKilometraje = kilometraje * 0.01

    resultado -= (resultado * reduccionKilometraje) / 100

    // Nitro x2 aumenta 4.200$
    // Nitro x5 aumenta 4.900$
    // Nitro x10 aumenta 7.000$
    const incrementoNitro = calcularNitro(nitro)
    const incrementoLlantas = calcularLlantas(llantas)
    const incrementoBodykit = calcularBodykit(bodykit)
    const incrementoVinilos = calcularVinilo(vinilos)
    const incrementoPintura = calcularPintura(pintura)
    const incrementoSuspension = calcularSuspension(suspension)

    resultado +=
      incrementoNitro +
      incrementoLlantas +
      incrementoBodykit +
      incrementoVinilos +
      incrementoPintura +
      incrementoSuspension

    resultado -= resultado * 0.3
    resultado = parseFloat(resultado).toFixed(2)
    guardarCargando(true)

    setTimeout(() => {
      //Elimina el spinner
      guardarCargando(false)

      //Pasa la informacion al componente principal
      guardarResumen({
        cotizacion: Number(resultado),
        datos,
      })
    }, 3000)
  }

  return (
    <form onSubmit={cotizarSeguro}>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="admiral">Admiral</option>
          <option value="blade">Blade</option>
          <option value="boxville">Boxville</option>
          <option value="bravura">Bravura</option>
          <option value="broadway">Broadway</option>
          <option value="buccaneer">Buccaneer</option>
          <option value="burrito">Burrito</option>
          <option value="clover">Clover</option>
          <option value="club">Club</option>
          <option value="elegant">Elegant</option>
          <option value="esperanto">Esperanto</option>
          <option value="euros">Euros</option>
          <option value="feltzer">Feltzer</option>
          <option value="glendale">Glendale</option>
          <option value="greenwood">Greenwood</option>
          <option value="huntley">Greenwood</option>
          <option value="jester">Jester</option>
          <option value="landstalker">Landstalker</option>
          <option value="linerunner">LineRunner</option>
          <option value="majestic">Majestic</option>
          <option value="manana">Manana</option>
          <option value="moonbeam">Moonbeam</option>
          <option value="oceanic">Oceanic</option>
          <option value="perennial">Perennial</option>
          <option value="picador">Picador</option>
          <option value="pony">Pony</option>
          <option value="premier">Premier</option>
          <option value="primo">Primo</option>
          <option value="rancher">Rancher</option>
          <option value="sabre">Sabre</option>
          <option value="sadler">Sadler</option>
          <option value="savanna">Savanna</option>
          <option value="sentinel">Sentinel</option>
          <option value="slamvan">Slamvan</option>
          <option value="solair">Solair</option>
          <option value="stafford">Stafford</option>
          <option value="stallion">Stallion</option>
          <option value="sunrise">Sunruse</option>
          <option value="tahoma">Tahoma</option>
          <option value="tornado">Tornado</option>
          <option value="uranus">Uranus</option>
          <option value="voodoo">Voodoo</option>
          <option value="washignton">Washington</option>
          <option value="windsor">Windsor</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Kilometraje</Label>
        <Input type="number" name="kilometraje" onChange={obtenerInformacion} />
      </Campo>

      <Campo>
        <Label>Nitro</Label>
        <InputRadio
          type="radio"
          name="nitro"
          value="NA"
          checked={nitro === 'NA'}
          onChange={obtenerInformacion}
        />{' '}
        No posee
        <InputRadio
          type="radio"
          name="nitro"
          value="x2"
          checked={nitro === 'x2'}
          onChange={obtenerInformacion}
        />{' '}
        x2
        <InputRadio
          type="radio"
          name="nitro"
          value="x5"
          checked={nitro === 'x5'}
          onChange={obtenerInformacion}
        />{' '}
        x5
        <InputRadio
          type="radio"
          name="nitro"
          value="x10"
          checked={nitro === 'x10'}
          onChange={obtenerInformacion}
        />{' '}
        x10
      </Campo>
      <Campo>
        <Label>Llantas tunning</Label>
        <InputRadio
          type="radio"
          name="llantas"
          value="no"
          checked={llantas === 'no'}
          onChange={obtenerInformacion}
        />{' '}
        No
        <InputRadio
          type="radio"
          name="llantas"
          value="si"
          checked={llantas === 'si'}
          onChange={obtenerInformacion}
        />{' '}
        Si
      </Campo>
      <Campo>
        <Label>Bodykit</Label>
        <InputRadio
          type="radio"
          name="bodykit"
          value="no"
          checked={bodykit === 'no'}
          onChange={obtenerInformacion}
        />{' '}
        No
        <InputRadio
          type="radio"
          name="bodykit"
          value="si"
          checked={bodykit === 'si'}
          onChange={obtenerInformacion}
        />{' '}
        Si
      </Campo>
      <Campo>
        <Label>Suspension</Label>
        <InputRadio
          type="radio"
          name="suspension"
          value="no"
          checked={suspension === 'no'}
          onChange={obtenerInformacion}
        />{' '}
        No
        <InputRadio
          type="radio"
          name="suspension"
          value="si"
          checked={suspension === 'si'}
          onChange={obtenerInformacion}
        />{' '}
        Si
      </Campo>
      <Campo>
        <Label>Vinilos</Label>
        <InputRadio
          type="radio"
          name="vinilos"
          value="no"
          checked={vinilos === 'no'}
          onChange={obtenerInformacion}
        />{' '}
        No
        <InputRadio
          type="radio"
          name="vinilos"
          value="si"
          checked={vinilos === 'si'}
          onChange={obtenerInformacion}
        />{' '}
        Si
      </Campo>
      <Campo>
        <Label>Pintura</Label>
        <InputRadio
          type="radio"
          name="pintura"
          value="1color"
          checked={pintura === '1color'}
          onChange={obtenerInformacion}
        />{' '}
        1 Color(es)
        <InputRadio
          type="radio"
          name="pintura"
          value="2color"
          checked={vinilos === '2color'}
          onChange={obtenerInformacion}
        />{' '}
        2 Color(es)
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  )
}
Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired,
}
export default Formulario
