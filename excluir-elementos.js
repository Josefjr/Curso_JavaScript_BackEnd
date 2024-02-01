const notas = [10, 6, 8, 5.5, 10];

notas.pop();//essa função retira um elemento da lista a partir do metodo a seguir.

const media = (notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length;

console.log(media.toFixed(2));//o tofixed coloca a quantidade de casas numericas que vc que seguido comando das quantidades dentro dos parenteses
