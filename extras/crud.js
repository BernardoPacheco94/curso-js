const miniTwitter = {
    usuarios : [//lista de usuarios
        {
            username: 'bpacheco94'
        }
    ],
    postagens : [
        {
            id: 1,
            owner: 'bpacheco94',
            content: 'Meu primeiro tweet'
        }
    ]
}

// create
function criaPostagem(dados){//passa o objeto dados por parametro
    miniTwitter.postagens.push({ // faz o push no array postagens
        id: miniTwitter.postagens.length + 1,//id é qtd de itens do array mais um
        owner: dados.owner, //owner vai receber o objeto dados de owner
        content: dados.content
    })
}
criaPostagem({owner: 'bpacheco94', content: 'segundo twitter'})//passa o objeto por parametro
criaPostagem({owner: 'jubileu', content: 'terceiro twitter'})//passa o objeto por parametro
criaPostagem({owner: 'jubileu', content: 'quarto twitter'})//passa o objeto por parametro

// read
function pegaPostagem(){
    return miniTwitter.postagens
}
console.log(pegaPostagem())

//update 
function atualizaContent(id, novoConteudo){//passo o id e o conteudo
    postagemAntiga = pegaPostagem().find((postagem) => {//uso o pegapostagem() pra percorrer as posstagens, uso o find passando a postagem e ela deve me retornar a postagem com o id passado
        return postagem.id === id
    })
    postagemAntiga.content = novoConteudo//atribuo o 2o parametro no content
}

atualizaContent(2, 'Nova mensagem')
console.log(pegaPostagem())


//delete
function apagaPost (id){
    postagensAtualizadas = pegaPostagem().filter((postagem) => {
        return postagem.id !== id
    })
    miniTwitter.postagens = postagensAtualizadas
}

console.log(pegaPostagem())
apagaPost(3)
console.log(pegaPostagem())