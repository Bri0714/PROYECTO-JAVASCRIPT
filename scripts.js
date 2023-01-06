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

let carrito = []
let contenedorcarrito = document.getElementById("contenedorcarrito")

let Buscador = document.getElementById("Buscador")
Buscador.addEventListener("input", renderizarlicoresfiltrados)

function renderizarlicoresfiltrados() {
    console.log(Buscador.value)
    let licoresfiltrados = licores.filter(licor => licor.nombre.toLowerCase().includes(Buscador.value.toLowerCase()))
    console.log(licoresfiltrados)
    renderizarlicores(licoresfiltrados)
}

let Buscar = document.getElementById("Buscar")
Buscar.addEventListener("click", BuscarLicor)

function BuscarLicor(){

}

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

function agregaralcarrito(e) {
    let licorbuscado = licores.find(licor => licor.id == e.target.id)
    console.log(licorbuscado)
    carrito.push(licorbuscado)
    renderizarcarrito(carrito)
}

function renderizarcarrito(arraydelicores){
    contenedorcarrito.innerHTML =  ""
    for (const licor of arraydelicores) {
        contenedorcarrito.innerHTML += ` 
            <h3 class="key"><b> ${licor.nombre}</b></h3>
            <p class="key"> PRECIO:${licor.precio}</p>        
            `
    }
}

