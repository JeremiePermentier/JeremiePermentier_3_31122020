let form = document.getElementById('form');
let cart = JSON.parse(localStorage.getItem("cart"));

let cartArray = [];


fetch("http://localhost:3000/api/cameras/")
.then(response => response.json())
.then(data => {
    result = data

    for (i = 0; i < cart.length; i++){
        if(cart[i].id == result[i]._id){
            let count = 0;
            while(count < cart[i].quantity){
                cartArray.push(cart[i].id);
                count++;
            }
        }else{
            alert("erreur");
        }
    }
})


form.addEventListener('submit', function(e){

    e.preventDefault();

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
})
