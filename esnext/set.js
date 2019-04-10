//não aceita repetição/ não indexada

const times = new Set()
times.add('Vasco')
times.add('São paulo')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)

