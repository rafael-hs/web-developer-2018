Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray 
}


const produtos = [
    {nome:'Nodebook', preco:2499, fragil: true },
    {nome:'iPad Pro', preco:4199, fragil: true },
    {nome:'Copo de Vidro', preco:12.46, fragil: true },
    {nome:'Copo de Plástico', preco:18.99, fragil: false }
]

// console.log(produtos.filter(function(p){
//     return p.preco > 500  && p.fragil == true
// }))

const preco = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

let resultado = produtos.filter2(preco).filter2(fragil)

console.log(resultado)