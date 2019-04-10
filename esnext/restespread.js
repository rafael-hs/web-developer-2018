//operador ... rest{juntar}/spread{espalhar}
//usar rest com parâmetro de função

//usar spread com obbjeto
const funcionario = {nome: 'Maria', salario: 451.45}
const clone = {ativo: true, ...funcionario}

console.log(clone)

const grupoA = ['Jao', 'Pedrock', 'Jujuba']
const grupoFinal = ['mariGold', ...grupoA]

console.log(grupoFinal)
