let numeros = []

let num = document.querySelector('input#txt_num')
let select = document.querySelector('select#select')
let total_num = document.querySelector('p#total_num')
let maior_num = document.querySelector('p#maior_num')
let menor_num = document.querySelector('p#menor_num')
let soma_numtotal = document.querySelector('p#soma_num')
let media_num = document.querySelector('p#media_num')
let btn_finalizar = document.querySelector('button#btn_finalizar')


function adicionar(){
    n = Number(num.value)

    if(n == ""){
        alert("Informe um número para ser adicionado")
    }else if(n<0 || n>100){
        alert('Número digitado é inválido')
    }else{
    numeros.push(n)//Inserindo o número no array

    
    let item = document.createElement ('option')//exibindo os numeros no select
    item.text = `${n}`
    select.appendChild(item)
    }
    
    num.value = ""
}

function maior(vetor){
    let maior = vetor[0]
    for (var pos in vetor){
        if(maior <= vetor[pos]){
            maior = vetor[pos]
        }
    }

    return maior    
}

function menor(vetor){
    let menor = vetor[0]

    for (var pos in vetor){
        if(menor >= vetor[pos]){
            menor = vetor[pos]
        }
    }

    return menor   
}

function soma (vetor){
    let soma = 0
    for (pos in vetor){
        soma += vetor[pos]
    }

    return soma
}

function finalizar(){
    total_num.innerHTML = `A lista possui ${numeros.length} elementos`
    maior_num.innerHTML = `O maior número é ${maior(numeros)}`
    menor_num.innerHTML = `O menor número é ${menor(numeros)}`
    soma_numtotal.innerHTML = `A soma dos números é: ${soma(numeros)}`
    media_num.innerHTML = `A média dos números informados é: ${(soma(numeros)/numeros.length).toFixed(2)}`
}