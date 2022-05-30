let vetor = [2, 5, 8, 1, 4, 6]

for( var pos = 0; pos < vetor.length; pos++){
    console.log(`Na posição ${pos} o valor é ${vetor[pos]}`)
}
console.log('Outro método:')
for (var pos in vetor){
    console.log(`Na posição ${pos} o valor é ${vetor[pos]}`)
}

console.log('')
console.log('Buscando valores:')
let indice = vetor.indexOf(8)
console.log(`O valor 8 está na posição ${indice}: `)