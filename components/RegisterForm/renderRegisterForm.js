import { auth } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import renderHomePage from '../HomePage/renderHomePage.js';

export default function () {
  const contentSection = document.querySelector('.content');
  contentSection.innerHTML = '';

  const form = document.createElement('form');
  form.setAttribute('id', 'register-form');

  const h2Text = document.createElement('h2');
  h2Text.textContent = 'Sign up';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'email');
  emailInput.setAttribute('id', 'register-email-input');
  emailInput.setAttribute('class', 'input');

  const firstPasswordInput = document.createElement('input');
  const secondPasswordInput = document.createElement('input');
  firstPasswordInput.setAttribute('type', 'password');
  secondPasswordInput.setAttribute('type', 'password');
  firstPasswordInput.setAttribute('placeholder', 'password');
  secondPasswordInput.setAttribute('placeholder', 'password');
  firstPasswordInput.setAttribute('id', 'register-first-input-password');
  secondPasswordInput.setAttribute('id', 'register-second-input-password');

  firstPasswordInput.setAttribute('class', 'input');
  secondPasswordInput.setAttribute('class', 'input');

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'button');
  button.textContent = 'Register';

  form.appendChild(h2Text);
  form.appendChild(emailInput);
  form.appendChild(firstPasswordInput);
  form.appendChild(secondPasswordInput);
  form.appendChild(button);

  contentSection.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password1 = firstPasswordInput.value;
    const password2 = secondPasswordInput.value;
    console.log(email, password1, password2);

    if (password1 === password2) {
      console.log('hasla ok');

      createUserWithEmailAndPassword(auth, email, password1).then((userCredentials) => {
        console.log(userCredentials);
        console.log(userCredentials.user.metadata.lastSignInTime);
        renderHomePage();
      });
    } else {
      console.log('hasla sie nie zgadzaja');
    }
  });
}
