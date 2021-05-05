function templateError(){
    let divError = document.createElement("div");
    elt.appendChild(divError);
    divError.className = "m-auto";

    let imgError = document.createElement("img");
    divError.appendChild(imgError);
    imgError.src = "img/sad-camera-error.png";

    let error = document.createElement("h2");
    divError.appendChild(error);
    error.className = "text-center";
    error.textContent = "Erreur leur du chargement de la page";    
}