// déclaration des variables
let id = new URL(window.location.href).searchParams.get('id');


fetch("http://localhost:3000/api/cameras/" + id)
.then(response => response.json())
.then(data => {
    result = data
    template(result);
    const add = document.getElementById("add");
    add.addEventListener("click", addProduct, false);
})


// Fonction qui permet de stocker dans le local storage
function addProduct(e){
    e.preventDefault();

    let chooseCamera = {
        name: result.name,
        id: result._id,
        quantity: 1,
        price: result.price / 100 
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart === null){
        cart = [];
    }
    
    if(cart){
        const arrayCart = cart.find(camera => camera.id == result._id);
        if(arrayCart === undefined){
            cart.push(chooseCamera);
        }else{
            arrayCart.quantity++;
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}



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
while (option < result.lenses.length){
    let opt = document.createElement("option");
    template.select.appendChild(opt);
    opt.textContent = result.lenses[option];
    option ++;
};


    template.container.className = ("card p-2 my-5");

    template.img.src = result.imageUrl;
    
    template.title.textContent = result.name;
    template.title.className = "product__heading";
    
    template.description.textContent = result.description;
    
    template.price.textContent = result.price / 100 + " €";
    template.price.className = "product__price";
    
    template.btn.className = "mt-3 btn btn-dark"
    template.btn.textContent = "Ajouter au panier";
    template.btn.id = "add";
}