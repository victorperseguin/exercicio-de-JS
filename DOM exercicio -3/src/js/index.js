const quadradoPreto = document.querySelector(".preto");

quadradoPreto.addEventListener('click', () => {

  const classeAzul = quadradoPreto.classList.contains('azul');

  if(classeAzul) {
    quadradoPreto.classList.remove("azul");
  } else {
    quadradoPreto.classList.add("azul");
  }

});
