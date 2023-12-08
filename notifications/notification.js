const API_URL = 'http://localhost:8080/products'

window.onload = (e) => {
    e.preventDefault();
    obterDados();
    validarProdutos();
}

async function obterDados() {
    try {
      const resposta = await fetch(API_URL);
  
      if (!resposta.ok) {
        throw new Error('Erro ao obter dados da API');
      }
  
      const dados = await resposta.json();
      console.log('Dados obtidos:', dados);
      return dados;

    } catch (erro) {
      console.error('Erro geral:', erro.message);
    }
}

async function validarProdutos() {
    const avisoVencimento = 15;
    const produtos = obterDados();

    estoque = produtos.quantity;
    minEstoque = 10;
    validade = new Date(produtos.expirationDate);
    var span = document.createElement('span');
    var lista = document.getElementById('lista');

    if(validade <= avisoVencimento) {
        span.textContent = "Produto com o id: " + produtos.id + "está com vencimento igual ou menor a 15 dias!";
    } else if (estoque <= minEstoque) {
        span.textContent = "Produto com o id: " + produtos.id + "está com baixo estoque!";
    } else {
        span.textContent = "Sem problemas no momento!";
    }

    lista.appendChild(span);
}