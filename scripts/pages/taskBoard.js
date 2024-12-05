// Referências aos elementos principais
const toggleThemeBtn = document.getElementById("toggle-theme");
const boardsDropdown = document.getElementById("boards");
const columnsContainer = document.getElementById("columns");
const addColumnBtn = document.getElementById("add-column");

// Dados simulados (substituir por chamadas à API)
const mockBoards = [
    { id: 1, name: "Projeto 1" },
    { id: 2, name: "Projeto 2" },
];

const mockColumns = [
    { id: 1, name: "To Do", tasks: ["Task 1", "Task 2"] },
    { id: 2, name: "In Progress", tasks: ["Task 3"] },
    { id: 3, name: "Done", tasks: [] },
];

// Alternar tema (Dark/Light)
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleThemeBtn.textContent =
        document.body.classList.contains("dark-mode")
            ? "Light Mode"
            : "Dark Mode";
});

// Carregar Quadros
function loadBoards() {
    mockBoards.forEach((board) => {
        const option = document.createElement("option");
        option.value = board.id;
        option.textContent = board.name;
        boardsDropdown.appendChild(option);
    });
}

// Selecionar um Quadro
boardsDropdown.addEventListener("change", (event) => {
    const selectedBoardId = event.target.value;
    if (selectedBoardId) {
        loadColumns(mockColumns); // Chamada simulada
    }
});

// Carregar Colunas e Tarefas
function loadColumns(columns) {
    columnsContainer.innerHTML = ""; // Limpa o container
    columns.forEach((column) => {
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");

        // Título da coluna
        const columnTitle = document.createElement("h2");
        columnTitle.textContent = column.name;
        columnElement.appendChild(columnTitle);

        // Tarefas
        column.tasks.forEach((task) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.textContent = task;
            columnElement.appendChild(taskElement);
        });

        // Botão para nova tarefa
        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Nova Tarefa";
        addTaskBtn.addEventListener("click", () => {
            const newTask = prompt("Digite o nome da nova tarefa:");
            if (newTask) {
                addTaskToColumn(column.id, newTask); // Simulação
            }
        });

        columnElement.appendChild(addTaskBtn);
        columnsContainer.appendChild(columnElement);
    });
}

// Adicionar Tarefa à Coluna
function addTaskToColumn(columnId, taskName) {
    const column = mockColumns.find((col) => col.id === columnId);
    if (column) {
        column.tasks.push(taskName);
        loadColumns(mockColumns);
    }
}

// Inicialização
loadBoards();