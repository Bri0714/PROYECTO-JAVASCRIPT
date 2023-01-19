console.log(document.body)
console.dir(document.body)

fetch("./licores.json")
    .then(response => response.json())
    .then(licores => {
        let Contenedor = document.getElementById("Contenedorlicores")

        Contenedor = document.getElementById("Contenedorlicores")
        Contenedor.className = "licores"
        renderizarlicores(licores)


        /*CARRITO*/

        let carrito = []
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }

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

        function buscar(e) {
            e.preventDefault()
            let licoresfiltrados = licores.filter(licor => licor.nombre.toLowerCase().includes(Buscador.value.toLowerCase()))

            renderizarlicores(licoresfiltrados)

        }


        /*CARRITO ADD*/


        function agregaralcarrito(e) {
            let licorbuscado = licores.find(licor => licor.id == e.target.id)
            console.log(licorbuscado)
            let posiciondellicorbuscado = carrito.findIndex(licor => licor.id == licorbuscado.id)
            if (posiciondellicorbuscado != -1) {
                console.log("prueba")
                carrito[posiciondellicorbuscado].unidades++
                carrito[posiciondellicorbuscado].subtotal = carrito[posiciondellicorbuscado].unidades * carrito[posiciondellicorbuscado].precio

            } else {
                carrito.push({ id: licorbuscado.id, nombre: licorbuscado.nombre, precio: licorbuscado.precio, unidades: 1, subtotal: licorbuscado.precio, stock: licorbuscado.stock })
            }
            localStorage.setItem("carrito", JSON.stringify(carrito))

            const Toast = Swal.mixin({
                toast: true,
                position: "center-end",
                target: "body",
                showConfirmButton: false,
                color: "white",
                background: "#041240",
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Producto agregado correctamente'
            })
        }
    })

