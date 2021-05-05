let main = document.getElementById("main");
let order = JSON.parse(localStorage.getItem("order"));

localStorage.removeItem("cart");

main.innerHTML = 
`
<div class="text-center m-auto">
    <div class="mx-auto p-5">
        <h2>Merci pour votre commande ${order.contact.lastName} !</h2>
        <p>Votre montant total est de ${order.priceTotaly} €</p>
        <p>Identifiant de la commande : ${order.orderId}</p>
        <a class="btn btn-primary text-uppercase font-weight-bold btn-light" href="index.html">Accueil</a>
    </div>
</div>
`
;