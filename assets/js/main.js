const containerEl = document.querySelector(".container")
fetch("https://shrouded-ocean-24719.herokuapp.com/v2/allproducts")
.then(response => response.json())
.then(data => {
    data.forEach(e => {
        const divEl = document.createElement("div")
        containerEl.appendChild(divEl)
        const imgEl = document.createElement("img")
        divEl.appendChild(imgEl)
        const textProduct = document.createElement("h2")
        divEl.appendChild(textProduct)
        const btnDeleteEl = document.createElement("button")
        divEl.appendChild(btnDeleteEl)
        imgEl.src = e.url
        textProduct.innerHTML = e.name
        btnDeleteEl.innerHTML = "delete"
        btnDeleteEl.setAttribute("data-delete", `${e._id}`)
    });
})
containerEl.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.hasAttribute("data-delete"))
    fetch("https://shrouded-ocean-24719.herokuapp.com/v2/allproducts/" + e.target.dataset.delete, {
    method: "DELETE"
    })

})
