function templateError(){
    let divError = document.createElement("div");
    elt.appendChild(divError);
    divError.className = "m-auto";

    let imgError = document.createElement("img");
    divError.appendChild(imgError);
    imgError.src = "img/exclamation-triangle-solid.svg";
    imgError.className = "m-5";

    let error = document.createElement("h2");
    divError.appendChild(error);
    error.textContent = "Erreur leur du chargement de la page";    
}