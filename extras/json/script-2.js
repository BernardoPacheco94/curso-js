let lista_compras = {
    'laticineos' : ['leite', 'queijo'],
    'frutas' : []
}


lista_compras.matinais = ['pao','presunto']
lista_compras.frutas.push('maçã', 'banuina')

categorias = Object.keys(lista_compras)//verifica chaves do objeto

function exibeCategorias(array){//formata exibição das categorias
    exibicao = ''
    for (i=0; i<array.length; i++){
        exibicao += categorias[i]+'\n'
    }
    return exibicao
}

console.log(exibeCategorias(categorias))//exibindo categorias formadas

console.log(Object.values(lista_compras.frutas))

lista_compras.laticineos.map((item)=>{
    console.log(item)
})
Object.keys(lista_compras).map((valor) => {
    console.log(valor.toUpperCase())
    lista_compras[`${valor}`].map((mimimi)=>{
        console.log(mimimi)
    })
})


