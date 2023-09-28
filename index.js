document.addEventListener('DOMContentLoaded', () => { // Ensure js loads only after our content is loaded
    console.log('After DOM Loaded');
    console.log(document.querySelector('div')); // these two execute only after DOM is loaded
});
    console.log('Before DOM Loads');
    console.log(document.querySelector('div')); // returns null because indes.js loaded before DOM

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        buildToDo(e.target.new_todo.value);
        form.reset();
    });
});

function buildToDo(todo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x';
    p.textContent = `${todo} `;
    p.appendChild(btn);
    console.log(p);
    document.querySelector('#todo_container').appendChild(p);
}

function handleDelete(e){
    e.target.parentNode.remove();
}