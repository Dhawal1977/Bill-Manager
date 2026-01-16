// Selection of all the elements -:

const itemNameInput = document.getElementById("item-name");
const itemQtyInput = document.getElementById("item-qty");
const itemPriceInput = document.getElementById("item-price");
const billBody = document.getElementById("bill-body");
const totalAmount = document.getElementById("total-amount");
const clearAllBtn = document.getElementById("clear-all");

// The event listeners -:

document.querySelector(".item-form").addEventListener("submit",function (e) {
    e.preventDefault(); // Stops from refreshing the page

    // Reading the input values -:
    const name = itemNameInput.value;
    const qty = Number(itemQtyInput.value);
    const price = Number(itemPriceInput.value);
    const total = qty * price;

    if (name.trim() === "" | qty <= 0 | price <= 0) {
        alert ("Please enter valid name, quantity > 0, and price > 0!");
        return;
    }

    // Create a new table row -:
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>${qty}</td>
    <td>₹${price.toFixed(2)}</td>
    <td>₹${total.toFixed(2)}</td>
    <td><button class = "delete-btn">X</button></td>
`;

    // Add row to table body
    billBody.appendChild(row);

    // Cancel Button or cross button to remove the row
    row.querySelector(".delete-btn").addEventListener("click", function() {
        const rowTotalText = row.children[3].innerText.replace("₹", "");
        const rowTotal = Number(rowTotalText);

        const currentTotal = Number(totalAmount.innerText);
        totalAmount.innerText = (currentTotal - rowTotal).toFixed(2);

        row.remove();
    })


    // Total Amount
    const currentTotal = Number(totalAmount.innerText);
    totalAmount.innerText = (currentTotal + total).toFixed(2);

    // Clearing the input written
    itemNameInput.value = "";
    itemQtyInput.value = "";
    itemPriceInput.value = "";
});

clearAllBtn.addEventListener("click", function () {
    item = [];
    localStorage.removeItem("bill-items");
    billBody.innerHTML = "";
    totalAmount.innerText = "0.00";
})