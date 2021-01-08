//Création des variables
let table = document.getElementById("tbody");
let priceTotaly = document.getElementById("price");

let total = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//Création de la requête
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(data => {
    result = data
    cart();
})


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
            console.log(objJson);

            template.tr.appendChild(template.tdQuantity);
            template.tdQuantity.textContent = objJson.stock;


            let price = result[i].price / 100 * objJson.stock;
            let addPrice = total.push(price);
            
            template.tr.appendChild(template.tdPrice);
            template.tdPrice.textContent = price + " €";
            priceTotaly.textContent = total.reduce(reducer) + " €";



            // function template(result){
            //     return `
            //     <tr>
            //         <th scope="row">${result["_id"]}</th>
            //         <td>${result["name"]}</td>
            //         <!--<th scope="row"><img src="${result["imageUrl"]}" width="100"></th>-->
            //     </tr>
            //     `
            // }
            // table.innerHTML = 
            // `
            // ${result.map(template).join(" ")
            
            // }
            // `
        }else{
            console.log("error");
        }
    }
}




