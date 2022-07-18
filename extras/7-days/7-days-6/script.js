div = document.querySelector('#retorno_lista')
input_comida = document.getElementById('input_comida')
form = document.querySelector('#form')
div_radio = document.querySelector('#div_radio')


let lista_compras = {
    'laticineos': [],
    'carnes': [],
    'frutas': [],
    'verduras': [],
    'graos': []
}

function carregar(){
    //Cria as entradas de dados no HTML...
    div_radio.innerHTML = ''
    array_categorias = Object.keys(lista_compras)

    array_categorias.map((item) => {
        input = document.createElement('input')
        input.setAttribute("type", "radio")
        input.setAttribute("name", "lista_compras")
        input.setAttribute("id", `${item}_input`)
        input.setAttribute("value", `${item}`)
        
        label = document.createElement('label')
        label.setAttribute("for", `${item}_input`)
        

        label.innerHTML = ` <br>${item}`
        div_radio.appendChild(label)
        label.appendChild(input)
    })
}


//Inclusao dos produtos nas listas
function iniciar() {
    radios = document.getElementsByName('lista_compras')
    pegaRadio()

    input_comida = document.getElementById('input_comida')
    lista_compras[`${pegaRadio()}`].push(input_comida.value)
    exibeListas()
}

//Retorna o rádio que foi selecionado
function pegaRadio (){
    for (radio of radios){
        if (radio.checked){
            return radio.value
        }
    }
}



function exibeListas() {
    div.innerHTML = ''

    array_categorias = Object.keys(lista_compras)

    for (i = 0; i < array_categorias.length; i++) {//percorre as chaves da lista de compras
        select = document.createElement('select')
        select.setAttribute("size", "10")
        array_produtos = Object.values(lista_compras[`${array_categorias[i]}`])//coloca os valores de cada indice num array


        array_produtos.map((prod) => {//percorre o array de comidas, incluindo como option no html
            option = new Option
            option.text = `${prod}`
            select.appendChild(option)
        })


        btn_remover_selecionado = document.createElement('button')
        btn_remover_selecionado.setAttribute("onclick", "removerItem()")
        btn_remover_selecionado.innerText = 'Remover Item'
        div.innerHTML += `
        <h1>${array_categorias[i]}</h1> <br>
        ${select.outerHTML} <br>
        ${btn_remover_selecionado.outerHTML}
        `

    }
}

function novaCategoria(){
    lista_compras[`${input_comida.value}`] = []
    carregar()
}

function removerItem(){
    alert('IHUUUUUUUUU')
}