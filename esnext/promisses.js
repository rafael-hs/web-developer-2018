function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?¹?¹'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))