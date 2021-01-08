// déclaration des variables
class cart{
        constructor(stock){
            this.stock = stock;
        }
    }

let productQuantity = 0;
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


// Fonction qui permet de stocker dans le local storage
function addProduct(){
    productQuantity++;
    let test = new cart(productQuantity);

    let obj = JSON.stringify(test);
    localStorage.setItem(`"${product._id}"`, obj);
    
    // productQuantity++;
    // console.log(productQuantity);
    // localStorage.setItem(`"${product._id}"`, `"${productQuantity}"`);

    // class cart{
    //     constructor(id, stock){
    //         this.id = id;
    //         this.stock = stock;
    //     }
    // }
    // let pro = new cart(product._id, 1);
    // localStorage.setItem(`"${pro.id}"`, `"${pro.stock}"`);

}