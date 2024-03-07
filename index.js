const string = "Olá, Mundo!";
const stringVetor = string.split('');
let stringInvertida = [];

for (let i=0; i < stringVetor.length; i++) {
  stringInvertida[i] = stringVetor[stringVetor.length-1-i];
}

console.log(stringInvertida.join(''));