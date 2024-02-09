const showMore = document.querySelectorAll("[data-show]")

showMore.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id")
        const hightlights = document.getElementById(`hightlights-${ id }`)

        if(hightlights) {
            if(hightlights.classList.contains("active")) {
                button.innerHTML = "Ver más +"
                hightlights.classList.remove("active")
            }
            else {
                button.innerHTML = "Ver menos -"
                hightlights.classList.add("active")
            }
        }
    })
})