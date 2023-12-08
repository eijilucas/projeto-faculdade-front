fetch("http://localhost:8080/products")
.then(response => response.json())
.then(data => {
    const table = document.getElementById('products-table');
    table.innerHTML = "";

    data.forEach(product => {
        const row = table.insertRow();
        const productId = row.insertCell(0);
        const name = row.insertCell(1);
        const stockId = row.insertCell(2);
        const price = row.insertCell(3);

        productId.textContent = product.productId;
        name.textContent = product.name;
        stockId.textContent = product.expirationDate;
        price.textContent = product.price;
    })
})
.catch(err => {
    console.log(err)
})