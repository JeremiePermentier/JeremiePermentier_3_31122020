// déclaration des variables
let id = new URL(window.location.href).searchParams.get('id');


fetch("http://localhost:3000/api/cameras/" + id)
.then(response => response.json())
.then(data => {
    product = data
    template(product);
    const add = document.getElementById("add");
    add.addEventListener("click", addProduct, false);
})


//Création de la fonction pour le template
function template(){
    let template = {
        container: document.createElement("div"),
        img: document.createElement("img"),
        title: document.createElement("h1"),
        description: document.createElement("p"),
        price: document.createElement("p"),
        select: document.createElement("select"),
        btn: document.createElement("button")
    }
    let elt = document.getElementById("main");
    elt.appendChild(template.container);
    template.container.appendChild(template.img);
    template.container.appendChild(template.title);
    template.container.appendChild(template.description);
    template.container.appendChild(template.price);
    template.container.appendChild(template.select);
    template.container.appendChild(template.btn);

// Boucle pour ajouter les option automatiquement
let option = 0;
while (option < product.lenses.length){
    let opt = document.createElement("option");
    template.select.appendChild(opt);
    opt.textContent = product.lenses[option];
    option ++;
};


    template.container.className = ("card");
    template.img.src = product.imageUrl;
    template.title.textContent = product.name;
    template.description.textContent = product.description;
    template.price.textContent = product.price / 100 + " €";
    template.btn.textContent = "Ajouter au panier";
    template.btn.id = "add";
}

function addProduct(){
    let basket = window.localStorage;
    localStorage.setItem("imgProduct", `"${product.imageUrl}"`)
    localStorage.setItem("nameProduct", `"${product.name}"`)
    localStorage.setItem("desProduct", `"${product.description}"`)
    localStorage.setItem("priceProduct", `"${product.price}"`)
}