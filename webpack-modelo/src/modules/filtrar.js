const { renderizacaoDeTabela } = require('./renderizar');

function filtrar() {
    const pesquisa = document.getElementById('pesquisa').value;
    const pesquisaNormalizada = pesquisa.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    if (!pesquisaNormalizada) {
        renderizacaoDeTabela(JSON.parse(localStorage.getItem("posts")));
    }

    const dadosFiltrados = JSON.parse(localStorage.getItem("posts")).filter(dados => {
        const tituloNormalizado = dados.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (tituloNormalizado.includes(pesquisaNormalizada)) {
            return true;
        }

        return false;
    });

    renderizacaoDeTabela(dadosFiltrados);
}

module.exports.filtrar = filtrar;
