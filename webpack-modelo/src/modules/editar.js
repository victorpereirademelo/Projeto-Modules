const { filtrar } = require('./filtrar')

const editarPost = id => {
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const botaoEditar = document.getElementById('botaoEditar');

    const postParaEditar = JSON.parse(localStorage.getItem("posts")).find(post => id === post.id)

    titulo.value = postParaEditar.title;
    descricao.value = postParaEditar.body;

    botaoEditar.onclick = () => {

        $('#exampleModal1').modal('hide');

        if (!titulo.value && !descricao.value) {
            alert('Titulo e Descrição Inválidos');
            return;
        }
        if (!titulo.value) {
            alert('Titulo Inválido');
            return;
        }
        if (!descricao.value) {
            alert('Descrição Inválida');
            return;
        }

        const obj = {
            id: id,
            title: titulo.value,
            body: descricao.value,
        };

        const novoPost = JSON.parse(localStorage.getItem("posts")).map(post => {
            if (post.id === obj.id) {
                return obj;
            }
            return post;
        });

        localStorage.setItem("posts", JSON.stringify(novoPost));
        filtrar();
        id = 0;
    };
};

module.exports.editarPost = editarPost;
