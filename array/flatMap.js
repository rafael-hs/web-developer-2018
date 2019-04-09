const escola = [{
    nome: 'Turma M1',
    alunos:[
        {
        nome: 'Pedro', 
        nota: 7.8
        },
        {nome: 'camila',
         nota: 8.8
        },
        {nome: 'matheus',
        nota: 2.8
        },
        {nome: 'crist',
        nota: 5.8}]
},{
    nome: 'Turma M2',
    alunos:[
        {
        nome: 'cacilda', 
        nota: 4.8
        },
        {nome: 'mat',
         nota: 6.8
        },
        {nome: 'calc',
        nota: 7.8
        },
        {nome: 'crast',
        nota: 2.8}]

}]

const getNota = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)