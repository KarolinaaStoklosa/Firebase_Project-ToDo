import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {ref, onValue, push, update, remove} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js"
import {auth, db} from "../../firebaseConfig.js"

// deklaracja funkcji (globalna), submit na formularz
const formListener = (event) => {
    const todoRef = ref(db, "todos/" + auth.currentUser.uid);
    event.preventDefault();
    const radios = [...document.getElementsByName('category')];
    const category = radios.find(el=>el.checked).value;
    const todoText = document.getElementById("todo-input");
    const todoTextValue = todoText.value;
    console.log(category +" "+ todoTextValue);
    push(todoRef, {
        todoTextValue,
        category,
    })
    .then(() => console.log("Pushed the data to db"))
    .catch((err) => console.log(err.message));
};


export default function () {
    const contentContainer = document.querySelector(".content");

    const todoRef = ref(db, "todos/" + auth.currentUser.uid); //ścieżka do Firebase DB, db to obiekt, drugi argument to ścieżka w bazie danych 
    
    onValue(todoRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {

            // 1. Wyczyszczenie contentContainera
            // 2. Stworz element h2 z textContent = "Add, remove and edit your todos" i podepnij go do contentContainera
            // 3. Wywołaj funkcje renderTodoForm i zapisz wynik wywołania do zmiennej (const todoForm = renderTodoForm())
            // 4. Podepnij todoForm do contentContainera przez nazwę zmiennej
            // 5. Dodaj eventListener na todoForm (reagujemy na submit, pamiętać o event.preventDefault())
            //      W EL : 
            //      6. Wybierz wszystkie radioInputy i zapisać do zmiennej radios (document.getElementsByName) (DOKUMENTACJA), zrób z tego array bo getElementsByName zwraca HTMLCollection
            //      7. Znajdz input który jest zaznaczony (atrybut checked true, .find(), wybieranie elementów w CSS w zależności od atrybutów)
            //      8. Po znalezieniu inputu ściągnąć z niego .value
            //      9. Wybiberz input o id "todo-input" przy pomocy getElementByID i ściągnij z niego value, zapisz do zmiennej
            contentContainer.innerHTML = "";
            const h2 = document.createElement ('h2');
            h2.textContent = "Add, remove and edit your todos";
            contentContainer.appendChild(h2);
            const todoForm = renderTodoForm();
            contentContainer.appendChild(todoForm);

            todoForm.addEventListener ('submit', formListener);
                         
        }  else {
            const todos = Object.values(data);  // tu będą wszystkie todosy
            console.log(todos);
            //1. Stwórz element h2, textContent 'Add, remove and edit your todos'
            //2. Stworz zmienną listItems, wartością tej zmiennej będzie    wywołanie metody .map() na zmiennej todos (const listItems=todos.map   (el, idx..))
            //3. W metodzie map: 
                //-stwórz element <li>,  id `li-${idx}`
                //-stwórz <div>, id `div-${idx}`
                //-stwórz element <span>, textContent będzie musiał zawierać    todoText i category
                //-stwórz element <button>, id `edit-button-${idx}`, class  'edit-button' textContent 'Edit'
                //-stwórz element <button>, id`remove-button-${idx}`,   class'remove-button', textCntent'Remove'
                //- do diva podepnij span, edit button, remove button, przy     pomocy appendChild
                //- do li podepnij diva appendChild()
                // zwróc li przy pomocy return return li
                //KONIEC MAPa
            //4. Poza metodą map console.log(listItems)
            const h2 = document.createElement("h2");
            h2.textContent = "Add, remove and edit your todos";
            const listItems = todos.map ((el,idx) => {
                const li = document.createElement("li");
                li.setAttribute('id',`li-${idx}`);
                const div = document.createElement('div');
                div.setAttribute('id',`div-${idx}`);
                const span = document.createElement("span");
                span.textContent = `${el.todoTextValue}(${el['category']})`;
            
                const editButton = document.createElement("button");
                editButton.setAttribute('id',`edit-button-${idx}`);
                editButton.setAttribute('class','edit-button');
                                editButton.textContent= "Edit";
                const removeButton = document.createElement("button");
                removeButton.setAttribute('id',`remove-button-${idx}`);
                removeButton.setAttribute("class", "remove-button");
        
                removeButton.textContent = "Remove";

                div.appendChild(span);
                div.appendChild(editButton);
                div.appendChild(removeButton);
                li.appendChild(div);
                return li;
            });
            //1. Stwórz element <ul>
            //2. Wywołaj metodę forEach na zmiennej listItems, w środku     forEach'a podepnij aktualny element po którym iterujesz do ul'a z   pkt1 (el => list.appendChild(el))
            //3. Wyczyść contentContainer
            //4. Stwórz zmienną todoForm, zapisz w niej wywołanie renderTodoForm    (const todoForm = rennderTodoForm() )
            //5. Do contentContainera podepnij h2, todoForm,ul
            //6. Na todoForm nałóż eventListenera jak wyżej (z pushem)
            //7. Pomysl jak możnaby skrócić kod (mamy 2 eventListenery), zastosuj

            const ul = document.createElement("ul");
            listItems.forEach((el) => ul.appendChild(el));
            contentContainer.innerHTML="";
            const todoForm = renderTodoForm();
            contentContainer.appendChild(h2);
            contentContainer.appendChild(todoForm);
            contentContainer.appendChild(ul);

            todoForm.addEventListener ('submit', formListener );

            //1. Wybierz wszystkie edit buttony (klasa 'edit-button', przerobić na zwykły array)
            //2. Na arrayu z pkt1, wywołaj forEach (el, idx), 
                //w środku forEach:
                //a) nadaj na element po którym iterujesz eventListener (click), 
                    //w środku eventListenera:
                    //a)usuń z domu element po którym aktualnie iterujesz (.remove)
                    //b) stwórz zmienną div w której będziesz przechowywał diva rodzica edit buttona (doc.getEBID('div-${i}))
                    //c) stwórz zmienną form i wywołaj w niej renderTodoForm
                    //d) nadaj temu formularzowi id zależne od indexu (`todo-form-${i}`)
                    //e) do diva (ppktb) podepnij todoForm z (ppktc)
                    
            const editButtons = [...document.getElementsByClassName('edit-button')];
            editButtons.forEach((el,i) => {
                el.addEventListener('click',() =>{
                    el.remove();            //usuwa button, button zamienia się na formularz
                    const div = document.getElementById(`div-${i}`);
                    const form = renderTodoForm();
                    form.setAttribute('id',`todo-form-${i}`);
                    div.appendChild(form);
                    // 1. Na form nałóż eventListener na submit, 
                        // 2. Wybierz todo input z właściwego formularza (this.childNodes) i ściągnij wartość (.value)
                        // 3. Wybierz wszystkie radio inputy z odpowiedniego formularza (this.getElementsByTagName), zrzutuj HTMLCollection na zwykly Array, po czym usuńz niego 1szy element (będzie to input tekstowy, a chcemy tylko radio) (.slice()), po czym metodą find znajdź input z atrybutem checked i ściągnij z niego wartość przy pomocy .value
                        
                        // 4. Stwórz obiekt updates { (pusty)}
                        /*{
                            "todos"/ ID TODOSA" : {
                                category: 'work'
                                todoText: 'podpisz umowę'
                            }

                        } 
                        
                        "todos/" + auth ... + Object.keys(...)
                        */
                        // 5. Przy pomocy bracket notation wrzuć do tego obiektu kategorię ściągniętą z radio inputów i todoText z inputu tekstowego (potrzebne id todosa)
                        // 6. Wywołaj metodę update z obiektem updates jako argument 

                    form.addEventListener ("submit", function (event){
                        event.preventDefault();

                        const newTodoText = this.childNodes[0].value;   //this działą tylko gdy nie ma funkcji strzałkowej
                        const radios = [...this.getElementsByTagName("input")].slice(1,5);
                        const newCategory = radios.find(el=>el.checked).value;
                       
                        const updates = {};
               
                        const todoId = Object.keys(data)[i];

                        const postData = {
                            category: newCategory,
                            todoTextValue: newTodoText,
                       };
                       updates['/todos/'+auth.currentUser.uid+'/'+todoId] = postData;
                       console.log(updates);

                       //II WERSJA - KACPRA
                       /* 
                       const todoText = this.childNodes[0].value
                       const category = [...this.getElementsByTagName("input")].slice(1,5).find(el=>el.checked).value
                    
                       update(ref(db), {
                        [`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}]:{
                            category,
                            todoText
                        }
                       }) */
                       update(ref(db), updates);

                    })

                });
            });

            const removeButtons = [...document.getElementsByClassName("remove-button")]
            removeButtons.forEach((el,i) => {
                el.addEventListener('click', function(){
                    this.parentElement.parentElement.remove() //usuwamy li
                    remove(
                        ref(db,`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`)
                    );
                });  
                
            })


        }

    });
}