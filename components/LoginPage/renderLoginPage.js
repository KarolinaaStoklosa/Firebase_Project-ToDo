import renderLoginForm from '../LoginForm/renderLoginForm.js';
import renderRegisterForm from '../RegisterForm/renderRegisterForm.js';

export default function () {
  const contentContainer = document.querySelector('.content');
  contentContainer.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = 'Log in or sign up';

  const p = document.createElement('p');
  p.textContent = 'Our authentication mechanism uses Firebase Auth and is 100% safe';

  const label = document.createElement('label');
  label.textContent = 'Log in';

  const form = renderLoginForm();

  const registerButton = document.createElement('button');
  registerButton.setAttribute('id', 'register-button');
  registerButton.textContent = 'Register';

  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
  contentContainer.appendChild(label);
  contentContainer.appendChild(form);
  contentContainer.appendChild(registerButton);

  registerButton.addEventListener('click', () => {
    renderRegisterForm();
  });
}
