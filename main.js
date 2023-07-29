const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const button = document.querySelector('#todo-button');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	addTask(input.value);
	input.value = '';
});

function addTask(task) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');
	
	span.innerText = task;
	button.innerText = 'Delete';
	
	li.appendChild(span);
	li.appendChild(button);
	list.appendChild(li);
	
	button.addEventListener('click', function() {
		li.remove();
	});
}
