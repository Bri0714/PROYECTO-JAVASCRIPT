/*CARRITO*/

let contenedorcarrito = document.getElementById("contenedorcarrito")
let contenedorcarrito2 = document.getElementById("contenedorcarrito2")

let carrito = []
comprobar(carrito)


function comprobar() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        console.log(carrito)
        renderizarcarrito(carrito)
        renderizarcarrito2(carrito)
    }
}

/*CARRITO ADD*/


function renderizarcarrito(arraycarrito){
    contenedorcarrito.innerHTML =  ""
    for (const licor of arraycarrito) {
        contenedorcarrito.innerHTML += ` 
            <h3 class="key"><b> ${licor.nombre}</b></h3>
            <p class="key"> PRECIO:${licor.precio}</p>
            <p class="key"> ${licor.unidades}</p>
            <p class="key"> $${licor.subtotal}</p>          
            `
    }
    let total = carrito.reduce((acc, valoractual) => acc + valoractual.subtotal ,0)
    contenedorcarrito.innerHTML += `
        <div class="keykey">TOTAL $${total}</div>
        `
}

function renderizarcarrito2(arraycarrito){
    console.log(arraycarrito)
    contenedorcarrito2.innerHTML = ""

    for (const licor of arraycarrito) {
        contenedorcarrito2.innerHTML += ` 
            <h3 class="key"><b> ${licor.nombre}</b></h3>
            <p class="key"> PRECIO:${licor.precio}</p>
            <p class="key"> ${licor.unidades}</p>
            <p class="key"> $${licor.subtotal}</p>          
            `
    }
    let total = carrito.reduce((acc, valoractual) => acc + valoractual.subtotal ,0)
    contenedorcarrito2.innerHTML += `
        <div class="keykey">TOTAL $${total}</div>
        `
}

/*BOTON COMPRAR*/

let botoncomprar = document.getElementById("comprar")
botoncomprar.addEventListener("click", () => {
    Swal.fire({
        title: "LICORES-FONTIBON",
        text: 'Gracias por su compra.',
        imageUrl: 'img/logo1.jpg',
        imageWidth: 300,
        imageHeight: 100,
        color: "white",
        background: "#041240",
        confirmButtonText: 'Cerrar'
    })
    
    localStorage.removeItem("carrito")
    carrito = []
    renderizarcarrito(carrito)
    
})