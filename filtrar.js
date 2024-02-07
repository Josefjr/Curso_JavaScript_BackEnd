/* Desafio: filtrando por nota
Após calcular a média das pessoas estudantes, precisamos mostrar quem está reprovado entre os seguintes
nomes: Ana, Marcos, Maria e Mauro. Temos as notas 7, 4.5, 8 e 7.5. 
Vamos partir da afirmação de que a média será 7, como já trabalhamos anteriormente.
 */

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];


/* Perceba que agora o callback não utiliza mais o primeiro parâmetro aluno.
Porém, lembre-se que as funções chamam os parâmetros por ordem, então,
não podemos simplesmente retirar da função um parâmetro que não é usado.
Precisamos mantê-lo para preservar a ordem do parâmetro.

Nesse caso, uma boa prática é substituir o nome por um underscore (_). 
Isso significa que estamos marcando o lugar do parâmetro não utilizado,
mas assinalamos que não o usamos e ele deve ser pulado para utilizar o correspondente. */
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);