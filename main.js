


alert("Bienvenido a la mejor pagina donde podras comprar tu celular y los ultimos juegos para consolas")

let nombre = prompt("ingrese su nombre");



if (isNaN(nombre)) {
    alert("bienvenido " + nombre);

    let Producto =  prompt("ingrese el producto que desee comprar, solo digite-> celulares o juegos");


    if(Producto.toUpperCase() === "CELULARES"){
        
        let tipocel = prompt("ingrese la marca de celular que desea, solo => apple samsung xiaomi");
        alert("recuerda que el impuesto es del 19% al precio publicado");

        while(tipocel != "ESC"){
            switch(tipocel){
                case "apple":
                    alert("El precio del Apple es de 1000 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 200 USD");

                    let decisionapple = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta = (a, b) => a - b;
                    const suma = (a, b) => a + b;
                    const iva = valor => valor * 0.19;
                    let precioProducto = 1000;
                    let descuento = 200;

                    if(decisionapple.toUpperCase() === "SI"){

                        let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionapple.toUpperCase() === "NO"){

                        let precioBase = suma(precioProducto, iva(precioProducto));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }

                    break;
        
                 case "samsung":
                    alert("El precio del Samsung es de 700 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 100 USD");

                    let decisionsamsung = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta1 = (a, b) => a - b;
                    const suma1 = (a, b) => a + b;
                    const iva1 = valor => valor * 0.19;
                    let precioProducto1 = 700;
                    let descuento1 = 100;
                    
                    if(decisionsamsung.toUpperCase() === "SI"){

                        let nuevoPrecio = resta1(suma1(precioProducto1, iva1(precioProducto1)), descuento1);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionsamsung.toUpperCase() === "NO"){

                        let precioBase = suma1(precioProducto1, iva1(precioProducto1));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }

                    break;
                
                case "xiaomi":
                    alert("El precio del Xiaomi es de 490 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 70 USD");

                    let decisionxiaomi = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta2 = (a, b) => a - b;
                    const suma2 = (a, b) => a + b;
                    const iva2 = valor => valor * 0.19;
                    let precioProducto2 = 490;
                    let descuento2 = 70;
                    
                    if(decisionxiaomi.toUpperCase() === "SI"){

                        let nuevoPrecio = resta2(suma2(precioProducto2, iva2(precioProducto2)), descuento2);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionxiaomi.toUpperCase() === "NO"){

                        let precioBase = suma2(precioProducto2, iva2(precioProducto2));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }


                    break;
                
                default:
                    alert("coloca bien la marca");
                    break;
            }

            tipocel = prompt("ingrese la marca de celular que desea, solo => apple samsung xiaomi"); 
        }

    }else if(Producto.toUpperCase() === "JUEGOS"){

        let tipojue = prompt("ingrese el nombre del juego que desea. Disponibles => call of duty, god of war, overwatch, fifa23, evilwest, spiderman");
        alert("recuerda que el impuesto es del 19% al precio publicado");

        while(tipojue != "ESC"){
            switch(tipojue){
                case "call of duty":
                    
                    alert("El precio del Juego Call Of Duty es de 200 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 30 USD");

                    let decisioncod = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta1 = (a, b) => a - b;
                    const suma1 = (a, b) => a + b;
                    const iva1 = valor => valor * 0.19;
                    let precioProducto1 = 200;
                    let descuento1 = 30;
                    
                    if(decisioncod.toUpperCase() === "SI"){

                        let nuevoPrecio = resta1(suma1(precioProducto1, iva1(precioProducto1)), descuento1);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisioncod.toUpperCase() === "NO"){

                        let precioBase = suma1(precioProducto1, iva1(precioProducto1));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }
                    break;
        
                 case "god of war":
                    alert("El precio del Juego god of war es de 190 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 28 USD");

                    let decisiongod = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta2 = (a, b) => a - b;
                    const suma2 = (a, b) => a + b;
                    const iva2 = valor => valor * 0.19;
                    let precioProducto2 = 190;
                    let descuento2 = 28;
                    
                    if(decisiongod.toUpperCase() === "SI"){

                        let nuevoPrecio = resta2(suma2(precioProducto2, iva2(precioProducto2)), descuento2);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisiongod.toUpperCase() === "NO"){

                        let precioBase = suma2(precioProducto2, iva2(precioProducto2));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }
                    break;
                
                case "overwatch":
                    alert("El precio del Juego overeatch es de 220 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 35 USD");

                    let decisionove = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta3 = (a, b) => a - b;
                    const suma3 = (a, b) => a + b;
                    const iva3 = valor => valor * 0.19;
                    let precioProducto3 = 220;
                    let descuento3 = 35;
                    
                    if(decisionove.toUpperCase() === "SI"){

                        let nuevoPrecio = resta3(suma3(precioProducto3, iva3(precioProducto3)), descuento3);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionove.toUpperCase() === "NO"){

                        let precioBase = suma3(precioProducto3, iva3(precioProducto3));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }

                    break;

                case "fifa23":
                    alert("El precio del Juego FIFA23 es de 250 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 40 USD");

                    let decisionfif = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta4 = (a, b) => a - b;
                    const suma4 = (a, b) => a + b;
                    const iva4 = valor => valor * 0.19;
                    let precioProducto4 = 250;
                    let descuento4 = 40;
                    
                    if(decisionfif.toUpperCase() === "SI"){

                        let nuevoPrecio = resta4(suma4(precioProducto4, iva4(precioProducto4)), descuento4);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionfif.toUpperCase() === "NO"){

                        let precioBase = suma4(precioProducto4, iva4(precioProducto4));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }
                    break;

                case "evilwest":
                    alert("El precio del Juego Evilwest es de 150 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 18 USD");

                    let decisionevi = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta5 = (a, b) => a - b;
                    const suma5 = (a, b) => a + b;
                    const iva5 = valor => valor * 0.19;
                    let precioProducto5 = 150;
                    let descuento5 = 18;
                    
                    if(decisionevi.toUpperCase() === "SI"){

                        let nuevoPrecio = resta5(suma5(precioProducto5, iva5(precioProducto5)), descuento5);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionevi.toUpperCase() === "NO"){

                        let precioBase = suma5(precioProducto5, iva5(precioProducto5));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }
                    break;

                 case "spiderman":
                    alert("El precio del Juego Spiderman es de 280 USD mas impuestos, pero si lo compras ya mismo tendras un descuento de 60 USD");

                    let decisionspi = prompt("Digita, si o no quieres comprarlo ya mismo");
                    const resta6 = (a, b) => a - b;
                    const suma6 = (a, b) => a + b;
                    const iva6 = valor => valor * 0.19;
                    let precioProducto6 = 280;
                    let descuento6 = 60;
                    
                    if(decisionspi.toUpperCase() === "SI"){

                        let nuevoPrecio = resta6(suma6(precioProducto6, iva6(precioProducto6)), descuento6);
                        alert(`el precio del producto te queda en: ${nuevoPrecio} USD`);
                        
                    }else if(decisionspi.toUpperCase() === "NO"){

                        let precioBase = suma6(precioProducto6, iva6(precioProducto6));
                        alert(`el precio del producto te queda en: ${precioBase} USD`);

                    }else{
                        alert("no digistaste si o no");
                    }
                      break;
                
                default:
                    alert("escribelo bien porfavor");
                    break;
            }

            tipojue = prompt("ingrese el nombre del juego que desea. Disponibles => call of duty, god of war, overwatch, fifa23, evilwest, spiderman"); 
        }

    }else{
        alert("Por favor lea bien las instrucciones anteriores");
    }


}else{
    alert("Ingrese un nombre valido");
}
