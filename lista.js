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

        let novoItem = `<div class="item" id="${contador}"> 
        <div class="icone" >

            <span class="material-symbols-outlined">
            radio_button_unchecked
            </span>

        </div>
        <div class="musica_cantor">
            ${Cantor} - ${Musica}
        </div>
        <div class="excluir" >
        
            <button onclick="deletar(${contador})" class="delete" >

            <span class="material-symbols-outlined" id="Itrash">
                delete_forever 
            </span>

            Excluir
            
            </button>
        </div>

        </div>   `
   
        Listagem.innerHTML += novoItem
    } else {
        function alerta() {
            alert("Por Favor , preencha os campos ! ");
        }

        alerta()
    };


    clickCantor.value = '';
    clickMusica.value = '';
    clickCantor.focus();

 
}

function deletar(id) {
    let removendo = document.getElementById(id);
    removendo.remove()
}








    