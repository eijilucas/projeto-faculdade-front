formSubmit = document.getElementById('form')
emailInput = document.getElementById('email');
passwordInput = document.getElementById('password');
const apiUrl = 'http://localhost:8080/collaborators'; 

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    validarDados();
});

window.onload = () => {
  obterDados();
}

async function obterDados() {
  
    try {
      const resposta = await fetch(apiUrl);
  
      if (!resposta.ok) {
        throw new Error('Erro ao obter dados da API');
      }
  
      const dados = await resposta.json();
      console.log(dados);
      return dados;

    } catch (erro) {
      console.error('Erro geral:', erro.message);
    }

}
  
async function validarDados() {
  try {
    const dados = await obterDados();

    const usuarioEncontrado = dados.find(usuario => usuario.email === emailInput.value && usuario.password === passwordInput.value);

    if (usuarioEncontrado) {
      window.location.href = "../dashboard/dashboard.html";
    } else {
      window.alert("Credenciais incorretas");
    }

  } catch (erro) {
    console.error('Erro ao validar dados:', erro.message);
  }
}


