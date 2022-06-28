let array = [1, 2, 3]

class Tabuada {
    constructor (numero, valores){
        this.numero = numero
        this.valores = valores
    }

    get tabela(){
        return this.valores.map(valor => {//return this.valores.map(function(valor) - Sem arrow é necessário usar o bind
            return {
                numero: this.numero,
                valor: valor,
                resultado: this.numero * valor
            }
        }) //o bind fica aqui e busca o 'this' da classe, pois o escopo é local
    }
}



let x = new Tabuada(4, [1, 2, 3, 4])
console.table(x.tabela)

/*
USANDO O ARROW:

let arrayModificado = array.map( valor => valor *2 )

console.log(arrayModificado)

------------------------------------

SEM USAR ARROW:

let arrayModificado = array.map(mapear)

console.log(arrayModificado)

function mapear (valor){
    return valor * 2
}
*/