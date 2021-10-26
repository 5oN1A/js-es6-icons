

/*Milestone 1-2
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Coloriamo le icone per tipo
*/

//1 creare un ciclo in cui per ogni oggetto dell'array inserisco la proprietà colore (che dipende dal type)
//2 per ogni oggetto creare una card 

const cardsContainer = document.getElementById("cards-container");
const filterSelect = document.getElementById("filter-select");

console.log(cardsContainer);
console.log(filterSelect);

let newIconsList = iconsList.map(icon => {

    const { name, prefix, type, family } = icon;

    let newIcon = {
        name,
        prefix,
        type,
        family
    }
    if (newIcon.type === "animal") {
        newIcon['color'] = "blue";
    }
    if (newIcon.type === "vegetable") {
        newIcon['color'] = "orange";
    }

    if (newIcon.type === "user") {
        newIcon['color'] = "purple";
    }
    return newIcon;
})

function printCard(iconList) {
    cardsContainer.innerHTML = "";


    let htmlToPrint = "";

    iconList.forEach(icon => {
        htmlToPrint += `<div class="col">
        <div class="card">
            <div>
                <i class="fas fa-${icon.name}" style="color:${icon.color}"></i>
                <h4>${icon.name}</h4>
            </div>
        </div>
    </div>`
    });

    cardsContainer.innerHTML = htmlToPrint;

}
printCard(newIconsList);





console.log(iconsList);
console.log(newIconsList);

/*
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone*/
//3.creazione di event listener
//3a filtrare gli ogetti che hanno il type che corrisponde alla select selezionata
//3b stampare le card degli oggetti filtrati  
//3c se invece la selezione è di all stampare tutte le carte 





filterSelect.addEventListener("change", function () {
    let currentType = this.value;
    console.log(currentType);

    let typeSelection = newIconsList.filter(item => {
        if (currentType === item.type)
            return true;
    })
    console.log(typeSelection);
    printCard(typeSelection);
    if (currentType === "all") {
        printCard(newIconsList);
    }


})
