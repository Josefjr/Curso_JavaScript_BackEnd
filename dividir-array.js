const listaEstudante = [
'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const sala1 = listaEstudante.slice(0, listaEstudante.length / 2);
const sala2 = listaEstudante.slice(listaEstudante.length/2);

console.log(sala1);
console.log(sala2);

/* O método `slice()` em JavaScript é usado para extrair uma parte de uma string, array ou objeto sem modificar o original. Ele retorna uma cópia dos elementos selecionados.

A sintaxe geral do método `slice()` é a seguinte:

```javascript
array.slice(início, fim)
```

- `início`: Índice baseado em zero onde o corte começa. Se negativo, ele especifica um índice a partir do final do array/string.
- `fim`: Índice baseado em zero onde o corte termina. Se omitido, o `slice()` extrairá até o final do array/string. Se negativo, especifica um índice a partir do final do array/string.

Exemplos:

1. Em arrays:

```javascript
const array = [1, 2, 3, 4, 5];
const parteArray = array.slice(1, 3); // Retorna [2, 3]
```

2. Em strings:

```javascript
const string = "Olá, mundo!";
const parteString = string.slice(0, 4); // Retorna "Olá,"
```

3. Com índices negativos:

```javascript
const array = [1, 2, 3, 4, 5];
const parteArray = array.slice(-2); // Retorna [4, 5]
```

O método `slice()` é útil para criar subconjuntos de dados de arrays, strings ou objetos,
sem modificar os dados originais. Isso pode ser útil em várias situações, como na manipulação de dados,
formatação de strings, ou ao criar visualizações de dados específicas. */