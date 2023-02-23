// llamo al elemento caja y lo guardo en una variable

const caja = document.getElementById("caja");

// creo el evento mouseover y cuando se realiza, la caja cambia a color verde

caja.addEventListener("mouseover", () => {
  caja.className = "caja caja--verde";
});

// creo el evento mouseout y cuando se realiza, la caja cambia a color azul

caja.addEventListener("mouseout", () => {
  caja.className = "caja caja--azul";
});
