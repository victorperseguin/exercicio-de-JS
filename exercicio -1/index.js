function calcularFatorial (numero ) {
  let resultado = 1;

  for(let i =1; i<= numero; i++) {
    console.log('o valor de i é: '+ i);
    resultado *=i;
    console.log('o valor de resultado ' + resultado);
  }
  return resultado;
}

function imprimirFatorial(numero ) {
  const fatorial = calcularFatorial(numero)
  console.log('o fatorial de ${numero} é ${fatorial}');
}
const numero = 5;
imprimirFatorial(numero);
