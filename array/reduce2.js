const alunos = [
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'camila', nota: 8.8, bolsista: false},
    {nome: 'matheus', nota: 2.8, bolsista: false},
    {nome: 'crist', nota: 5.8, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsista?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
