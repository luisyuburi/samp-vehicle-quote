import React, { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 15px;
`
const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      nitro: '',
    },
  })

  const [cargando, guardarCargando] = useState(false)

  //Extraer datos
  const { datos, cotizacion } = resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando && <Spinner />}
        <Resumen datos={datos} />
        {!cargando && <Resultado cotizacion={cotizacion} />}
      </ContenedorFormulario>
    </Contenedor>
  )
}

export default App
