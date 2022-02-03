import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

const { dadosInicial, dadosMutavel } = require('./modules/data');
const { renderizacaoDeTabela } = require('./modules/renderizar');
const { filtrar } = require('./modules/filtrar')
const { excluirPost } = require('./modules/excluir');
const { editarPost } = require('./modules/editar');

const iniciar = () => {
    if (!dadosMutavel()) {
        dadosInicial();
        return;
    }

    renderizacaoDeTabela(dadosMutavel());
};

(() => {
    window.editarPost = editarPost;
    window.excluirPost = excluirPost;
    window.filtrar = filtrar;
})();

const pesquisa = document.getElementById('pesquisa');
botaoAtualizar.addEventListener('click', () => {
    pesquisa.value = '';
    dadosInicial();
});

iniciar();
