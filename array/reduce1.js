const alunos = [
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'camila', nota: 8.8, bolsista: true},
    {nome: 'matheus', nota: 2.8, bolsista: false},
    {nome: 'crist', nota: 5.8, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)