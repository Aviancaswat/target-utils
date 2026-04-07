const getCodeIATA = () => {
    const list = document.querySelector("#departureStationsListId");
    const items = list.querySelectorAll("li");
    const codeIATA = [];
    items.forEach(li => {
        codeIATA.push(li.querySelector(".station-control-list_item_link-code")?.textContent.trim() || "");
    });
    return codeIATA;
}