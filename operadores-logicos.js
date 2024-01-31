const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

//if (notaFinal < 7 || faltas > 4) {
if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado');
} else {
    console.log('Não foi reprovado por faltas')
}

if (faltas >= 2 && !advertencias) {
    console.log('recebeu bonus')    
} else {
    console.log('não recebeu bonus')  
}

