


alert("Bienvenido a la mejor pagina donde podras comprar tu celular y los ultimos juegos para consolas")

let usuario;

let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    alert(`Bienvenido ${usuario}`);


} else {
    usuario = prompt("Ingrese el usuario");
    sessionStorage.setItem("usuario", usuario);
    alert("Eres nuevo, Bienvenido");
}

const resta = (a, b) => a - b;
const suma = (a, b) => a + b;
const iva = valor => valor * 0.19;

const celularesStock = [
    { id: 1, nombre: "Apple", precio: 1000, descuento: 200, img: "" , descrip: "" },
    { id: 2, nombre: "Samsung", precio: 700, descuento: 100, img: "" , descrip: "" },
    { id: 3, nombre: "Xiaomi", precio: 490, descuento: 70, img: "" , descrip: "" },
];

const juegosStock = [
    {
        id: 1, nombre: "Call of duty", precio: 200, descuento: 30, pesogb: 15, img: "imagenes/modernw.jpg",
        descrip: `Call of Duty: Modern Warfare II es un videojuego de disparos en
        primera persona desarrollado
        por Infinity Ward y publicado por Activision, lanzandose para PlayStation 4,
        PlayStation 5,
        Xbox One, Xbox Series X y Series S y Microsoft Windows`
    },
    {
        id: 2, nombre: "God of War", precio: 190, descuento: 28, pesogb: 10, img: "imagenes/godofwar.jpeg",
        descrip: `God of War: Ragnarök es un videojuego de acción y aventuras
        desarrollado por Santa Monica
        Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el
        9 de
        noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer
        lanzamiento
        entre generaciones de la serie.` },
    {
        id: 3, nombre: "OverWatch", precio: 220, descuento: 35, pesogb: 16, img: "imagenes/overwatch.jpg",
        descrip: `Overwatch 2 es un videojuego de disparos en primera persona. Fue
        desarrollado y publicado por
        Blizzard Entertainment. Es una secuela del hero shooter de 2016 Overwatch.` },
    {
        id: 4, nombre: "Fifa23", precio: 250, descuento: 40, pesogb: 5, img: "imagenes/fifa.jpeg",
        descrip: `FIFA 23 es un videojuego de simulación de fútbol publicado por
        Electronic Arts. Es la
        trigésima y última entrega de la serie FIFA desarrollada por EA Sports y lanzada en
        todo el
        mundo el 30 de septiembre de 2022 para PC, Nintendo Switch, PlayStation 4,
        PlayStation 5,
        Xbox One, Xbox Series X/S y Google Stadia.` },
    {
        id: 5, nombre: "EvilWest", precio: 150, descuento: 18, pesogb: 12, img: "imagenes/evilwest.jpg",
        descrip: `Evil West es un próximo videojuego de disparos en tercera persona
        desarrollado por Flying
        Wild Hog y publicado por Focus Entertainment. El juego se lanzará el 22 de noviembre
        de 2022
        para Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S` },
    {
        id: 6, nombre: "SpiderMan", precio: 280, descuento: 60, pesogb: 8, img: "imagenes/spiderman.jpg",
        descrip: `Marvel's Spider-Man: Miles Morales es un videojuego de acción y
        aventuras desarrollado por
        Insomniac Games y publicado por Sony Interactive Entertainment para PlayStation 4 y
        PlayStation 5. Está basado en el superhéroe de Marvel Comics Miles Morales.` },
];


let carrito = [];

const tienda = document.getElementById("tienda");

function ponerproductodom(juegosStock, tienda) {
    juegosStock.forEach((p) => {
        let producto = document.createElement("div");
        producto.classList.add("col");

        producto.innerHTML = `
        <div class="card h-100 border-danger animate__animated animate__bounceInRight">
             <img src="${p.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><strong>${p.nombre}</strong></h5>
                <p class="card-text">${p.descrip}</p>
                <p> ${p.precio} USD</p>
                <p>${p.descuento} USD</p>
                <p>${p.pesogb} Peso GB</p>
                <button class="buttoncompra" id="${p.id}">Añadir al carrito</button>
            </div>
        </div>
        `;

        tienda.appendChild(producto);

        producto.querySelector("button").addEventListener("click", () => {
            agregarproductoscarro(p.id);
        })
    });
};

let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", () => {
    tienda.innerHTML = "";
    ponerproductodom(juegosStock, tienda);
});

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", () => {
    tienda.innerHTML = "";

    let mensaje = "";
    juegosStock.forEach(juego => {
        mensaje += `
        ID: ${juego.id}
      Nombre: ${juego.nombre}
      `;
    });
    alert(`
    Juegos disponibles:
    ${mensaje}
    `);

    let dineroDisponible2 = parseInt(prompt("Con cuanto dinero dispones? te recomendamos tus mejores opciones"));

    const filt = document.getElementById("filtro");

    let recomendacion;

    if (dineroDisponible2 > 150) {
        let filtrados2 = juegosStock.filter(juego => juego.precio < dineroDisponible2);
        let mensaje2 = "";
        filtrados2.forEach((juego) => {
            recomendacion = document.createElement("div");
            recomendacion.classList.add("col");
            tienda.innerHTML = "";
            ponerproductodom(filtrados2, tienda);

            mensaje2 += `
        Nombre: ${juego.nombre}
        Precio: ${juego.precio} USD
        Tamaño: ${juego.pesogb} gb
        `;
        });
        alert(`
    los Juegos Recomendados para ti:
    ${mensaje2}
    `);
    } else {
        recomendacion = document.createElement("div");
        recomendacion.classList.add("col");
        tienda.innerHTML = "";
        recomendacion.innerHTML = `
        <div class="card h-100 border-danger animate__animated animate__bounceInRight">
            <div class="card-body">
                Con tu dinero, no te alcanza para ningun juego
            </div>
        </div>
        `;
        filt.append(recomendacion);
    };

});

