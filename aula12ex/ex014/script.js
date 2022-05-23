function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var quadro = document.getElementsByTagName('section')[0]
var titulo = document.getElementById('titulo_principal')
var data = new Date()
var hora = data.getHours()

titulo.innerHTML = `Hora do dia`
msg.innerHTML = `Agora são ${hora} horas`

if(hora >=0 && hora <= 5){
    document.body.style.backgroundColor = '#1C4271'
    img.style.backgroundImage = `url('../img/noite.jpg')`
    quadro.style.backgroundColor = '#060709'
    document.body.style.color = '#99CDFD'




}else if(hora >= 6 && hora < 12 ){
    document.body.style.backgroundColor = '#98B6D0'
    img.style.backgroundImage = `url('../img/manha.jpg')`
    quadro.style.backgroundColor = '#C1AE86'
    document.body.style.color = '#1B2113'



} else if(hora < 19){
    document.body.style.backgroundColor = '#D1B552'
    img.style.backgroundImage = `url('../img/tarde.jpg')`
    quadro.style.backgroundColor = '#93805F'
    document.body.style.color = '#3B200D'



} else{
    document.body.style.backgroundColor = '#1C4271'
    img.style.backgroundImage = `url('../img/noite.jpg')`
    quadro.style.backgroundColor = '#060709'
    document.body.style.color = '#99CDFD'
}
}