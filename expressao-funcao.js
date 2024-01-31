const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

/* hoisting e quando o cosole sempre tem que ir depois do bloco da função declarada senao apresenta o erro
"ReferenceError: Cannot access 'estudanteReprovou' before initialization" por não conseguir acessar o bloco pos ele esta declarado depois */