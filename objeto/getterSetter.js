const sequencia = {
    _valor: 1, //conveção
    get valor(){ return this._valor++},
    set valor(valor){ 
        if(valor > this._valor){
            this. _valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

const obj = new Object
obj['valor1'] = 2
obj['valor2'] = 3

console.log(obj)