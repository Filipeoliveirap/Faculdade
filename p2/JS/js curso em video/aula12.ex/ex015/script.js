function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0  || (fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança 
                img.setAttribute('src', 'criancahomem.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancamulher.jpg')
            }else if (idade < 50){
                //aulto
                img.setAttribute('src', 'adultomulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'adultomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }

}