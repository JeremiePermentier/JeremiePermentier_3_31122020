let main = document.getElementById("main");
let order = JSON.parse(localStorage.getItem("order"));

main.innerHTML = 
`
<div class="row">
    <div class="mx-auto">
        <h2>Merci pour votre commande ${order.contact.lastName} !</h2>
        <p>Votre montant total est de ${order.priceTotaly} €</p>
        <p>Identifiant de la commande : ${order.orderId}</p>

    </div>
</div>
`
;