pessoa = {
    nome: 'Jubileu',
    idade: 25,
    sexo: 'M',
    peso: 85.7,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}

pessoa.engordar(5)
console.log(pessoa.peso)