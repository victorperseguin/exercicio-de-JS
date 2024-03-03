
const trocaCorAmarelo = document.getElementById("troca-cor");

const quadradoAzul = document.querySelector(".azul");

trocaCorAmarelo.addEventListener("click" , trocaCor);


function trocaCor() {

  quadradoAzul.classList.remove("azul");
  quadradoAzul.classList.add("amarelo");
}
