let total = 0;

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if(name === "" || amount === "") {
        alert("Please enter details");
        return;
    }

    total = total + Number(amount);
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + amount + " (" + category + ")";

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}
