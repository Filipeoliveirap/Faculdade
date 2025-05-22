function contar(){
    var inicio = document.getElementById('txtinicio');
    var fim = document.getElementById('txtfim');
    var passo = document.getElementById('txtpasso');
    var res = document.getElementById('res');
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] FALTAM DADOS');
        return;
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            window.alert('[erro] o passo precisa ser maior que 0.');
            return;
        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} &#x1F449;`;
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#x1F449;`;
            }
        }   
        res.innerHTML += `\u{1F3C1}`;
    }
    
}