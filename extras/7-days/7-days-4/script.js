let num = document.querySelector('#input_tentativa')
let div_resultado = document.querySelector('#div_resultado')

function verificar() {
    resposta = Math.floor(Math.random() * (10 - 0 + 1))
    
    tentativa = 1

    alert(resposta)

    while(resposta != num && tentativa <=3){
        txt = document.createElement('p')
        txt.text = 'Tente novamente'

        div_resultado.appendChild(txt)
        tentativa += 1
    }
}