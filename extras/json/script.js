const objeto = [{// objeto javascript

    "nome": "bernardo",
    "idade": 27,
    "trabalhando": true,
    "hobbies": [1, "zarabatana", false],

    "detalhes_trabalho": {
        "empresa": "sistemas e informacao",
        "cargo": "suporte"
    },

    "estado_civil": "bauduco"
},
{
    "nome": "gabriel",
    "idade": 2,
    "trabalhando": false,
    "hobbies": ["beber", "fumar"],

    "detalhes_trabalho": {
        "empresa": false,
        "cargo": false
    },

    "estado_civil": "loco"
}
]

//Converte meu objeto js em json
const jsonData = JSON.stringify(objeto)
console.log(jsonData)

//Recebe o JSON e converte para objeto
const obj = JSON.parse(jsonData)
console.log(obj)

//o map percorre o array
obj.map((pessoa) => {//função executada para cada objeto obj no array
    console.log(pessoa.nome+' '+pessoa.idade)
})


