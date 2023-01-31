
const imagemtema = document.getElementById('imgtema')
const itema = document.getElementById('iTema')
const fundo = document.getElementById('fundo')
const FundoAquario = document.getElementById('fundoAquario')

imagemtema.style.display = 'none'

function tema() {
    if (imagemtema.style.display == 'block') {
        imagemtema.style.display = 'none'
        itema.style.background = '#737272'
        itema.style.color = 'white'
        
    }else {
        imagemtema.style.display = 'block'
        itema.style.background = 'yellow'
        itema.style.color = 'black'
    }
}

function aquario() {
   document.body.style.backgroundImage = 'url(img/aquario.png)'
}

function paz() {
    document.body.style.backgroundImage = 'url(img/paz.jpg)'
}

function padrao() {
    document.body.style.backgroundImage = 'linear-gradient(to right, var(--cor4), var(--cor5)'
}


