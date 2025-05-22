var numeros = []

function adicionar(){
    var getnum = document.getElementById('txtnum');
    var tabela = document.getElementById('tab');
    if (getnum.value === ''){
        window.alert('[ERRO] digite um valor')
        return;
    }
    var num = Number(getnum.value);
    
    if(getnum.value > 100 || getnum.value < 0){
        window.alert('[ERRO] Digite um valor entre 1 a 100');
        return;
    }
    
    else if(numeros.includes(num)){
        window.alert('[ERRO] Número ja adicionado')
        return;
    }    
        
    numeros.push(num);

    var item = document.createElement('option');
    item.text = `Valor ${num} adicionado`;
    tabela.appendChild(item);

    getnum.value = '';
    getnum.focus();

}

function finalizar(){
    var mensagem = document.getElementById('mensagem');
    numeros.sort((a, b) => a - b);
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    let media = soma/numeros.length
    if(numeros.length === 0){
        window.alert('Nenhum número foi adicionado');
    }else{
        let menorNumero = Math.min(...numeros);
        let maiorNumero = Math.max(...numeros);
        
        mensagem.innerHTML = `Foram adicionados ${numeros.length} números.<br>O menor valor é ${numeros[0]}.<br> O maior valor informado é ${numeros[numeros.length - 1]}.<br>Somando todos os valores, temos ${soma}.<br>A média dos valores digitados é ${media}.`
    }
    


    
}