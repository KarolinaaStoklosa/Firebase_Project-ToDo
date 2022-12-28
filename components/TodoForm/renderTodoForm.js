export default function () {
  const form = document.createElement('form');
  form.setAttribute('id', 'todo-form');
  const todoInput = document.createElement('input');
  todoInput.setAttribute('id', 'todo-input');
  todoInput.setAttribute('class', 'input');
  const fieldset = document.createElement('todo-fieldset');
  fieldset.setAttribute('id', 'todo-fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Select a category';

  const workDiv = document.createElement('div');
  workDiv.setAttribute('id', 'div-work');

  const workInput = document.createElement('input');
  workInput.setAttribute('type', 'radio');
  workInput.setAttribute('id', 'radio-work');
  workInput.setAttribute('name', 'category');
  workInput.setAttribute('value', 'work');
  workInput.setAttribute('checked', 'true');

  const workLabel = document.createElement('label');
  workLabel.setAttribute('for', 'radio-work');
  workLabel.textContent = 'Work';
  workDiv.appendChild(workInput);
  workDiv.appendChild(workLabel);

  const lifeDiv = document.createElement('div');
  lifeDiv.setAttribute('id', 'div-life');

  const lifeInput = document.createElement('input');
  lifeInput.setAttribute('type', 'radio');
  lifeInput.setAttribute('id', 'radio-life');
  lifeInput.setAttribute('name', 'category');
  lifeInput.setAttribute('value', 'life');

  const lifeLabel = document.createElement('label');
  lifeLabel.setAttribute('for', 'radio-life');
  lifeLabel.textContent = 'Life';
  lifeDiv.appendChild(lifeInput);
  lifeDiv.appendChild(lifeLabel);

  const sportDiv = document.createElement('div');
  sportDiv.setAttribute('id', 'div-sport');

  const sportInput = document.createElement('input');
  sportInput.setAttribute('type', 'radio');
  sportInput.setAttribute('id', 'radio-sport');
  sportInput.setAttribute('name', 'category');
  sportInput.setAttribute('value', 'sport');

  const sportLabel = document.createElement('label');
  sportLabel.setAttribute('for', 'radio-sport');
  sportLabel.textContent = 'Sport';
  sportDiv.appendChild(sportInput);
  sportDiv.appendChild(sportLabel);

  const educationDiv = document.createElement('div');
  educationDiv.setAttribute('id', 'div-education');

  const educationInput = document.createElement('input');
  educationInput.setAttribute('type', 'radio');
  educationInput.setAttribute('id', 'radio-education');
  educationInput.setAttribute('name', 'category');
  educationInput.setAttribute('value', 'education');

  const educationLabel = document.createElement('label');
  educationLabel.setAttribute('for', 'radio-education');
  educationLabel.textContent = 'Education';
  educationDiv.appendChild(educationInput);
  educationDiv.appendChild(educationLabel);

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'todo-form-submit-button');
  button.setAttribute('class', 'button');
  button.textContent = 'Add todo';

  fieldset.appendChild(legend);
  fieldset.appendChild(workDiv);
  fieldset.appendChild(lifeDiv);
  fieldset.appendChild(sportDiv);
  fieldset.appendChild(educationDiv);

  form.appendChild(todoInput);
  form.appendChild(fieldset);
  form.appendChild(button);

  return form;
}
