var panels = document.querySelectorAll(".panel-child");

function openPanel() {
    // console.log(event)
    this.classList.toggle("open-panel");
}

function transitionEnd(event) {
    console.log(event)
    if (event.propertyName.includes("flex"))
        this.classList.toggle("panel-active")
}
panels.forEach(element => {
    element.addEventListener("click", openPanel);
});
panels.forEach(element => element.addEventListener("transitionend", transitionEnd));