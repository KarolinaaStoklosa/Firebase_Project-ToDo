import { storage, auth} from "../../firebaseConfig.js";
import {ref, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";


export default function () {
    const contentSection = document.querySelector(".content");
    contentSection.innerHTML="";
    const h2HomePage = document.createElement("h2");
    const p1HomePage = document.createElement('p');
    const p2HomePage = document.createElement('p');
    const p3HomePage = document.createElement('p');
    h2HomePage.textContent = 'Welcome!';
    p1HomePage.textContent = `This is a simple web page written in vanilla JavaScript. `;
    p2HomePage.textContent = `You can add, remove and edit your private todos and add some team todos divided into four categories.`
    p3HomePage.textContent = `Sign up, upload your avatar and enjoy!`
    contentSection.appendChild(h2HomePage);
    contentSection.appendChild(p1HomePage);
    contentSection.appendChild(p2HomePage);
    contentSection.appendChild(p3HomePage);

}
