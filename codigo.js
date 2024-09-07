function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('foto')
    var dataA = new Date()
    var dataB = new Date()
    var hora = dataA.getHours()
    var minuto = dataB.getMinutes()

    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minuto} minutos.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        msg2.innerHTML += 'Bom dia!'
        document.body.style.background = '#dddd62'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde2.png'
        msg2.innerHTML += 'Boa tarde!'
        document.body.style.background = '#5d93e5'
    }else{
        img.src = 'noite.png'
        msg2.innerHTML += 'Boa noite!'
        document.body.style.background = '#00005c'
    }
}