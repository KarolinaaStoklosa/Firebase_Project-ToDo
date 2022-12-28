import renderTodoForm from '../TodoForm/renderTodoForm.js';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
import { firestore } from '../../firebaseConfig.js';

export default function () {
  const contentContainer = document.querySelector('.content');
  contentContainer.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = "Your team's todos";
  contentContainer.appendChild(h2);

  const todoForm = renderTodoForm();
  todoForm.setAttribute('id', 'teams-todo-form');
  contentContainer.appendChild(todoForm);

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = document.getElementById('todo-input').value;
    const category = [...document.getElementsByName('category')].find((el) => el.checked).value;
    console.log(todoText, category);

    async function foo() {
      try {
        const docRef = await addDoc(collection(firestore, 'teams'), {
          category,
          todoText,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (err) {
        console.log('Error', err.message);
      }
    }
    foo();
  });

  const ul = document.createElement('ul');
  ul.setAttribute('id', 'teams-todos-list');
  const unsubscribe = onSnapshot(collection(firestore, 'teams'), (snapshot) => {
    const changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == 'added') {
        const todo = change.doc.data();
        const li = document.createElement('li');
        li.textContent = `${todo.todoText} (${todo.category})`;
        ul.appendChild(li);
        contentContainer.appendChild(ul);
      }
    });
  });
}
