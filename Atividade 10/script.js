function modal(type){
    //alert(type);
    var title = document.querySelector("#exampleModalLabel");
    title.textContent = type;
    var button = document.querySelector("#formButton");
    button.textContent = type;
    var crud = document.querySelector("#type");
    crud.value = type;
}

function request(config){
    console.log(config);

    // Enviando a requisição para a API
    var xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // Faça aqui o que desejar com os dados da API
            showResponse(response.data);
        } else {
            console.error('Erro ao consultar a API. Código de status:', xhr.status);
            // Faça aqui o tratamento de erros, se necessário
        }
    };

    xhr.onerror = function() {
        console.error('Erro ao fazer a requisição à API.');
        // Faça aqui o tratamento de erros, se necessário
    };

    xhr.send();
}


document.getElementById("formModal").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    var formulario = new FormData(event.target); // Cria um objeto FormData com os dados do formulário
  
    // Acessando os valores dos campos individualmente
    //var email = formulario.get("email");
    //var type = formulario.get("type");
    var method = 'GET';
    var url = 'https://reqres.in/api/users/1';
    
    const config = {
        'method': method, 
        'url': url
    };

    request(config);

    var button = document.querySelector("#fecharModal");
    button.click();
});


//mostrar response
function showResponse(response){
    if(!Array.isArray(response)){
        response = [response];
    }
    
    console.log(response);
    var main = document.getElementById("main");
    main.removeAttribute("hidden");

    while(main.children.length > 1){
        main.removeChild(main.lastChild);
    }

    response.forEach(element => {
        var row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('border');
        row.classList.add('p-2');

        var inputs = [element.id, element.first_name + ' ' + element.last_name, element.email];

        inputs.forEach(input =>{
            var col = document.createElement("div");
            col.classList.add("col");
            var text = document.createElement('h6');
            text.textContent = input;
            col.appendChild(text)
            row.appendChild(col);
        });
        
        main.appendChild(row);
    });
}


// CRUD
function list(){
    const config = {
        'method': 'GET', 
        'url': 'https://reqres.in/api/users'
    };

    request(config);
}
