let clickCantor = document.getElementById('icantor')
let clickMusica = document.getElementById('imusica')
let Listagem = document.getElementById('listagem')


function ClickEnvia() {
    let Musica = String(clickMusica.value)
    let Cantor = String(clickCantor.value)
    if (Cantor.length > 0 && Musica.length > 0) {
        let novoItem = `<div class="icone">
        *
    </div>
    <div class="musica_cantor">
        banda Lort
    </div>
    <div class="excluir">
        <input type="button" value="Excluir">
    </div>`

        Listagem.innerHTML += novoItem
    }
    

    clickCantor.value = '';
    clickMusica.value = '';
    clickCantor.focus();
}




    