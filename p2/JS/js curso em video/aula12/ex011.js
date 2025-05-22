var idade = 67
console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log('Vota')
} else if (idade >= 16 && idade < 18 || idade > 65){
        console.log('voto opcional')
} else if (idade >= 18){
    console.log('Voto obrigatório')
}
