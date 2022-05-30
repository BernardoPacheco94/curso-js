//Função criar linha
function linha (){
    console.log('---------------------------------')
}

linha()
// Função par ou impar
function parimpar (n){
    if (n % 2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

console.log(parimpar(4))

linha()

//Função soma
function soma (n1=0, n2=0){//se eu não passar um dos números será considerado zero (parametro pré definido)
    return n1 + n2
}
console.log(soma(5))

linha()

//Função dentro de uma variável
let n = function(x){
    return 2*x
}
console.log(n(6))

linha()

//Calcular fatorial (uma função dentro da outra - REVURSIVIDADE)
function fatorial (n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n-1)//chamando novamente a função fatorial
    }
}
console.log(fatorial(5))

linha()
