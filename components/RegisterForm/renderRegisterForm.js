import { auth } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import renderHomePage from "../HomePage/renderHomePage.js";
//W funckji poniżej
//1. Wybierz i wyczyść section content
//2. Stworz element form i nadaj mu id "register-form"
//3. Stworz element input , nadaj mu type email, placeholder email, id register-email-input
//4. Stworz 2 osobne inputy, oba będą miały type "password", placeholdery "password", pierwszy będzie miał id "register-first-input-password", a drugi "register-second-input-password"
//5. Stworz element button, nadaj type"submit", textContent"Register"
//6. Do elementu form podpiąć wszystkie inputy i button.
//7. Do sekcji content podpiąć cały formularz.


export default function () {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";

    const form = document.createElement("form");
    form.setAttribute("id", "register-form");

    const h2Text = document.createElement('h2');
    h2Text.textContent = "Sign up";

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "email");
    emailInput.setAttribute("id", "register-email-input");
    emailInput.setAttribute("class", "input");

    const firstPasswordInput = document.createElement("input");
    const secondPasswordInput = document.createElement("input");
    firstPasswordInput.setAttribute("type", "password");
    secondPasswordInput.setAttribute("type", "password");
    firstPasswordInput.setAttribute("placeholder", "password");
    secondPasswordInput.setAttribute("placeholder", "password");
    firstPasswordInput.setAttribute("id", "register-first-input-password");
    secondPasswordInput.setAttribute("id","register-second-input-password");

    firstPasswordInput.setAttribute("class", "input");
    secondPasswordInput.setAttribute("class", "input");

    const button = document.createElement("button");
    button.setAttribute("type","submit");
    button.setAttribute('class','button');
    button.textContent = "Register";

    form.appendChild(h2Text);
    form.appendChild(emailInput);
    form.appendChild(firstPasswordInput);
    form.appendChild(secondPasswordInput);
    form.appendChild(button);

    contentSection.appendChild(form);

    form.addEventListener ("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value;
        const password1 = firstPasswordInput.value;
        const password2 = secondPasswordInput.value;
        console.log(email, password1, password2);

        if (password1===password2) {
            console.log('hasla ok');

            //1) Zwraca Promise (trzeba zrobić then chain)
            //2) Argumenty: obiekt auth (firebaseConfig.js), email, password
            createUserWithEmailAndPassword(auth, email, password1)
            .then((userCredentials) => {
                console.log(userCredentials)
                console.log(userCredentials.user.metadata.lastSignInTime)
                renderHomePage();
            });

        } else {
            console.log('hasla sie nie zgadzaja');
        }
    })

}