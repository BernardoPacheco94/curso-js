btn = document.querySelector('#btn')
input_nome = document.querySelector('#input-name')
retorno = document.querySelector('#retorno')

var httpRequest = new XMLHttpRequest()
   
httpRequest.open("GET", "json.json")
httpRequest.responseType = "json"
httpRequest.send()

httpRequest.addEventListener("readystatechange", function(){
    
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        retorno.innerText = JSON.stringify(httpRequest.response[1].nome)
    }
})
