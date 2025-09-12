interface Todo {
    id:number 
    titulo:string
    concluida:boolean
}

let tarefas: Todo[] = [] // armazena uma lista de arrays ou seja, vai armzenar nossas tarefas em listas

//CREATE ADICIONAR TAREFA
function adicionarTarefa(titulo: string): void {
    const novaTarefa: Todo = {
      id: tarefas.length + 1,
      titulo,
      concluida: false,
    };
    tarefas.push(novaTarefa);
    console.log("Nova tarefa adicionada:", novaTarefa)
  }

//READ LISTAR TAREFAS
function listarTarefas(): void {
  console.log("Lista de tarefas:");
  tarefas.forEach(tarefa => {
    console.log(`${tarefa.id} - ${tarefa.titulo} [${tarefa.concluida ? "✔" : "✘"}]`);
  });
}

//UPDATE marcar como concluida
function concluirTarefa(id: number): void {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.concluida = true;
    console.log("Tarefa concluída:", tarefa);
  } else {
    console.log("Tarefa não encontrada!");
  }
}

//DELETE remover tarefa
function removerTarefa(id: number): void {
  tarefas = tarefas.filter(t => t.id !== id);
  console.log("Tarefa removida. ID:", id);
}

