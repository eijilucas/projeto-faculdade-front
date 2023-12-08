const API_URL = "http://localhost:8080/collaborators"

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const table = document.getElementById('collaborator-table');
    table.innerHTML = "";

    data.forEach(collaborator => {
        console.log(collaborator)
        const row = table.insertRow();
        const collaboratorId = row.insertCell(0);
        const email = row.insertCell(1);
        const userAccess = row.insertCell(2);

        collaboratorId.textContent = collaborator.id;
        email.textContent = collaborator.email;
        userAccess.textContent = collaborator.userAccess;
    })
})
.catch(err => {
    console.log(err)
})