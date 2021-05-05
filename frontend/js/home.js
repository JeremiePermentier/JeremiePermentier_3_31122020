// variable pour accéder à un élément du dom
const elt = document.getElementById("products");
const spinner = document.getElementById("spinner");

fetch(`${urlApi}api/cameras/`)
.then(response => {
    if (response.status){
        spinner.setAttribute('hidden', '')
    }
    return response.json();
})
.then(data => {
    results = data;
    template(results);
})
.catch(() => templateError())


function template(){
    // Création d'un objet pour le template
    for(let i = 0; i < results.length; i++){
        let card = {
            container: document.createElement("div"),
            row: document.createElement("div"),
            link: document.createElement("a"),
            img: document.createElement("img"),
            containerText: document.createElement("div"),
            title: document.createElement("h2"),
            description: document.createElement("p"),
            price: document.createElement("p"),
            select: document.createElement("select"),
            btn: document.createElement("button")
        };

        // Ajout des éléments HTML
        elt.appendChild(card.link);
        card.link.appendChild(card.container);
        card.container.appendChild(card.img);
        card.container.appendChild(card.containerText);
        card.containerText.appendChild(card.title);
        card.containerText.appendChild(card.price);
        card.containerText.appendChild(card.description);

        // Boucle pour ajouter les options automatiquement
        let option = 0;
        while (option < results[i].lenses.length){
            let opt = document.createElement("option");
            card.select.appendChild(opt);
            opt.textContent = results[i].lenses[option];
            option ++;
        };

        
        // Ajout des valeurs et des classes

        card.link.href = `./product.html?id=${results[i]._id}`;
        card.link.className = "home__link";
        
        card.container.className = "card p-2 shadow bg-white";
        
        card.img.src = results[i].imageUrl;
        
        card.containerText.className = "home__container mt-2 p-3 rounded"

        card.title.textContent = results[i].name;
        card.title.className = "home__heading";
        
        card.description.textContent = results[i].description;
        card.description.className = "home__text";

        card.price.textContent = results[i].price / 100 + " €";
        card.price.className = "home__price font-weight-bold";
        
        card.btn.textContent = "Ajouter au panier";
    }
}