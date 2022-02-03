const renderizacaoDeTabela = json => {
    const tabela = document.querySelector('#tabela');
    let html = '';

    json.forEach(dado => {
        html += `
            <tr>
                <td>${dado.id}</td>
                <td class="ellipsis">${dado.title}</td>
                <td class="text-end">
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle ajustar-botao" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal1" onclick="editarPost(${dado.id})">Editar</a>
                  <a class="dropdown-item adjust-remove" href="#" data-toggle="modal" data-target="#exampleModal2" onclick="excluirPost(${dado.id})">Remover</a>
                </div>
                </td>
            </tr>
                `
    });

    if (!json.length) {
        html += '<tr><td colspan="3" style="text-align: center;">Nenhuma guia encontrada!</td></tr>';
    }

    tabela.innerHTML = html;
};

module.exports = { renderizacaoDeTabela };
