# Resumo das Funções

Este projeto contém uma coleção de funções JavaScript para realizar diferentes operações em arrays. Cada função tem uma finalidade específica e pode ser utilizada individualmente ou em conjunto para atender a diferentes necessidades.

A seguir, estão listadas as funções disponíveis neste projeto:

## Funções Disponíveis

### 1. `criarArrayAleatorio(tamanho, min, max)`

Esta função cria um array aleatório com `tamanho` elementos, onde cada elemento está dentro do intervalo especificado por `min` e `max`.

### 2. `questao1(entrada)`

Esta função verifica se uma `entrada` fornecida é um array e exibe uma mensagem indicando se é um array ou não.

### 3. `questao2(entrada)`

Esta função retorna uma cópia do array `entrada` fornecido.

### 4. `questao3(entrada = 1)`

Esta função retorna os primeiros `n` elementos de um array aleatório.

### 5. `questao4(entrada = 24)`

Esta função retorna os últimos `n` elementos de um array aleatório.

### 6. `questao5(entrada)`

Esta função converte um array em uma string, onde os elementos são separados por vírgulas.

### 7. `questao6(entrada)`

Esta função adiciona um traço (`-`) entre dois números pares consecutivos em uma string.

### 8. `questao7(entrada)`

Esta função encontra o item mais frequente em um array.

### 9. `questao8(entrada)`

Esta função remove itens duplicados de um array, ignorando a diferenciação entre maiúsculas e minúsculas.

### 10. `questao9(array1, array2)`

Esta função calcula a soma dos valores de índice individual de dois arrays fornecidos.

### 11. `questao10()`

Esta função adiciona elementos de um array em outro array.

## Como Utilizar

Cada função está definida em um arquivo JavaScript separado. Para utilizá-las, siga os passos abaixo:

1. Clone o repositório ou faça o download dos arquivos.
2. Importe a função desejada em seu arquivo JavaScript ou módulo Node.js usando `require`.
3. Chame a função e forneça os argumentos necessários.

Exemplo de uso:

```javascript
const script = require('./caminho/para/o/arquivo.js');

const entrada = [1, 2, 3, 4, 5];
script.questao1(entrada);
