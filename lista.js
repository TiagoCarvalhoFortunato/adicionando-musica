let clickCantor = document.getElementById('icantor')
let clickMusica = document.getElementById('imusica')
let Listagem = document.getElementById('listagem')


function ClickEnvia() {
    let Musica = String(clickMusica.value)
    let Cantor = String(clickCantor.value)
    if (Cantor.length > 0 && Musica.length > 0) {
    
    Listagem.innerHTML = `-Cantor: ${Cantor} ......Música:- ${Musica}`
    

    } else {
        alert(' Por favor preencha os campos')
    }
}




    