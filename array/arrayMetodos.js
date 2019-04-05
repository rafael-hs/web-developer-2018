const pilotos = ['vertel', 'cabilca', 'cerisco']

pilotos.pop() // exclui o último da lista
console.log(pilotos)
pilotos.push('novoPiloto')
console.log(pilotos)
pilotos.shift() // remove o primeiro do array  
console.log(pilotos)
pilotos.unshift('hámilto')
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array com valores intermediarios 
console.log(algunsPilotos2)

