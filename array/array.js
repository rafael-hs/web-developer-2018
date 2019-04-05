//array em js é um objeto

 console.log(typeof Array, typeof new Array, typeof [])

 let aprovados = new Array('Bia', 'Carlos')

 aprovados = ['teste', 'testinho', 'testaos']
 console.log(aprovados[0])
 console.log(aprovados[1])

 aprovados[2] = 'Cabalaio'
 aprovados.push('Sekiro')
 console.log(aprovados)
 aprovados.sort()
 console.log(aprovados)

 aprovados = ['teste', 'testinho', 'testaos']
 aprovados.splice(1, 2)
 console.log(aprovados)