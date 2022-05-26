function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    res.innerHTML = ``

    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        alert('ERRO: Faltou informar algum número')
    }
    else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            p = 1
            alert('Passo será considerado 1')
        }


        res.innerHTML = `Contando... <br>`
        if (i < f) {//ordem crescente
            for (var c = i; c <= f; c += p) {

                res.innerHTML += `${c} \u{23E9} `//O += concatena o resultado anterior com o proximo
            }
            res.innerHTML += `🏁`
        } else{//ordem decrescente
            for(var c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{23E9}`
            }
            res.innerHTML += `🏁`
        }
    }
    
}