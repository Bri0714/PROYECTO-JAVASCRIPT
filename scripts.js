console.log(document.body)
console.dir(document.body)


let Contenedor = document.getElementById("Contenedorlicores")

let licores = [
    { id: 1, nombre: "Cerveza Poker", precio: 25000, stock: 15, imgUrl: "img/poker.png" },
    { id: 2, nombre: "Cerveza Aguila", precio: 25000, stock: 15, imgUrl: "img/aguila.png" },
    { id: 3, nombre: " Aguardiente Nectar Verde", precio: 48000, stock: 15, imgUrl: "img/nectar.png" },
    { id: 4, nombre: "Aguardiente Nectar Rojo", precio: 45000, stock: 30, imgUrl: "img/nectarred.png" },
    { id: 5, nombre: " Aguardiente Antioqueño Verde", precio: 40000, stock: 35, imgUrl: "img/antioqueño.png" },
    { id: 6, nombre: "Whiskey oldpar", precio: 150000, stock: 50, imgUrl: "img/oldpar.png" },
    { id: 7, nombre: " Tequila Jose Cuervo", precio: 90000, stock: 50, imgUrl: "img/tequila.png" },
    { id: 8, nombre: " Bacardi de limon", precio: 100000, stock: 50, imgUrl: "img/bacardi.png" }
]

Contenedor = document.getElementById("Contenedorlicores")
Contenedor.className = "licores"
renderizarlicores(licores)


/*CARRITO*/

let carrito = []
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

let contenedorcarrito = document.getElementById("contenedorcarrito")

/*EJEMPLO BUSCADOR SIN BOTON INPUT*/

/*
let Buscador = document.getElementById("Buscador")
Buscador.addEventListener("input", renderizarlicoresfiltrados)

function renderizarlicoresfiltrados() {
    console.log(Buscador.value)
    let licoresfiltrados = licores.filter(licor => licor.nombre.toLowerCase().includes(Buscador.value.toLowerCase()))
    console.log(licoresfiltrados)
    renderizarlicores(licoresfiltrados)
}
*/

/*
for(const licor of licores){
    Contenedor.innerHTML = Contenedor.innerHTML + "<div>" + licor.nombre + "</div>"
}
*/

function renderizarlicores(arraydelicores) {
    Contenedor.innerHTML = ""
    for (const licor of arraydelicores) {
        let TarjetaLicor = document.createElement("div")
        TarjetaLicor.className = "licor"
        TarjetaLicor.id = licor.id
        /*
        TarjetaLicor.innerHTML = TarjetaLicor.innerHTML + "<h3>" + licor.nombre + "</h3>" 
        TarjetaLicor.innerHTML = TarjetaLicor.innerHTML + "<p>" + " Precio: "  + licor.precio + "</p>"
        TarjetaLicor.innerHTML = TarjetaLicor.innerHTML + "<p>" + " Almacen: " + licor.stock + "</p>"
        */
        TarjetaLicor.innerHTML = ` 
            <h3 class="key"><b> ${licor.nombre}</b></h3>
            <p class="key"> PRECIO:${licor.precio}</h3>
            <p class="key"> ALMACEN:${licor.stock}</h3>
            <figure class="figure"><img class="biblio" src=${licor.imgUrl}></figure>
            <button class="boton" id=${licor.id}> Añadir al carrito </button>
        `
        Contenedor.append(TarjetaLicor)
    }
    let botones = document.getElementsByClassName("boton")
    for (const boton of botones) {
        boton.addEventListener("click", agregaralcarrito)

    }
}

/*BUSCADOR CON BOTON*/

let Buscador = document.getElementById("Buscador") 
let Boton = document.getElementById("Boton")

Boton.addEventListener("click", buscar)

function buscar(e){
    e.preventDefault()
    let licoresfiltrados = licores.filter(licor => licor.nombre.toLowerCase().includes(Buscador.value.toLowerCase()))
    renderizarlicores(licoresfiltrados)

}

/*CARRITO ADD*/

function agregaralcarrito(e) {
    let licorbuscado = licores.find(licor => licor.id == e.target.id)
    console.log(licorbuscado)
    let posiciondellicorbuscado = carrito.findIndex(licor => licor.id == licorbuscado.id)
    if(posiciondellicorbuscado != -1){
        console.log("prueba")
        carrito[posiciondellicorbuscado].unidades++
        carrito[posiciondellicorbuscado].subtotal = carrito[posiciondellicorbuscado].unidades * carrito[posiciondellicorbuscado].precio

    }else{
        carrito.push({id: licorbuscado.id, nombre: licorbuscado.nombre, precio: licorbuscado.precio, unidades: 1, subtotal: licorbuscado.precio, stock:licorbuscado.stock})
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizarcarrito(carrito)
}

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

/*BOTON COMPRAR*/

let botoncomprar = document.getElementById("comprar")
botoncomprar.addEventListener("click", () => {

    Swal.fire({
        text: 'Gracias por su compra',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })

    localStorage.removeItem("carrito")
    carrito = []
    renderizarcarrito(carrito)
    
})

