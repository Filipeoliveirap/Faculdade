/*let valores = [1, 4, 5, 7, 3, 7, 4, 6]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A possição ${pos} tem os valores ${valores[pos]}`)
}*/

let valores = [1, 6, 5, 8, 9, 5, 4 ,3 ,6]
valores.sort()
console.log(valores)
for (let pos in valores){
    console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
}

