function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('manhã')
var data = new Date()
var hora = 19
//var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Olá Arthur. <br> Agora são ${hora}:${min}.`

if (hora >= 0 && hora <12) {
    //BOM DIA
    img.src = 'manhã.jpg'
    document.body.style.background = '#e2cd9f'
}
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE    
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else {
        //BOA NOITE
        img.src = 'noite.jpg'
        background.body.style.background = '#515154'
    }

}
