//Création des variables
let table = document.getElementById("tbody");
let priceTotaly = document.getElementById("price");

//variable pour le formulaires de contact
let formName = document.getElementById("name");
let formFirstName = document.getElementById("firstName");
let formRoad = document.getElementById("road");
let formCity = document.getElementById("city");
let formMail = document.getElementById("mail");
let send = document.getElementById("send");



//Création d'un array 
let total = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;


//Création de la requête pour récupérer les données
fetch(`${urlApi}api/cameras/`)
.then(response => response.json())
.then(data => {
    result = data
    getCart();
})


function getCart(){
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    for (i = 0; i < cart.length; i++){
        if(cart[i]){
            let template = {
                tr: document.createElement("tr"),
                td: document.createElement("td"),
                tdName: document.createElement("td"),
                tdQuantity: document.createElement("td"),
                tdPrice: document.createElement("td")
            }
            table.appendChild(template.tr);

            template.tr.appendChild(template.td);
            //affiche l'id
            template.td.textContent = cart[i].id;
            
            template.tr.appendChild(template.tdName);
            //affiche le nom du produit
            template.tdName.textContent = cart[i].name;
            

            template.tr.appendChild(template.tdQuantity);
            template.tdQuantity.textContent = cart[i].quantity;

            total.push(cart[i].price * cart[i].quantity);
            
            template.tr.appendChild(template.tdPrice);
            template.tdPrice.textContent = cart[i].price * cart[i].quantity + " €";


            priceTotaly.textContent = total.reduce(reducer) + " €";

        }else{
            console.log("error");
        }
    }
}
