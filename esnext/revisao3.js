// ES8: Object.values/Object.entries 
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome)
console.log(pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
cachorro = new Cachorro
console.log(cachorro.falar())