import JuegoVida from './juegoDeLaVida.js'

const fila = process.argv[2]
const columnas = process.argv[3]

const juego = new JuegoVida(fila, columnas)

juego.crearTablero()
juego.recorrido()
juego.imprimirTableros()
