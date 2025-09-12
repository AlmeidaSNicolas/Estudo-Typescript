var tarefas = []; // armazena uma lista de arrays ou seja, vai armzenar nossas tarefas em listas

//CREATE ADICIONAR TAREFA
function adicionarTarefa(titulo) {
    var novaTarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        concluida: false,
    };
    tarefas.push(novaTarefa);
    console.log("Nova tarefa adicionada:", novaTarefa);
}

//READ LISTAR TAREFAS
function listarTarefas() {
    console.log("Lista de tarefas:");
    tarefas.forEach(function (tarefa) {
        console.log("".concat(tarefa.id, " - ").concat(tarefa.titulo, " [").concat(tarefa.concluida ? "✔" : "✘", "]"));
    });
}

//UPDATE marcar como concluida
function concluirTarefa(id) {
    var tarefa = tarefas.find(function (t) { return t.id === id; });
    if (tarefa) {
        tarefa.concluida = true;
        console.log("Tarefa concluída:", tarefa);
    }
    else {
        console.log("Tarefa não encontrada!");
    }
}

//DELETE remover tarefa
function removerTarefa(id) {
    tarefas = tarefas.filter(function (t) { return t.id !== id; });
    console.log("Tarefa removida. ID:", id);
}



removerTarefa(1);
listarTarefas();