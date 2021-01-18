// Récupération du formulaire dans le dom

let form = document.getElementById('send');

let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;


// Récupération des données dans le localstorage
let cart = JSON.parse(localStorage.getItem("cart"));

//Création d'un tableau pour le panier
let cartArray = [];


fetch("http://localhost:3000/api/cameras/")
.then(response => response.json())
.then(data => {
    result = data
    form.addEventListener("click", verify, false);

})


function verify(e){
   if(formName.validity.valueMissing){
    e.preventDefault();
   }else if(prenomValid.test(formName.value) == false){
        e.preventDefault();
        alert("le nom est non comforme")
   }else{
       findCart();
   }
};

function findCart(e){
    if (cart){
        for (i = 0; i < cart.length; i++){
            if(cart[i].id == result[i]._id){
                let count = 0;
                while(count < cart[i].quantity){
                    cartArray.push(cart[i].id);
                    count++;
                }
            }
        }
        sendOrder(form);
    }else{
        e.stopPropagation();
        alert("votre panier est vide");
    }
};

function sendOrder(){
    let name = document.getElementById('name').value;
    let firstName = document.getElementById('firstName').value;
    let road = document.getElementById('road').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('mail').value;

    fetch("http://localhost:3000/api/cameras/order", {
        method: 'POST',
        body: JSON.stringify({
            contact: {
            firstName: name,
            lastName: firstName,
            address: road,
            city: city,
            email: email
            },
            products: cartArray
            
        }),
        headers:{
            "Content-Type":"application/json ; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        result.priceTotaly = total.reduce(reducer);
        localStorage.setItem("order", JSON.stringify(result));
        window.location.assign("http://127.0.0.1:5500/frontend/order.html");
    })
}
