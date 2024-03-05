const linhaInput = document.querySelectorAll(".linha");

linhaInput.forEach(input => {


  input.addEventListener('change', () => {

    if (input.value !== "") {
      input.classList.add("verde")
      console.log("verde")

    } else {
      input.classList.remove("verde")
    }

    console.log(input);
    console.log(linhaInput);

  });
});
