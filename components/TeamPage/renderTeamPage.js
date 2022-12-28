import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {collection, addDoc, getDocs, doc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

 
// 1. Importy: renderTodoForm; collection; addDoc, getDocs ("https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"); obiekt firestore z firebaseConfig.js
// W funkcji : 
    // 2. Wybranie i czyszczenie content Container
    // 3. Stwórz element h2, textContent "Your team's todos.". Podepnij do content containera
    // 4. Wywołaj funkcję renderTodoForm, wynik zapisz do zmiennej todoForm
    // 5. Nadaj todoFormowi id 'teams-todo-form' , podepnij go  do content containera
    // 6. Na todoForm nadaj eventListener na submit. 
        // W EL:
        // 7. Wybierz todoInput i ściągnij z niego value (id 'todo-input)
        // 8. Wybierz i ściągnięcie value z odpowiedniego radioInputa (z funkcji, nie z edycji inputów)
        // 9. Użyj funkcji addDoc do wrzucenia danych do bazy, poprawność .then + console.log .catch err
// FUNKCJA COLLECTION : collection(firestore,"teams")



export default function () {
    

    
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML="";
    const h2 = document.createElement("h2");
    h2.textContent = "Your team's todos";
    contentContainer.appendChild(h2);

    const todoForm = renderTodoForm();
    todoForm.setAttribute('id', 'teams-todo-form');
    contentContainer.appendChild(todoForm);

    todoForm.addEventListener ('submit', (event) => {
        event.preventDefault();
        const todoText = document.getElementById('todo-input').value;
        const category = [...document.getElementsByName('category')].find(el=>el.checked).value;
        console.log(todoText, category);
        // addDoc(collection(firestore, "teams"), {
        //     category,
        //     todoText,
        // }).then(()=>console.log("Pushed the data to firestore"))
        // .catch((err)=>console.err(err.message));

        async function foo (){
            try{
                const docRef = await addDoc(collection(firestore, "teams"), {
                    category,
                    todoText,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (err){
                console.log("Error",err.message);
            }
        }
        foo();
    });

    // 1. Stwórz element ul, id 'teams-todos-list'
    // 2. Stwórz funkcję asynchroniczną, nazwij ją readDocData.
        //W funkcji:
        // 3. Wywołaj funkcję getDocs i ściągnij dane z kolekcji teams, wynik wywołania zapisz do zmiennej querySnapshot, pamiętaj o await (const querySnapshot = async)
        // 4. NA zmiennej querySnapshot wywołaj forEach'a (w parametrze doc, (doc)=>{...}). W tym forEachu stwórz zmienną docs lub inaczej i zapisz w niej wynik wywołania metody data() na param doc const docs = doc.data()
        // 5. Console.log(docs), żeby spr co to jest
        // 6. Stwórz element li, textContent , ma się znaleźć todoText i category
        // 7. Podepnij li to ul z pkt 1
        // KONIEC FOREACH i F readDocData
    // 8. Wywołanie readDocData(); 
    // 9. Podpenij ul z pkt 1 do contentContainera

    const ul = document.createElement ('ul');
    ul.setAttribute('id','teams-todos-list');
    // const readDocData = async function () {
    //     try {
    //         const querySnapshot = await getDocs(collection(firestore,"teams"));
    //         querySnapshot.forEach((doc) => {
    //             const todo = doc.data();
    //             console.log(todo);
    //             const li = document.createElement('li');
    //             li.textContent = `${todo.todoText} (${todo.category})`;
    //             ul.appendChild(li);
    //             contentContainer.appendChild(ul);
    //         });
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // };


    // const q = query(collection(firestore, "teams"));
    const unsubscribe = onSnapshot(collection(firestore, "teams"), (snapshot) => {
        const changes = snapshot.docChanges();
        // console.log(changes);
        changes.forEach (change => {
            if (change.type == "added"){
                console.log(change);
                const todo = change.doc.data();
                const li = document.createElement('li');
                li.textContent = `${todo.todoText} (${todo.category})`;
                ul.appendChild(li);
                contentContainer.appendChild(ul);
                
            }
        })
    })

    /* const renderedTodos = [];
  onSnapshot(collection(firestore, "teams"), (querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      if (renderedTodos.includes(doc.id)) return; // guarding clause ID: 3ugh3eriuh2
      // console.log(renderedTodos);
      renderedTodos.push(doc.id);
      const { todoText, category } = doc.data();

      // 6.
      const li = document.createElement("li");
      li.textContent = `${todoText} (${category})`;

      // 7.
      ul.appendChild(li);
    });
  });
  */
 
    

}

