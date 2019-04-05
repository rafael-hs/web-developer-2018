console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Rafael'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())


//alterando um comportamento padrão da linguagem
String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())