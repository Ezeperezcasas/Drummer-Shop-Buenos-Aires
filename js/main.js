// VARIABLES GLOBALES 

let descuento = 7;
let producto = 100;
let cant;
let opcion;


// FUNCIONES 


const realizarCompra = (cant) => {
    if(descuento <= cant) {
        console.log(` Felicitaciones!! Usted compro ${cant} unidades y tiene un descuento.`);

    } else {
        console.log(`Su compra de ${cant} unidades no es suficiente para acceder al descuento.`);
    }

}

const totalCompra = (cant) => {
    console.log(`El total de su compra es de $ ${cant * producto}`)
}

// MENU INTERACTIVO


do {
    opcion = Number(prompt('Ingrese la opcion deseada:\n\n1 - Realizar una compra\n2 - Valor final\n3 - Salir'));
    
    switch (opcion) {
        case 1:
            cant = Number(prompt('Ingrese la cantidad de unidades que desea comprar'));
            realizarCompra(cant);
            break;
       
        case 2:
            totalCompra(cant);
            break;
           
        case 3:
            alert('Gracias por su visita');
            break;
    
        default:
            alert('Esta opcion no es valida');
            break;
    }

} while(opcion !== 3); 



/* ESTOY SIMULANDO UNA COMPRA DE MI TIENDA ONLINE, EN DONDE EL CLIENTE TOCANDO EL NUMERO 1 REALIZA UNA COMPRA => SI COMPRA 7 O MAS UNIDADES, LE APARECE POR CONSOLA UN MENSAJE DICIENDO "Felicitaciones!! Usted compro X unidades y tiene un descuento.", SI LA COMPRA ES UN NUMERO MENOR A 7, EL MENSAJE POR CONSOLA LE DICE "Su compra de X unidades no es suficiente para acceder al descuento."
UNA VEZ FINALIZADA LA COMPRA PUEDE OPTAR POR SABER EL VALOR FINAL DE SU COMPRA TOCANDO EL NUMERO 2 => Y POR CONSOLA LE APARECE EL VALOR FINAL QUE ES LA CANTIDAD DE PRODUCTOS QUE ELIGIO EL CLIENTE POR EL VALOR DEL PRODUCTO QUE YO LE ASIGNE (100) 
Y TOCANDO LA OPCION 3 SALE DEL CICLO Y LE APARECE UN MENSAJE DICIENDO "GRACIAS POR SU VISITA"*/