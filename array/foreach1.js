const aprovados = ['Agatha', 'aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}  `)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exbirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exbirAprovados)
