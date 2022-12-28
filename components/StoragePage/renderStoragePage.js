import {storage, auth} from "../../firebaseConfig.js"
import { uploadBytes, ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

//1. Importy: storage z firebaseConfig; uploadBytes, ref ("https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js")
// 2. Wybranie i czyszczenie content containera
// 3. Stwórz element h2, textContent "Upload your profile photo!", od razu podepnij pod contentContainer 
//4. Stwórz element form, id 'file-form'
//5. Stworz eleemnt input, id 'file-input', type 'file', acceppt "image/png, image/jpeg"
//6. Stwórze element button, id 'file-form-submit-button', type 'submit', textContent "Upload yor file"
//7. Do form pkt4 podepnij input i submit button
//8. Do contentContainera podepnij form
//9. Funkcje zaimportuj do index.js, podepnij EL do Storagebuttona i wywołuj renderStoragePage


export default function () {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";

    const h2 = document.createElement('h2');
    h2.textContent = "Upload your profile photo!";
    contentContainer.appendChild(h2);

    const fileForm = document.createElement("form");
    fileForm.setAttribute('id','file-form');
    const fileInput = document.createElement("input");
    fileInput.setAttribute('id','file-input');
    fileInput.setAttribute('type','file');
    fileInput.setAttribute('accept','image/png, image/jpeg');

    const button = document.createElement("button");
    button.setAttribute('id','file-form-submit-button');
    button.setAttribute('type','submit');
    button.textContent = "Upload your file";

    fileForm.appendChild(fileInput);
    fileForm.appendChild(button);
    contentContainer.appendChild(fileForm);

    fileForm.addEventListener("submit", (event) => {

        event.preventDefault();
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`)

        const file = fileInput.files[0];
        uploadBytes(storageRef,file)
        .then(()=>console.log("File uploaded"))
        .catch((err) =>console.log('Failed to uplo'))

    })
}