const notas = [10, 6, 8];

notas.push(7);//esse metodo empurra algo para dentro da lista mas sempre em ultimo se caso quera lugar especifico tera que manipular

const media = (notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length;

console.log(media);
