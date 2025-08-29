var input = document.getElementById('digitar')
var add = document.getElementById('adicionar')
var res = document.getElementById('resultado')
let cont = 0

function adicionar(){
    let valorLista = input.value
    if ((valorLista !== null) && (valorLista !== '') && (valorLista !== undefined)){
        ++cont
        let novoItemLista = `<div id="${cont}" class="item">
            <input type="button" value="✅" class="confirmar" id="confirmar" onclick="marcar(${cont})">
            <input class="valortarefa" value="${valorLista}" readonly>
            <input onclick="deletar(${cont})" type="button" value="Remover" class="remover"></div>
        </div>`
        res.innerHTML += novoItemLista
        input.value = ''
        input.focus()
    }

}
input.addEventListener("keypress", function(e){
    if (e.key==="Enter"){
        adicionar()
    }
})

function deletar(id){
    var list = document.getElementById(id)
    list.remove()
}

function marcar(id){
    var listaMarcado = document.getElementById(id)
    var classe = listaMarcado.getAttribute("class")

    if (classe =="item"){
        listaMarcado.classList.toggle("clicado")
    }else {
    listaMarcado.classList.remove("clicado");
    }
}

