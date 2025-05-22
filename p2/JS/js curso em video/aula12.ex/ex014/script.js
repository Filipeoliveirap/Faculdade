function carregar(){ //Criando uma função pra rodar o if e demais
    var msg = document.getElementById('msg') //Criando uma variavel pra pegar a div msg
    var img = document.getElementById('imagem') //Criando uma variável para pegar a div imagem
    var data = new Date() //Uma variável pra a hora 
    var hora = data.getHours() //Pegando a hora tbm 
    msg.innerHTML = `Agora são ${hora} horas.` //mostrando que horas são na pagina pelo dom
    if (hora >= 0 && hora < 12){ //criando as situações
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }    

}
