function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value < 1895 || fano.value > ano) {
        alert('Ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('img')

        if (fsex[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Detectado: ${genero}<br>Completa ${idade} anos em ${ano}`
            res.style.textAlign = `center`
            img.style.width = `250px`
            img.style.height = `250px`

            if (idade >= 0 && idade < 11) {
                img.style.backgroundImage = `url('img/crianca-homem.jpeg')`
                img.style.backgroundSize = `250px`


            } else if (idade <= 18) {
                img.style.backgroundImage = `url('img/jovem-homem.jpeg')`
                img.style.backgroundSize = `250px`
                img.style.backgroundPosition = `bottom center`


            } else if (idade < 50) {
                img.style.backgroundImage = `url('img/adulto-homem.jpeg')`
                img.style.backgroundSize = `250px`


            } else {
                img.style.backgroundImage = `url('img/idoso-homem.jpeg')`
                img.style.backgroundSize = `250px`
            }
        } else {
            genero = 'Mulher'
            res.innerHTML = `Detectado: ${genero}<br>Completa ${idade} anos em ${ano}`
            res.style.textAlign = `center`
            img.style.width = `250px`
            img.style.height = `250px`
            if (idade >= 0 && idade < 11) {
                img.style.backgroundImage = `url('img/crianca-mulher.jpeg')`
                img.style.backgroundSize = `250px`
                img.style.backgroundPosition = `center right`


            } else if (idade < 18) {
                img.style.backgroundImage = `url('img/jovem-mulher.jpeg')`
                img.style.backgroundPosition = `center`
                img.style.backgroundSize = `cover`


            } else if (idade < 50) {
                img.style.backgroundImage = `url('img/adulto-mulher.jpeg')`
                img.style.backgroundSize = `250px`


            } else {
                img.style.backgroundImage = `url('img/idoso-mulher.jpeg')`
                img.style.backgroundSize = `250px`
                img.style.backgroundPosition = `bottom`
            }
        }

    }
}