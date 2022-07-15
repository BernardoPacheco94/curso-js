div = document.querySelector('#retorno_lista')
let lista_compras = {
    'laticineos': [],
    'carnes': [],
    'frutas': [],
    'verduras': [],
    'graos': []
}

adc_comida = 's'


//Inclusao dos produtos nas listas
function iniciar() {
    while (adc_comida.toLowerCase() == 's') {
        adc_comida = prompt('Deseja adicionar comida a sua lista de compras?\n Pressione (s) para adicionar ou qualquer outra tecla para sair')

        if (adc_comida.toLowerCase() == 's') {//se a resposta for s
            comida = prompt('Informe qual seria a comida:')//solicita comida
            categoria = prompt(`Em qual categoria ${comida} se encaixa? ${JSON.stringify(Object.keys(lista_compras))}`)//solicita categoria


            try {//tenta incluir nas categorias existentes
                lista_compras[`${categoria}`].push(comida)
            } catch (error) {//se nao conseguir, verifica se quer criar
                criar_categoria = prompt(`categoria não encontrada, deseja criar categoria "${categoria}"? (s/n)`)
                if (criar_categoria.toLowerCase() == 's') {
                    lista_compras[categoria.toLowerCase()] = [comida]
                }
            }
        }


    }
    alert('Lista encerrada!')





    //criando a lista no html


    array_categorias = Object.keys(lista_compras)

    for (i = 0; i < array_categorias.length; i++) {//percorre as chaves da lista de compras
        select = document.createElement('select')
        select.setAttribute("size", "10")
        array_produtos = Object.values(lista_compras[`${array_categorias[i]}`])//coloca os valores de cara indice num array


        array_produtos.map((prod) => {//percorre o array de comidas, incluindo como option no html
            option = new Option
            option.text = `${prod}`
            select.appendChild(option)
        })


        div.innerHTML += `
        <h1>${array_categorias[i]}</h1> <br>
        ${select.outerHTML} <br>`

    }

}


