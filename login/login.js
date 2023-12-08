formSubmit = document.getElementById('form')
emailInput = document.getElementById('email').value;
passwordInput = document.getElementById('password').value;

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    obterDados()
});

async function obterDados() {
    const apiUrl = 'http://localhost:8080/collaborators'; // Substitua pela sua URL real
  
    try {
      const resposta = await fetch(apiUrl);
  
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
  
function validarDados() {
    const data = obterDados();

    for(let i = 0; i < data.lenght; i++) {
        const usuarios = data[i];

        if(usuarios.email === emailInput && usuarios.password === passwordInput) {
            window.location.href = 'dashboard.html';
            return;
        }
    }

    window.alert('Credenciais inválidas');
}