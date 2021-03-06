const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 's')
chavesVariadas.set(1243, 'f')
chavesVariadas.set(1253, 'f')
console.log(chavesVariadas)