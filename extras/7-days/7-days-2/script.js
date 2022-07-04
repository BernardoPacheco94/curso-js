function enviar () {
    nome = document.getElementById('nome')
    idade = document.getElementById('idade')
    linguagem = document.getElementById('linguagem')

    alert(`Olá ${nome.value}, você tem ${idade.value} anos e está aprendendo ${linguagem.value}`)

    

    op = prompt(` Você gosta de estudar ${linguagem.value}?    
            Digite 1 para sim e 2 para não`)

    if (op == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } else if (op == 2 ){
        tentativa = prompt('Ahh que pena... Já tentou aprender outras linguagens? (S/N)')

        if (tentativa.toUpperCase() == 'S'){
            alert('Espero que esteja se saindo bem')
        } else {
            alert('Bom, recomendo que não demore a retomar seus estudos')
        }
    }
    else{
        alert('Não consigo entender sua resposta :(')
    }
    
}