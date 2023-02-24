// llamo al elemento caja y lo guardo en una variable

const caja = document.getElementById("caja");

// creo el evento mouseover y cuando se realiza, la caja cambia a color pink

caja.addEventListener("mouseover", () => {
  caja.className = "caja caja--pink";
});

// creo el evento mouseout y cuando se realiza, la caja cambia a color yellow

caja.addEventListener("mouseout", () => {
  caja.className = "caja caja--yellow";
});

// creo cards con imagenes, precios y nombre del producto
// creo array para productos
const productos = [
  { id: 1, nombre: "Churros", precio: 50, img: "churros.jpg" },
  { id: 2, nombre: "Cupcake", precio: 150, img: "cupcake.jpg" },
  { id: 3, nombre: "Medialuna", precio: 75, img: "manteca.jpg" },
  { id: 4, nombre: "Brownie", precio: 90, img: "brownie.jpg" },
];

// recorro el array con un for y muestro cada producto
for (const producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.classList.add("card");

  // creo los div , con el nombre y el precio del producto
  contenedor.innerHTML = `<img src ="./img/${producto.img}"  alt="${producto.nombre}" style = "width: 40%" />
  <div class = "container" >
  <h4><b> ${producto.nombre}</b></h4>
  <p>$${producto.precio}</b>
  </div> `;

  // agrego los divs al html
  document.body.appendChild(contenedor);
}
