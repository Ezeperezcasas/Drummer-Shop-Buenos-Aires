
/* ---------------------------------------- CARRITO ---------------------------------------- */


const clickButton = document.querySelectorAll('.btn-dark') 
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
  btn.addEventListener('click',addToCarritoItem)
})

function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemCodigo = item.querySelector('.card-codigo').textContent;
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.card-price').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    codigo: itemCodigo,
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  
  addItemCarrito(newItem)
}

function addItemCarrito(newItem){

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Tu producto fue añadido al carrito',
    showConfirmButton: false,
    timer: 1500
  })

  const InputElemento = tbody.getElementsByClassName('input_elemento')

  for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemento[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }

carrito.push(newItem)
renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    <th scope="row">${item.codigo}</th>
      <td class="table_productos">
        <img class="imgSm" src=${item.img}>
        <h5 class="title">${item.title}</h5>
      </td>
      <td class="table_price"><p>${item.precio}</p></td>
      <td class="table_cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input_elemento">
        <button class= "delete btn btn-danger">x</button>
      </td>`

      tr.innerHTML = Content;
      tbody.append(tr)

      tr.querySelector(".delete").addEventListener('click',removeItemCarrito)
      tr.querySelector(".input_elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$",''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr =  buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  Swal.fire({
    position: 'top-center',
    icon: 'error',
    title: 'Tu producto fue eliminado del carrito',
    showConfirmButton: false,
    timer: 1500
  })

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

/* ---------------------------------------- FORMULARIO ---------------------------------------- */


let formulario;
let inputNombre;
let inputEmail;
let inputConsulta;

function inicializarElementos(){
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("input-nombre");
  inputEmail = document.getElementById("input-email");
  inputConsulta = document.getElementById("input-consulta");
}
inicializarElementos()

formulario.onsubmit = (event) => {
  event.preventDefault();
  console.log(inputNombre.value,inputEmail.value,inputConsulta.value)
  formulario.reset()
  
}

function enviarConsulta() {
  Swal.fire({
    title: 'Su consulta fue enviada',
    text: 'Desea continuar?',
    icon: 'success',
    confirmButtonText: 'Aceptar',
  });
}






