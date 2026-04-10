/*
    Método para validar si el vuelo es codeshare o interlínea.
*/

const validateFlightNotCodeshareOrInterline = () => {

    if (!window.eBaDataLayer || !window.eBaDataLayer.bound) {
        return true;
    }

    for (let boundItem of window.eBaDataLayer.bound) {
        for (let flight of boundItem.flights || []) {
            const marketingAirline = flight.marketing_airline_code;
            const operatingAirline = flight.operated_by?.airline_code;
            // Si marketing y operating son diferentes = codeshare o interlínea
            if (marketingAirline && operatingAirline && marketingAirline !== operatingAirline) {
                console.log(numScript, "Vuelo es codeshare o interlínea");
                return false;
            }
        }
    }
    console.log(numScript, "Vuelo NO es codeshare ni interlínea");
    return true;
}