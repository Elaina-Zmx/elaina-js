function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${input.value}
            <button onclick="this.parentElement.remove()">删除</button>
        `;
        list.appendChild(li);
        input.value = '';
    }
} 