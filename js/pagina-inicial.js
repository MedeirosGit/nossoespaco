var itens = document.querySelector(".itens");

function mostrarMenu() {
  if (itens.style.display == "none") {
    itens.style.display = "block";
  } else {
    itens.style.display = "none";
  }
}
