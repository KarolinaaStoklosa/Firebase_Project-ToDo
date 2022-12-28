import renderTodoForm from '../TodoForm/renderTodoForm.js';
import { ref, onValue, push, update, remove } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';
import { auth, db } from '../../firebaseConfig.js';

const formListener = (event) => {
  const todoRef = ref(db, 'todos/' + auth.currentUser.uid);
  event.preventDefault();
  const radios = [...document.getElementsByName('category')];
  const category = radios.find((el) => el.checked).value;
  const todoText = document.getElementById('todo-input');
  const todoTextValue = todoText.value;
  console.log(category + ' ' + todoTextValue);
  push(todoRef, {
    todoTextValue,
    category,
  })
    .then(() => console.log('Pushed the data to db'))
    .catch((err) => console.log(err.message));
};

export default function () {
  const contentContainer = document.querySelector('.content');

  const todoRef = ref(db, 'todos/' + auth.currentUser.uid);

  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      contentContainer.innerHTML = '';
      const h2 = document.createElement('h2');
      h2.textContent = 'Add, remove and edit your todos';
      contentContainer.appendChild(h2);
      const todoForm = renderTodoForm();
      contentContainer.appendChild(todoForm);

      todoForm.addEventListener('submit', formListener);
    } else {
      const todos = Object.values(data);
      const h2 = document.createElement('h2');
      h2.textContent = 'Add, remove and edit your todos';
      const listItems = todos.map((el, idx) => {
        const li = document.createElement('li');
        li.setAttribute('id', `li-${idx}`);
        const div = document.createElement('div');
        div.setAttribute('id', `div-${idx}`);
        const span = document.createElement('span');
        span.textContent = `${el.todoTextValue}(${el['category']})`;

        const editButton = document.createElement('button');
        editButton.setAttribute('id', `edit-button-${idx}`);
        editButton.setAttribute('class', 'edit-button');
        editButton.textContent = 'Edit';
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', `remove-button-${idx}`);
        removeButton.setAttribute('class', 'remove-button');

        removeButton.textContent = 'Remove';

        div.appendChild(span);
        div.appendChild(editButton);
        div.appendChild(removeButton);
        li.appendChild(div);
        return li;
      });

      const ul = document.createElement('ul');
      listItems.forEach((el) => ul.appendChild(el));
      contentContainer.innerHTML = '';
      const todoForm = renderTodoForm();
      contentContainer.appendChild(h2);
      contentContainer.appendChild(todoForm);
      contentContainer.appendChild(ul);

      todoForm.addEventListener('submit', formListener);

      const editButtons = [...document.getElementsByClassName('edit-button')];
      editButtons.forEach((el, i) => {
        el.addEventListener('click', () => {
          el.remove();
          const div = document.getElementById(`div-${i}`);
          const form = renderTodoForm();
          form.setAttribute('id', `todo-form-${i}`);
          div.appendChild(form);

          form.addEventListener('submit', function (event) {
            event.preventDefault();

            const newTodoText = this.childNodes[0].value;
            const radios = [...this.getElementsByTagName('input')].slice(1, 5);
            const newCategory = radios.find((el) => el.checked).value;

            const updates = {};

            const todoId = Object.keys(data)[i];

            const postData = {
              category: newCategory,
              todoTextValue: newTodoText,
            };
            updates['/todos/' + auth.currentUser.uid + '/' + todoId] = postData;
            console.log(updates);
            update(ref(db), updates);
          });
        });
      });

      const removeButtons = [...document.getElementsByClassName('remove-button')];
      removeButtons.forEach((el, i) => {
        el.addEventListener('click', function () {
          this.parentElement.parentElement.remove();
          remove(ref(db, `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`));
        });
      });
    }
  });
}
