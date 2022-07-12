class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

function comprar(nombre,email,tel,carrito) {
  let cant = carrito.reduce((acc, item) => item.precio + acc, 0);
  alert("Gracias " + 
          nombre + 
          " por tu compra. \n El total es: $" + cant);
}


let productos = [
  new Producto(100,"Sonor SQ1",160000,"tambores"),
  new Producto(101,"Sonor Prolite",219000,"tambores"),
  new Producto(102,"Sonor Vintage",700000,"baterias"),
  new Producto(103,"Sonor SQ1",620000,"baterias"),
  new Producto(104,"Promark 5A",2610,"palillos"),
  new Producto(105,"Promark 5B",2500,"palillos"),
];


let categorias = ["tambores", "baterias", "palillos"];

let carrito = [];
let categoria = "";

while (categoria != "salir" && categoria != null) {
  let aux = categorias.join(", ");
  categoria = prompt(
    'Para comprar ingrese una categoria o "salir": \n('+ 
    aux +
    ")"
  );

  if (categoria != "salir" && categoria != null) {
    let productoPorCategoria = productos.filter(
      (item) => item.categoria == categoria
    );

    let seleccion = "";

    for (let i = 0; i < productoPorCategoria.length; i++) {
      seleccion += 
      "ID: " + 
      productoPorCategoria[i].id + 
      " Producto: " + 
      productoPorCategoria[i].nombre +  
      " Precio: " +  
      productoPorCategoria[i].precio + "\n";
    }
    let seleccionId = parseInt(
      prompt(
     "Escriba el id del producto que desea comprar: \n" + seleccion
      )
    );

    let productoParaCarrito = productoPorCategoria.find(
      (item) => item.id == seleccionId
    );

    if (productoParaCarrito) {
      carrito.push(productoParaCarrito);
    }  
  }
}


if(carrito.length > 0) {
  alert("Ingrese sus datos para finalizar la compra");
  let nombre = prompt("Ingrese su nombre");
  let email = prompt ("Ingrese su mail");
  let tel = prompt ("Ingrese su telefono");
  comprar(nombre, email, tel, carrito)

}
