document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adding');
    const input = document.getElementById('new-task');
    const taskContainer = document.getElementById('task-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = input.value.trim();
        if (taskName !== '') {
            let taskItem = document.createElement('div');
            taskItem.classList.add('task');

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('task-checkbox');

            const label = document.createElement('label');
            label.textContent = taskName;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '  ';
            deleteButton.classList.add('delete-button');

            taskItem.appendChild(checkbox);
            taskItem.appendChild(label);
            taskItem.appendChild(deleteButton);

            taskContainer.appendChild(taskItem);
            input.value = '';
        }
    });

    taskContainer.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('delete-button')) {
            target.parentNode.remove();
        } else if (target.classList.contains('task-checkbox')) {
            const label = target.nextElementSibling;
            if (target.checked) {
                label.style.textDecoration = 'line-through';
            } else {
                label.style.textDecoration = 'none';
            }
        }
    });
});
