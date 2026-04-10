/*
    Obtén los codigos IATA de los aeropuertos de la página de avianca
    ** Como usar el método **
    1. Despliega la lista de aeropuertos en la página de avianca y filtra por país o ciudad
    2. Abre la consola del navegador (F12) y pega el código
    3. Ejecuta el método getCodeIATA() y obtendrás un array con los codigos IATA de los 
    aeropuertos listados
*/

const getCodeIATA = () => {
    const list = document.querySelector("#departureStationsListId");
    const items = list.querySelectorAll("li");
    const codeIATA = [];
    items.forEach(li => {
        codeIATA.push(li.querySelector(".station-control-list_item_link-code")?.textContent.trim() || "");
    });
    return codeIATA;
}