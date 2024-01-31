const estaAprovado = true;

if (estaAprovado === true) {
    console.log('aprovado');
}

if ('0' === 0) { //O sempre correto usar os === para comparação 
    console.log('passou na comparação');
} else {
    console.log('Não passou na comparação');
}

const idadeMinima = 18;
const idadeEstudante =16;

if (idadeEstudante >= idadeMinima) {
    console.log('Não precisa de autorização');
} else {
    console.log('Precisa de autorização');
}