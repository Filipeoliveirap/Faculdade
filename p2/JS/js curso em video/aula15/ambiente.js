let num = [5, 8, 7, 5, 4 , 3]
num.push()
num.sort()
console.log(num)
console.log(`Nossos vetores tem ${num.length} possições `)
console.log(num[0]) 
let pos = num.indexOf(10) 
if (pos == -1){
    console.log(' O valor não foi encontrado')
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}
