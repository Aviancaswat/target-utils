const getPosOptions = () => {
    let pos = []
    let list = document.querySelector(".mat-select-panel");
    let options = list.querySelectorAll("mat-option");
    options.forEach(option => {
        pos.push(option.querySelector(".mat-option-text")?.textContent.trim());
        console.log("Text: ", option.querySelector(".mat-option-text")?.textContent.trim());
    });
    console.log("Pos: ", pos)
    return pos;
}