// variable pour accéder à un élément du dom
let elt = document.getElementById("products");

fetch("http://localhost:3000/api/cameras/")
.then(response => response.json())
.then(data => {
    results = data;
    //Appel de la fonction template
    template(results);
})
.catch(error => templateError())


function template(){
    // Création d'un objet pour le template
    for(let i = 0; i < results.length; i++){
        let card = {
            container: document.createElement("div"),
            row: document.createElement("div"),
            link: document.createElement("a"),
            img: document.createElement("img"),
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
        card.container.appendChild(card.title);
        card.container.appendChild(card.description);
        card.container.appendChild(card.price);

        // Boucle pour ajouter les options automatiquement
        let option = 0;
        while (option < results[i].lenses.length){
            let opt = document.createElement("option");
            card.select.appendChild(opt);
            opt.textContent = results[i].lenses[option];
            option ++;
        };

        
        // Ajout des valeurs et des classes

        card.link.href = `/frontend/product.html?id=${results[i]._id}`;
        card.link.className = "home__link";
        
        card.container.className = "card p-2 shadow bg-white";
        
        card.img.src = results[i].imageUrl;
        
        card.title.textContent = results[i].name;
        card.title.className = "home__heading";
        
        card.description.textContent = results[i].description;
        card.description.className = "home__text";

        card.price.textContent = results[i].price / 100 + " €";
        card.price.className = "home__price";
        
        card.btn.textContent = "Ajouter au panier";
    }
}