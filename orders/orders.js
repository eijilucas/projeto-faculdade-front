fetch("http://localhost:8080/orders")
.then(response => response.json())
.then(data => {
    const table = document.getElementById('order-table');
    table.innerHTML = "";

    data.forEach(order => {
        const row = table.insertRow();
        const orderId = row.insertCell(0);
        const costumerId = row.insertCell(1);
        const data = row.insertCell(2);
        const status = row.insertCell(3);
        const total = row.insertCell(4);

        orderId.textContent = order.orderId;
        costumerId.textContent = order.costumerName.name;
        data.textContent = order.registrationTime;
        status.textContent = order.orderStatus;
        total.textContent = order.total;
    })
})
.catch(err => {
    console.log(err)
})