const axios = require('axios');
const { renderizacaoDeTabela } = require('./renderizar');

const dadosInicial = () => {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then(json => {
            setDados(json.data);
            renderizacaoDeTabela(json.data);
        });
};

const setDados = json => localStorage.setItem("posts", JSON.stringify(json));

const dadosMutavel = () => JSON.parse(localStorage.getItem("posts"));

module.exports = { dadosInicial, dadosMutavel };
