import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import renderHomePage from "../HomePage/renderHomePage.js";

export default function () {
    const form = document.createElement('form');
    form.setAttribute('id','login-form');

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type','email');
    inputEmail.setAttribute('id','input-email');
    inputEmail.setAttribute('placeholder','email');
    inputEmail.setAttribute("class", "input");

    const inputPassword = document.createElement('input');
    inputPassword.setAttribute('type','password');
    inputPassword.setAttribute('id','input-password');
    inputPassword.setAttribute('placeholder','password');
    inputPassword.setAttribute("class", "input");

    const button = document.createElement('button');
    button.setAttribute('type','submit');
    button.setAttribute('class','button');
    button.textContent = 'Sign in';

    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(button);

    form.addEventListener ('submit', (event) => {
        event.preventDefault();

        const email = inputEmail.value;
        const password = inputPassword.value;

        signInWithEmailAndPassword(auth, email, password)
        .then ((creds) => {
            console.log(creds);
            console.log('Zalogowano');
            renderHomePage();
        })
        .catch ((error) => {
            console.error(error.message)
        });
    });
    return form; 
}