let area_frontend = document.querySelector('#area_frontend')
let area_backend = document.querySelector('#area_backend')
let linguagens = []


function verificar() {
    if (area_frontend.checked) {
        // React ou aprender Vue
        op = prompt('Deseja aprender react ou vue')
        while (op.toLowerCase() != 'react' && op.toLowerCase() != 'vue') {
            op = prompt('Resposta inválida, Deseja aprender react ou vue')
        }
        if (op.toLowerCase() == 'react'){
            alert('O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais')
            linguagens.push('React')
            sequencia()
        } else{
            alert('Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.')
            linguagens.push('Vue')
            sequencia()
        }
    }
    else if (area_backend.checked) {
        // aprender C# ou aprender Java
        op = prompt('Deseja aprender java ou C#')
        while (op.toLowerCase() != 'java' && op.toLowerCase() != 'c#') {
            op = prompt('Resposta inválida, Deseja aprender java ou C#')
        }
        if (op.toLowerCase() == 'java'){
            alert('Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems.')
            linguagens.push('Java')
            sequencia()
        } else{
            alert('C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.')
            linguagens.push('C#')
            sequencia()
        }
    }
    else {
        alert('Você deve selecionar Front-End ou Back-End')
    }


}

function sequencia () {
    fullstack = prompt('Agora que você já selecionou alguma linguagem, você deseja ser desenvolvedor fullstack? (S/N)')

    while (fullstack.toLowerCase() != 's' && fullstack.toLowerCase() != 'n'){
        fullstack = prompt('Resposta inválida, você deseja ser desenvolvedor fullstack? (S/N)')
    }
    if(fullstack == 's'){
        linguagem = ''
        while(linguagem != 'sair'){
            linguagem = prompt('Informe uma linguagem interessante pra você, digite "sair" para encerrar')
            if (linguagem.toLowerCase() == 'sair'){
                break
            }
            linguagens.push(linguagem)
        }
        
        paragrafo = document.getElementById('paragrafo')
        
        paragrafo.innerHTML = `Linguagens:`
        for (i=0; i<linguagens.length; i++) {
        paragrafo.innerHTML += `<br>${linguagens[i]}`       
        }
    }    
}

