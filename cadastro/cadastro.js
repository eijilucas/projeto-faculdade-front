const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validarSenhas();
    submitData();
})

function validarSenhas() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if(password === confirmPassword) {
        return true;
    } else {
        window.alert('As senhas não concidem');
    }
}

function submitData() {
    const data = coletarDados();
    const API_URL = "http://localhost:8080/collaborators"
    console.log(data.phone)

    if(validarSenhas() === true) {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao enviar')
            }
        })
        .then(dados => {
            console.log("Response", dados)
        })
        .catch(err => {
            console.log("Erro", err)
        })
    } 
}

function coletarDados() {
    email = emailInput.value;
    password = passwordInput.value;

    return {
        id: null,
        email: email,
        password: password
    }
}