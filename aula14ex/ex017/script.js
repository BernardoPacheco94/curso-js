function calcular() {
    var num = document.querySelector('input#txt_num')
    var res = document.querySelector('select#res')
res.style.padding = `5px`
    if (Number(num.value) == "") {
        alert('Informe um número')
    } else {  
        var i = 0
        n = Number(num.value)
        while (i <= 10) {
            var item = document.createElement('option')

            item.text =  `${n} x ${i} = ${n*i} `

            res.appendChild(item)

            i++
        }
    }
}