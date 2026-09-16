const input = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const select = document.createElement("select");

    const pendente = document.createElement("option");
    pendente.value = "pendente";
    pendente.textContent = "Pendente";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover tarefa"

    btnRemover.addEventListener("click", function(){
        li.remove();
    })

    btnEditar.addEventListener("click", function() {
    const novoTexto = prompt("Edite sua tarefa:", span.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
        span.textContent = novoTexto.trim();
        }
    });

    const concluida = document.createElement("option");
    concluida.value = "concluida";
    concluida.textContent = "Concluída";

    select.appendChild(pendente);
    select.appendChild(concluida);

    select.addEventListener("change", function() {
    if (select.value === "concluida") {
        li.classList.add("concluida");
    } else {
        li.classList.remove("concluida");
    }
});
    li.appendChild(span);
    li.appendChild(select);
    li.appendChild(btnEditar);
    li.appendChild(btnRemover)

    listaTarefas.appendChild(li);

    input.value = "";
}

btnAdicionar.addEventListener("click", adicionarTarefa);
