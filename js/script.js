

/*Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
*/

//1.1 creare un ciclo in cui per ogni oggetto dell'array inserisco la proprietà colore (che dipende dal type)
//1.2 per ogni oggetto creare una card 

const cardsContainer = document.getElementById("cards-container");
const filterSelect = document.getElementById("filter-select");

console.log(cardsContainer);
console.log(filterSelect);

let newIconsList = [...iconsList];

newIconsList.forEach(icon => {

    icon['color'] = "blue";

    if (icon.type === "vegetable") {
        icon['color'] = "orange";
    }

    if (icon.type === "user") {
        icon['color'] = "purple";
    }

    cardsContainer.innerHTML += `<div class="col">
                        <div class="card">
                            <div>
                                <i class="fas fa-${icon.name}" style="color:${icon.color}"></i>
                                <h4>${icon.name}</h4>
                            </div>
                        </div>
                    </div>`

});

console.log(newIconsList);





