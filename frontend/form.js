let form = document.getElementById('form');

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
            products: {
                id: ["5be1ed3f1c9d44000030b061"]
            }
        }),
        headers:{
            "Content-Type":"application/json ; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})