//Creación de una matriz de dos dimensiones
/*Esta matriz bidimensional representa un tablero de ajedrez. 
El primer movimiento se realiza copiando la 'p'de tablero[6][4]en tablero[4][4]. 
La posición [6][4]se limpia. */
let tablero = [
    ['T','C','A','D','R','A','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','a','d','r','a','c','t'] ]
  
  console.log(tablero.join('\n') + '\n\n')
  
  // Adelantar dos posiciones el peón de rey
  tablero[4][4] = tablero[6][4]
  tablero[6][4] = ' '
  console.log(tablero.join('\n'))
  