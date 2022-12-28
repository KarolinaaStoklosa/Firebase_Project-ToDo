// 1. Stworz element form i nadaj mu id 'todo-form'
// 2. Stworz element input, nadaj mu id 'todo-input'
// 3. Stworz element fieldset i nadaj id 'todo-fieldset'
// 4. Stworz element legend i nadaj mu textContent 'Select a category'
// 5. Stworz element div i nadaj mu id 'div-work'
// 6. Stworz element input, nadaj mu type radio, id 'radio-work', name 'category', value 'work', checked 'true'
// 7. Stworz element label, nadaj mu atrybut for 'radio-work', textCntent 'Work'
// 8. Do diva id 'div-work' podpinacie radio input z pkt6 i label z pkt 7
// 9. Powtorz kroki 5-9 value żeby finalnie powstały 4 radio inputy: Work, Life, Sport, Education
// 10. Stworz element button i nadaj mu type 'submit', klasa 'todo-form-submit-button', textContent "Add todo"
// 11. Do fieldset podepnij legend, divWork, divLife, divSport, divEducation
// 12. Do form podepnij input(pkt2), fieldset, submitbutton
// 13. Caly formularz zwroc returnem 

export default function () {
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    const todoInput = document.createElement('input');
    todoInput.setAttribute('id', 'todo-input');
    todoInput.setAttribute('class','input');
    const fieldset = document.createElement('todo-fieldset');
    fieldset.setAttribute('id', 'todo-fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Select a category';

    // WORK
    const workDiv = document.createElement('div');
    workDiv.setAttribute('id', 'div-work');
    //input,  type radio, id 'radio-work', name 'category', value 'work', checked 'true'
    const workInput = document.createElement ('input');
    workInput.setAttribute('type', 'radio');
    workInput.setAttribute('id', 'radio-work');
    workInput.setAttribute('name', 'category');
    workInput.setAttribute('value','work');
    workInput.setAttribute('checked','true');
    //label, nadaj mu atrybut for 'radio-work', textCntent 'Work'
    const workLabel = document.createElement('label');
    workLabel.setAttribute ('for','radio-work');
    workLabel.textContent = "Work";
    workDiv.appendChild(workInput);
    workDiv.appendChild(workLabel);

    // LIFE
    const lifeDiv = document.createElement('div');
    lifeDiv.setAttribute('id', 'div-life');
    //input
    const lifeInput = document.createElement ('input');
    lifeInput.setAttribute('type', 'radio');
    lifeInput.setAttribute('id', 'radio-life');
    lifeInput.setAttribute('name', 'category');
    lifeInput.setAttribute('value','life');
    //label
    const lifeLabel = document.createElement('label');
    lifeLabel.setAttribute ('for','radio-life');
    lifeLabel.textContent = "Life";
    lifeDiv.appendChild(lifeInput);
    lifeDiv.appendChild(lifeLabel);

    // SPORT
    const sportDiv = document.createElement('div');
    sportDiv.setAttribute('id', 'div-sport');
    //input
    const sportInput = document.createElement ('input');
    sportInput.setAttribute('type', 'radio');
    sportInput.setAttribute('id', 'radio-sport');
    sportInput.setAttribute('name', 'category');
    sportInput.setAttribute('value','sport');
    //label
    const sportLabel = document.createElement('label');
    sportLabel.setAttribute ('for','radio-sport');
    sportLabel.textContent = "Sport";
    sportDiv.appendChild(sportInput);
    sportDiv.appendChild(sportLabel);

    // EDUCATION
    const educationDiv = document.createElement('div');
    educationDiv.setAttribute('id', 'div-education');
    //input
    const educationInput = document.createElement ('input');
    educationInput.setAttribute('type', 'radio');
    educationInput.setAttribute('id', 'radio-education');
    educationInput.setAttribute('name', 'category');
    educationInput.setAttribute('value','education');
    //label
    const educationLabel = document.createElement('label');
    educationLabel.setAttribute ('for','radio-education');
    educationLabel.textContent = "Education";
    educationDiv.appendChild(educationInput);
    educationDiv.appendChild(educationLabel);

    // 10. Stworz element button
    const button = document.createElement('button');
    button.setAttribute('type','submit');
    button.setAttribute('class', 'todo-form-submit-button');
    button.setAttribute('class', 'button');
    button.textContent = "Add todo";

    // 11. Do fieldset podepnij legend, divWork, divLife, divSport, divEducation
    fieldset.appendChild(legend);
    fieldset.appendChild(workDiv);
    fieldset.appendChild(lifeDiv);
    fieldset.appendChild(sportDiv);
    fieldset.appendChild(educationDiv);
    // 12. Do form podepnij input(pkt2), fieldset, submitbutton
    form.appendChild(todoInput);
    form.appendChild(fieldset);
    form.appendChild(button);

    return form;
}