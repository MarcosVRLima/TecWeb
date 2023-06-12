// Função para criar um array aleatório com números dentro de um intervalo definido
criaArrayAleatorio = function(tamanho, min, max) {
    var array = [];
  
    for (var i = 0; i < tamanho; i++) {
      var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      array.push(numeroAleatorio);
    }
  
    return array;
}

// Exporta a função criaArrayAleatorio para uso em outros módulos
exports.criarArrayAleatorio = criaArrayAleatorio;
  
// Função para verificar se uma entrada é um array
exports.questao1 = function(entrada) {
    if (Array.isArray(entrada)) {
        console.log("É um array!");
    } else {
        console.log("Não é um array!");
    }
}

// Função para clonar um array
exports.questao2 = function(entrada){
    return entrada.slice(); // Utiliza o método slice() para criar uma cópia do array
}

// Função para retornar os primeiros `n` elementos de um array aleatório
exports.questao3 = function(entrada = 1){
    var arrayAleatorio = criaArrayAleatorio(25, 0, 100)
    console.log(arrayAleatorio);
    var array = [];
    for(var i = 0; i < entrada; i++){
        array.push(arrayAleatorio[i]);
    }
    return array;
}

// Função para retornar os últimos `n` elementos de um array aleatório
exports.questao4 = function(entrada = 24){
    var arrayAleatorio = criarArrayAleatorio(25, 0, 100)
    console.log(arrayAleatorio);
    var array = [];
    for(var i = entrada; i < 25; i++){
        array.push(arrayAleatorio[i]);
    }
    return array;
}

// Função para converter um array em uma string separada por vírgulas
exports.questao5 = function(entrada){
    return entrada.join();
}

// Função para adicionar um traço '-' entre dois números pares consecutivos em uma string
exports.questao6 = function(entrada){
    entrada = entrada.toString();
    entrada = entrada.split('');
    var traco = 0;

    for(var i = 0; i < entrada.length; i++){
        if(entrada[i] % 2 == 0){
            traco++;
        }else{
            traco = 0;
        }

        if(traco == 2){
            entrada.splice(i, 0, '-');
            traco = 0;
        }
    }
    entrada = entrada.join();
    entrada = entrada.replace(/,/g, "");
    return entrada;
}

// Função para encontrar o item mais frequente em um array
exports.questao7 = function(entrada){
    var frequencia = {};
    var itemMaisFrequente;
    var frequenciaMaxima = 0;

    for(var i = 0; i < entrada.length; i++){
        var item = entrada[i];
        frequencia[item] = (frequencia[item] || 0) + 1;

        if(frequencia[item] > frequenciaMaxima){
            itemMaisFrequente = item;
            frequenciaMaxima = frequencia[item];
        }
    }

    return itemMaisFrequente;
}

// Função para remover itens duplicados de um array, ignorando a diferenciação entre maiúsculas e minúsculas
exports.questao8 = function(entrada){
    var array = entrada.filter((item, index) => {
        return entrada.indexOf(item.toLowerCase()) === index;
    });

    return array;
}

// Função para calcular a soma dos valores de índice individual de dois arrays
exports.questao9 = function(array1, array2){
    var array = [];

    if(array1.length > array2.length){
        for(var i = array2.length; i < array1.length;i++){
            array2.push(0);
        }
    }else if(array1.length < array2.length){
        for(var i = array1.length; i < array2.length;i++){
            array1.push(0);
        }
    }

    for(let i = 0; i < array1.length; i++){
        var soma = array1[i] + array2[i];
        array.push(soma);
    }

    return array;
}

// Função para adicionar elementos de um array em outro array
exports.questao10 = function(){
    var vetorPilha = [1,2,3,4,5];
    var vetorAdiciona = [6,7,8,9,10];

    for(var i = 0; i < vetorAdiciona.length;i++){
        vetorPilha.push(vetorAdiciona[i]);
    }

    return vetorPilha;
}
