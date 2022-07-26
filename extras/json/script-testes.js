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
        exibicao += array[i]+'\n'
    }
    return exibicao
}

console.log(exibeCategorias(categorias))//exibindo categorias formadas

console.log(Object.values(lista_compras.frutas))

lista_compras.frutas.map((item)=>{
    console.log(item)
})

console.log('------------------------')

Object.keys(lista_compras).map((indice) => {//Exibe toda a lista de compras em ordem (indice e conteudos)
    console.log('\n'+indice.toUpperCase())
    lista_compras[`${indice}`].map((conteudo)=>{
        console.log(conteudo)
    })
})

lista_compras['carnes'] = []

console.log(lista_compras)


