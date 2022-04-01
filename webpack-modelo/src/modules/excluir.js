const { filtrar } = require('./filtrar');

const excluirPost = id => {
    const botaoExcluir = document.getElementById('botaoExcluir');

    botaoExcluir.addEventListener('click', () => {

        $('#exampleModal2').modal('hide');

        const deletarPost = JSON.parse(localStorage.getItem("posts")).filter(dados => id !== dados.id);

        localStorage.setItem("posts", JSON.stringify(deletarPost));
        filtrar();
        id = 0;
    });
};

module.exports.excluirPost = excluirPost;
