let div_resultado = document.querySelector('#div_resultado')
resposta = Math.floor(Math.random() * (10 - 0 + 1))
contador = 0

function verificar() {
    contador += 1
    let num = document.querySelector('#input_tentativa')

    if (contador < 3) {
        if (num.value == resposta) {
            div_resultado.innerHTML = `<p>Você acertou! A resposta era ${resposta}</p>`
        }
        else {
            div_resultado.innerHTML += `<p>Tente novamente</p>`
        }
    } else{
        div_resultado.innerHTML = `Você errou, a resposta era ${resposta}`
    }

}