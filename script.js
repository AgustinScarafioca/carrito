//Objetos productos
class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
    }
}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 5)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

console.log(productos)



//Formulario de usuario
/* class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
}

const formulario = document.getElementById("userForm")

const usuarios = []

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    let username= document.getElementById("userInput").value
    let email = document.getElementById("mailInput").value
    let password = document.getElementById("passwordInput").value
    const user = new User (username, email, password)
    usuarios.push(user)
    formulario.reset()
    console.log(usuarios)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
})

const usuariosJson = JSON.parse(localStorage.getItem("usuarios"))

const ultimoUsuario= usuariosJson.length

console.log(usuariosJson)

const usuarioExitoso = document.getElementById("userCheck")

if(usuariosJson!= ""){
    usuarioExitoso.innerHTML+=`
        <p> Bienvenido ${usuariosJson[0].username}</p>
    ` 
}
 */
//Codigo de productos y carrito



const divProductos = document.getElementById("divProductos")
const contenedorCarrito = document.getElementById("carritoContenedor")
const botonVaciar = document.getElementById("vaciarCarrito")

let carrito= []


productos.forEach(producto =>{
    divProductos.innerHTML += `
    <div class= "card p-5 m-2 w-25 bg-info" id= "card ${producto.id}">
        <p>${producto.name}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
        <button type="button" id="agregar${producto.id}" class="btn btn-secondary">Agregar a carrito</button>
    </div>
    `
    const boton= document.getElementById(`agregar${producto.id}`)

    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id ==prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id == prodId)
    const indice= carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    carrito.forEach((prod) => {
        const div =document.createElement("div")
        div.innerHTML = `
        <p> ${prod.name}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id=cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})">Eliminar del carrito</button>
        `
        contenedorCarrito.appendChild(div)
    })
}


const boton = document.getElementById(`agregar${productos.id}`)

/*
boton.addEventListener("click", () =>{
    Swal.fire({
        title: 'Carrito',
        text: 'Productos agregados:',
        footer: '<button>Finalizar compra</button>'
    })
})

productos.forEach(productos =>{
    document.getElementById(`agregar${productos.id}`).addEventListener("click", ()=>{
        Toastify({
            text: "Añadido a carrito",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "linear-gradient(to right, #020024, #1c9089)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    })
})
*/
