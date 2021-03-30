// Obtener la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year
}

// Calcula el total a pagar segun la marca
export function calcularMarca(marca) {
  let valor
  switch (marca) {
    case 'admiral':
      valor = 100000
      break
    case 'blade':
      valor = 23000
      break
    case 'bobcat':
      valor = 34000
      break
    case 'boxville':
      valor = 100000
      break
    case 'bravura':
      valor = 40000
      break
    case 'broadway':
      valor = 45000
      break
    case 'buccaneer':
      valor = 31000
      break
    case 'burrito':
      valor = 90000
      break
    case 'clover':
      valor = 3400
      break
    case 'club':
      valor = 160000
      break
    case 'elegant':
      valor = 64000
      break
    case 'esperanto':
      valor = 25000
      break
    case 'euros':
      valor = 140000
      break
    case 'feltzer':
      valor = 82000
      break
    case 'glendale':
      valor = 85000
      break
    case 'greenwood':
      valor = 160000
      break
    case 'huntley':
      valor = 305000
      break
    case 'jester':
      valor = 240000
      break
    case 'landstalker':
      valor = 45000
      break
    case 'linerunner':
      valor = 280000
      break
    case 'majestic':
      valor = 155000
      break
    case 'manana':
      valor = 45000
      break
    case 'moonbeam':
      valor = 15000
      break
    case 'oceanic':
      valor = 40000
      break
    case 'perennial':
      valor = 150000
      break
    case 'picador':
      valor = 34000
      break
    case 'pony':
      valor = 40000
      break
    case 'premier':
      valor = 32000
      break
    case 'primo':
      valor = 25000
      break
    case 'rancher':
      valor = 60000
      break
    case 'sabre':
      valor = 300000
      break
    case 'sadler':
      valor = 9000
      break
    case ' savanna':
      valor = 57000
      break
    case ' sentinel':
      valor = 64000
      break
    case 'slamvan':
      valor = 75000
      break
    case ' solair':
      valor = 155000
      break
    case 'stafford':
      valor = 120000
      break
    case 'stallion':
      valor = 105000
      break
    case 'sunrise':
      valor = 100000
      break
    case ' tahoma':
      valor = 42000
      break
    case ' tornado':
      valor = 25000
      break
    case 'uranus':
      valor = 130000
      break
    case ' voodoo':
      valor = 55000
      break
    case 'washington':
      valor = 55000
      break
    case 'windsor':
      valor = 145000
      break
    default:
      break
  }
  return valor
}

export function calcularNitro(nitro) {
  let incremento
  switch (nitro) {
    case 'NA':
      incremento = 0
      break
    case 'x2':
      incremento = 3500
      break
    case 'x5':
      incremento = 4900
      break
    case 'x10':
      incremento = 7000
      break
    default:
      break
  }
  return incremento
}

export function calcularBodykit(bodykit) {
  return bodykit === 'si' ? 5600 : 0
}

export function calcularLlantas(llantas) {
  return llantas === 'si' ? 4200 : 0
}

export function calcularVinilo(vinilos) {
  return vinilos === 'si' ? 3500 : 0
}

export function calcularSuspension(suspension) {
  return suspension === 'si' ? 3500 : 0
}

export function calcularPintura(pintura) {
  return pintura === '1color' ? 1400 : 2100
}

// Muestra la primera letra mayuscula
export function primeraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}