let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", () => {

    tienda.innerHTML = "";
    let tipojue = prompt("ingresa el juego que escogiste. Recuerda => call of duty, god of war, overwatch, fifa23, evilwest, spiderman, Escibe ESC para salir");
    alert("recuerda que el impuesto es del 19% al precio publicado");

    while (tipojue != "ESC") {
        switch (tipojue) {
            case "call of duty":

                alert("El precio del Juego Call Of Duty es de 200 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 30 USD");

                let decisioncod = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto1 = juegosStock[0].precio;
                let descuento1 = juegosStock[0].descuento;

                if (decisioncod.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto1, iva(precioProducto1)), descuento1);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisioncod.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto1, iva(precioProducto1));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            case "god of war":
                alert("El precio del Juego god of war es de 190 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 28 USD");

                let decisiongod = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto2 = juegosStock[1].precio;
                let descuento2 = juegosStock[1].descuento;

                if (decisiongod.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto2, iva(precioProducto2)), descuento2);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisiongod.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto2, iva(precioProducto2));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            case "overwatch":
                alert("El precio del Juego overeatch es de 220 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 35 USD");

                let decisionove = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto3 = juegosStock[2].precio;
                let descuento3 = juegosStock[2].descuento;

                if (decisionove.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto3, iva(precioProducto3)), descuento3);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionove.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto3, iva(precioProducto3));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }

                break;

            case "fifa23":
                alert("El precio del Juego FIFA23 es de 250 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 40 USD");

                let decisionfif = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto4 = juegosStock[3].precio;
                let descuento4 = juegosStock[3].descuento;

                if (decisionfif.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto4, iva(precioProducto4)), descuento4);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionfif.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto4, iva(precioProducto4));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            case "evilwest":
                alert("El precio del Juego Evilwest es de 150 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 18 USD");

                let decisionevi = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto5 = juegosStock[4].precio;
                let descuento5 = juegosStock[4].descuento;

                if (decisionevi.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto5, iva(precioProducto5)), descuento5);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionevi.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto5, iva(precioProducto5));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            case "spiderman":
                alert("El precio del Juego Spiderman es de 280 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 60 USD");

                let decisionspi = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto6 = juegosStock[5].precio;
                let descuento6 = juegosStock[5].descuento;

                if (decisionspi.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto6, iva(precioProducto6)), descuento6);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionspi.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto6, iva(precioProducto6));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            default:
                alert("escribelo bien porfavor");
                break;
        }

        tipojue = prompt("ingresa el juego que escogiste. Disponibles => call of duty, god of war, overwatch, fifa23, evilwest, spiderman. O presiona ESC para salir");
    }
})

let botonce = document.getElementById("botoncel");
botonce.addEventListener("click", () => {

    let mensaje = "";
    celularesStock.forEach(celular => {
        mensaje += `
      ID: ${celular.id}
      Nombre: ${celular.nombre}
      `;
    });
    alert(`
    Celulares disponibles:
    ${mensaje}
    `);

    let dineroDisponible = parseInt(prompt("Con cuanto dinero dispones? te recomendamos tus mejores opciones"));
    let filtrados = celularesStock.filter(celu => celu.precio < dineroDisponible);
    let mensaje2 = "";
    filtrados.forEach((celu) => {
        mensaje2 += `
        ID: ${celu.id}
        Nombre: ${celu.nombre}
        Precio: ${celu.precio} USD
        `;
    });
    alert(`
    Celulares Recomendados para ti:
    ${mensaje2}
    `);


    let tipocel = prompt("ingrese la marca de celular que escogiste, Escibe ESC para salir");
    alert("recuerda que el impuesto es del 19% al precio publicado");

    while (tipocel != "ESC") {
        switch (tipocel) {
            case "apple":
                alert("El precio del Apple es de 1000 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 200 USD");

                let decisionapple = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto = celularesStock[0].precio;
                let descuento = celularesStock[0].descuento;

                if (decisionapple.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionapple.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto, iva(precioProducto));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }

                break;

            case "samsung":
                alert("El precio del Samsung es de 700 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 100 USD");

                let decisionsamsung = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto1 = celularesStock[1].precio;
                let descuento1 = celularesStock[1].descuento;

                if (decisionsamsung.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto1, iva(precioProducto1)), descuento1);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionsamsung.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto1, iva(precioProducto1));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }

                break;

            case "xiaomi":
                alert("El precio del Xiaomi es de 490 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 70 USD");

                let decisionxiaomi = prompt("Digita, si o no quieres comprarlo ya mismo");
                let precioProducto2 = celularesStock[2].precio;
                let descuento2 = celularesStock[2].descuento;

                if (decisionxiaomi.toUpperCase() === "SI") {

                    let nuevoPrecio = resta(suma(precioProducto2, iva(precioProducto2)), descuento2);
                    alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);

                } else if (decisionxiaomi.toUpperCase() === "NO") {

                    let precioBase = suma(precioProducto2, iva(precioProducto2));
                    alert(`el precio del producto te queda en: ${precioBase} USD`);

                } else {
                    alert("no digistaste si o no");
                }
                break;

            default:
                alert("coloca bien la marca");
                break;
        }

        tipocel = prompt("ingrese la marca de celular que desea, solo => apple samsung xiaomi. O escriba ESC para salir");
    }

});
