console.log(document.body)
console.dir(document.body)

let Contenedor = document.getElementById("Contenedorlicores")
console.log(Contenedorlicores)

let licores = [
    {id:1, nombre: "Cerveza Poker", precio: 25000, stock:15, imgUrl: "img/poker.png"},
    {id:2, nombre: "Cerveza Aguila", precio: 25000, stock:15,imgUrl: "img/aguila.png"},
    {id:3, nombre: " Aguardiente Nectar Verde", precio: 48000, stock:15,imgUrl: "img/nectar.png"},
    {id:4, nombre: "Aguardiente Nectar Rojo", precio: 45000, stock:30,imgUrl: "img/nectarred.png"},
    {id:5, nombre: " Aguardiente Antioqueño Verde", precio: 40000, stock:35,imgUrl: "img/antioqueño.png"},
    {id:6, nombre: "Whiskey oldpar", precio: 150000, stock:50,imgUrl: "img/oldpar.png"},
    {id:7, nombre: " Tequila Jose Cuervo", precio: 90000, stock:50,imgUrl: "img/tequila.png"},
    {id:8, nombre: " Bacardi de limon", precio: 100000, stock:50, imgUrl: "img/bacardi.png"}
]

Contenedor = document.getElementById("Contenedorlicores")
Contenedor.className = "licores"

/*
for(const licor of licores){
    Contenedor.innerHTML = Contenedor.innerHTML + "<div>" + licor.nombre + "</div>"
}
*/

for(const licor of licores){
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
            <button> Añadir al carrito </button>
    `

    Contenedor.append(TarjetaLicor)
}