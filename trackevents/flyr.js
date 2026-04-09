const type = "0"; // Version Control
// const type = "1"; // Versión B
// const type = "2"; // Versión C
const interaccion = "int";
const flujo = "NS"; // DX || NBF
const analitycsElem = flujo == "NS" ? "dataLayer" : "gtmDt";

const trackEvents = (identificador) => {
    const pushClickAnalitycs = (e) => {
        let t = "AT_${campaign.id}_" + device + "_" + interaccion + "_" + type + "_" + e;
        console.log(numScript, "ANALITYCS:", t);
        if (window[analitycsElem]) {
            window[analitycsElem].push({
                event: "sendTargetEvent",
                target_action: t,
            });
        }
    };

    try {
        pushClickAnalitycs(identificador);
    } catch (error) {
        console.error(numScript, "Error pushing to analytics:", error);
    }
};