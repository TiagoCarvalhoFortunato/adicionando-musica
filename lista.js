let clickCantor = document.getElementById('icantor')
let clickMusica = document.getElementById('imusica')
let Listagem = document.getElementById('listagem')

let contador = 0



function ClickEnvia() {
    let Musica = String(clickMusica.value)
    let Cantor = String(clickCantor.value)
    if (Cantor.length > 0 && Musica.length > 0) {
        //toda vez que adiciona um elemento o contador vai subi 1
        ++contador;

        let novoItem = `<div id="${contador}" class="icone" >
        *
    </div>
    <div class="musica_cantor">
        ${Cantor} - ${Musica}
    </div>
    <div class="excluir" >
        <button onclick="deletar(${contador})" class="deletar"> deletar</button>
    </div>`

        Listagem.innerHTML += novoItem
    } else {
        function alerta() {
            alert("Por Favor , preencha os campos ! ");
        }
        alerta()
    }

    function deletar(id) {
        var eliminar = document.getElementById(id);
        eliminar.remove();
       
    }
    deletar(contador)
    
    

    clickCantor.value = '';
    clickMusica.value = '';
    clickCantor.focus();
}




    