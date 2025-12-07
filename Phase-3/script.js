// Selection of all the elements -:

const itemNameInput = document.getElementById("item-name");
const itemQtyInput = document.getElementById("item-qty");
const itemPriceInput = document.getElementById("item-price");
const billBody = document.getElementById("bill-body");
const totalAmount = document.getElementById("total-amount");

// The event listeners -:

document.querySelector(".item-form").addEventListener("submit",function (e) {
    e.preventDefault(); // Stops from refreshing the page

    // Reading the input values -:
    const name = itemNameInput.value;
    const qty = Number(itemQtyInput.value);
    const price = Number(itemPriceInput.value);
    const total = qty * price;

    // Create a new table row -:
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>${qty}</td>
    <td>${price.toFixed(2)}</td>
    <td>${total.toFixed(2)}</td>
`;

    // Add row to table body
    billBody.appendChild(row);


    // Total Amount
    const currentTotal = Number(totalAmount.innerText);
    totalAmount.innerText = (currentTotal + total).toFixed(2);

    // Clearing the input written
    itemNameInput.value = "";
    itemQtyInput.value = "";
    itemPriceInput.value = "";
});