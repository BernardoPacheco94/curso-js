const respostasPadrao = {
    resposta : [ 
    ]
    
}
console.log(respostasPadrao)


//Create
function criaResposta (titulo, conteudo) {//verificar se possivel exclusao logica
    respostasPadrao.resposta.push({
        id : respostasPadrao.resposta.length + 1,
        titulo : titulo,
        conteudo : conteudo
    }
    )
}

criaResposta('nova resposta', 'esse é o conteudo da resposta')
console.log(respostasPadrao)

//read
function exibeRespostas (){
    /* Verificar como será exibido no html */
}

//delete
function deleteResposta (id){
    novaListadeResposta = respostasPadrao.resposta.filter(
        (resposta) => resposta.id !== id
    )

    respostasPadrao.resposta = novaListadeResposta
}

console.log(respostasPadrao)

//update
function updateResposta (id, novo_titulo, novo_conteudo){
    antigaResposta = respostasPadrao.resposta.find(
        (resposta) => resposta.id === id
    )
    antigaResposta.titulo = novo_titulo
    antigaResposta.conteudo = novo_conteudo

}

updateResposta(2, 'titulo atualizado', 'conteudo atualizado')
console.log(respostasPadrao)