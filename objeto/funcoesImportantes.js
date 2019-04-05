const pessoa = {
    nome: 'Gafild',
    idade: 10,
    peso: 45.6
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

//destructuring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty()
