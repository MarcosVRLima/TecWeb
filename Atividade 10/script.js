function modal(type, id){
    document.getElementById("formModal").reset();
    var title = document.querySelector("#exampleModalLabel");
    title.textContent = type;
    var button = document.querySelector("#formButton");
    button.textContent = type;
    var crud = document.querySelector("#type");
    crud.value = type;
    var idUser = document.querySelector("#id");
    idUser.value = id;

    if(type == "Atualizar"){
        var nameUser = document.getElementById(("nameUser" + id)).value;
        var emailUser = document.getElementById(("emailUser" + id)).value;
        document.getElementById("formModal").name.value = nameUser;
        document.getElementById("formModal").email.value = emailUser; 
    }
}

function alerts(message, type, icon){
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    alertPlaceholder.innerHTML = "";
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible mt-3" role="alert">`,
    `   <div><i class="fas fa-${icon} fa-md"></i> ${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

async function request(config, type){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                if(type == 'Listar'){
                    var response = JSON.parse(xhr.responseText).data;
                }else if(type == 'Atualizar'){
                    var response = JSON.parse(xhr.responseText);
                }
                console.log(response);
                resolve(response);
            }else if(xhr.status === 201){
                console.log(JSON.parse(xhr.responseText));
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(new Error('Erro de conexão'));
        };

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(config.data));
    });
}

document.getElementById("formModal").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    var formulario = new FormData(event.target); // Cria um objeto FormData com os dados do formulário
  
    // Acessando os valores dos campos individualmente
    var name = formulario.get('name').trim();
    name = name.split(" ");
    if(name.length < 2){
        name.push('');
    }
    var email = formulario.get("email").trim();
    var type = formulario.get("type").trim();
    var id = formulario.get("id").trim();

    var data = {
        'first_name': name[0],
        'last_name': name[1],
        'email': email,
    }

    switch(type){
        case "Postar":
            create(data, type);
            break;
        case "Atualizar":
            data.id = parseInt(id);
            console.log(id);
            update(data, type);
    }

    var button = document.querySelector("#fecharModal");
    button.click();
});


//mostrar response
function showResponse(response){

    if(!Array.isArray(response)){
        response = [response];
    }

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
        var inputs = [element.id, element.first_name + ' ' + element.last_name, element.email, 'bot'];

        row.innerHTML = 
        "<div class='col'>" +  inputs[0]
        + "</div><div class='col'>" + inputs[1] + "<input type='text' value='" + inputs[1] + "' id='nameUser" + inputs[0] + "' hidden>"
        + "</div><div class='col'>" + inputs[2] + "<input type='text' value='" + inputs[2] + "' id='emailUser" + inputs[0] + "' hidden>"
        + "</div><div class='col'>" + "<button class='btn btn-warning me-2' onclick='modal(" + '"Atualizar", ' + inputs[0] +  ")' data-bs-toggle='modal' data-bs-target='#exampleModal'><i class='fas fa-pencil fa-lg'></i></button><button class='btn btn-danger' onclick='modal(" + '"Deletar"' + ")'  data-bs-toggle='modal' data-bs-target='#exampleModal'><i class='fas fa-trash fa-lg'></i></button>"
        + "</div>";
        
        main.appendChild(row);
    });
}


// CRUD
async function list(){
    const config = {
        'method': 'GET', 
        'url': 'https://reqres.in/api/users',
    };

    try {
        var response = await request(config, 'Listar');
        showResponse(response);
        alerts("Listagem concluída com sucesso!", "success", "check");
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

async function create(data, type){
    const config = {
        'method': 'POST', 
        'url': 'https://reqres.in/api/users',
        'data': data
    };

    try {
        var response = await request(config, type);
        //console.log('Requisição concluída: ', response);
        showResponse(response);
        alerts("Adição concluída com sucesso!", "success", "check");
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

async function update(data, type){
    const config = {
        'method': 'PUT', 
        'url': 'https://reqres.in/api/users/' + data.id,
        'data': data
    };

    try {
        var response = await request(config, type);
        showResponse(response);
        alerts("Atualização concluída com sucesso!", "success", "check");
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}