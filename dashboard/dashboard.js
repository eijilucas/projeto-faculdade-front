const API_URL = './pedidos.json'

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const table = document.getElementById('order-table');
    table.innerHTML = "";

    data.forEach(order => {
        const row = table.insertRow();
        const orderId = row.insertCell(0);
        const costumer = row.insertCell(1);
        const data = row.insertCell(2);
        const status = row.insertCell(3);

        orderId.textContent = order.id;
        costumer.textContent = order.costumer;
        data.textContent = order.date;
        status.textContent = order.status;
    })
})
.catch(err => {
    console.log(err)
})