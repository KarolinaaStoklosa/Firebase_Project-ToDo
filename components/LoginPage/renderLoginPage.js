// 1. Import: renderLoginForm, renderRegisterForm, renderHomePage
// W funkcji: 
// 2. Wybranie i czyszczenie sekcji content
// 3. Stwórz element h2, textContent 'Log in or sign up'
// 4. Stworz element p i nadaj mu textContent 'Our authentication mechanism uses Firebase Auth and is 100% safe'
// 5. Stowrz element label i nadaj mu text content 'Log in'
// 6. Wywolaj funkcje renderLoginForm i zapisz wynik do zmiennej (const form = renderLoginForm() bo zwraca form)
// 7. Stworz element button, nadaj mu id 'register-button' i textContent 'register'
// 8. Do sekcji content podpiąć: h2, p, label, form, registerbutton
// 9. Na buttonaregister nadaj eventListener (w środku: czyścicie sekcje content i wywołujecie renderRegisterForm)

import renderLoginForm from "../LoginForm/renderLoginForm.js";
import renderRegisterForm from "../RegisterForm/renderRegisterForm.js";


export default function () {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = "";

    const h2 = document.createElement('h2');
    h2.textContent = 'Log in or sign up';

    const p = document.createElement ('p');
    p.textContent = 'Our authentication mechanism uses Firebase Auth and is 100% safe';

    const label = document.createElement('label');
    label.textContent = 'Log in';

    const form = renderLoginForm();

    const registerButton = document.createElement('button');
    registerButton.setAttribute('id','register-button');
    registerButton.textContent = 'Register';

    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
    contentContainer.appendChild(label);
    contentContainer.appendChild(form);
    contentContainer.appendChild(registerButton);

    registerButton.addEventListener('click', () => {
        renderRegisterForm();
    })

}