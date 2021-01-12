//Création des variables
let table = document.getElementById("tbody");
let priceTotaly = document.getElementById("price");

//variable pour le formulaires de contact
let formName = document.getElementById("name");
let formFirstName = document.getElementById("firstName");
let formNumber = document.getElementById("number");
let formRoad = document.getElementById("road");
let formCity = document.getElementById("city");
let formMail = document.getElementById("mail");
let send = document.getElementById("send");


//Création d'un constructeur pour l'objet contact
class contact{
    constructor(name, firstName, number, road, city, email){
        this.name = name,
        this.firstName = firstName,
        this.number = number,
        this.road = road,
        this.city = city,
        this.email = email
    }
}

//Création d'un array 
let total = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;


//Création de la requête pour récupérer les données
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(data => {
    result = data
    cart();
})




//Création de la requête pour envoyer des données
// send.addEventListener("click", sendOrder, false);

// function sendOrder(){
//     let order =  new contact (
//         formName.value,
//         formFirstName.value,
//         formNumber.value,
//         formRoad.value,
//         formCity.value,
//         formMail.value
//         );
//     fetch("http://localhost:3000/api/cameras/order", {
//         method: 'POST',
//         body: JSON.stringify(order),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(response => {
//         console.log("ok");
//     })


    // let request = new XMLHttpRequest();
    // request.open("POST", "http://localhost:3000/api/cameras/order");
    // request.setRequestHeader("Content-Type", "application/json");

    // let order =  new contact (
    //     formName.value,
    //     formFirstName.value,
    //     FormNumber.value,
    //     formRoad.value,
    //     formCity.value,
    //     formMail.value
    //     );
    // console.log(order);

    // request.send(JSON.stringify(order));
// }


function cart(){
    for (i = 0; i < localStorage.length; i++){
        if(localStorage.getItem(`"${result[i]._id}"`)){
            
            let template = {
                tr: document.createElement("tr"),
                td: document.createElement("td"),
                tdName: document.createElement("td"),
                tdQuantity: document.createElement("td"),
                tdPrice: document.createElement("td")
            }
            table.appendChild(template.tr);

            template.tr.appendChild(template.td);
            template.td.textContent = result[i]._id;
            
            template.tr.appendChild(template.tdName);
            template.tdName.textContent = result[i].name;
            
            let number = localStorage.getItem(`"${result[i]._id}"`);
            let objJson = JSON.parse(number);

            template.tr.appendChild(template.tdQuantity);
            template.tdQuantity.textContent = objJson.quantity;


            let price = result[i].price / 100 * objJson.quantity;
            let addPrice = total.push(price);
            
            template.tr.appendChild(template.tdPrice);
            template.tdPrice.textContent = price + " €";
            priceTotaly.textContent = total.reduce(reducer) + " €";

        }else{
            console.log("error");
        }
    }
}
