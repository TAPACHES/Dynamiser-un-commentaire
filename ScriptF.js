    //Récupération du formulaire
let form = document.querySelector('form');

    //Récupération du messsage d'erreur en cas de champ vide
errorMessage = document.getElementById("error-message");

    //Récuperation des champs
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let comment = document.getElementById("message");

    // Récupération de la liste des commentaires
let commentList = document.getElementById('comment-list');

    //Création de la fonction nouveau commentaire
function addNewComment(){
       //Création des nouveaux éléments 
    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    let newH3 = document.createElement("h3");
    let newP = document.createElement("p");

        // Récupération des Valeur du nouveau commentaire
    let newTextH3 = document.createTextNode(firstName.value + " " + lastName.value);
    let newTextP = document.createTextNode(comment.value);
    
        //Recuperation des Styles CSS
    newDiv1.className = "flex space-x-4 text-sm text-gray-500"
    newDiv2.className = "flex-1 py-10 border-t border-gray-200"
    newH3.className = "font-medium text-gray-900"
    newDiv3.className = "prose prose-sm mt-4 max-w-none text-gray-500"


        //Organisation des nouveaux éléments
    commentList.appendChild(newDiv1);
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newH3);
    newDiv3.appendChild(newP);
    newH3.appendChild(newTextH3);
    newP.appendChild(newTextP);
    newDiv2.appendChild(newDiv3);
}


    // Fonction Message d'erreur 
function showError () {
    errorMessage.style.display = "block"; 
}


    // Fonction Cahcer le message d'erreur après envoie si celui si été présent
function hiddenShowError () {
    errorMessage.style.display = "none"
}

    //Fonction Suppression du contenu des champs 
function deleteFields(){
    firstName.value = "";
    lastName.value = "";
    comment.value ="";
}


    //Fonction principale  
form.addEventListener("submit", (event) =>{
    //Vérification du contenu des différenrts champs ==> si vide erreur 
    if (firstName.value.trim() === "" || lastName.value.trim() === "" || comment.value.trim() === "" ){
        showError();
    } else{
        // Sinon, envoie tout et on efface le contenu des champs
        hiddenShowError();
        addNewComment();
        deleteFields();
    }
    //Suppression du rechargement de la page lorsque le commentaire est envoyé
    event.preventDefault();
}); 

