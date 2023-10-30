const form = document.getElementById("tipCalculatorForm");
const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const tipPer = document.getElementById("tipPer");
const totalAmount = document.getElementById("totalAmount");

tipPercentage.addEventListener("input", function () {
    tipPer.value = tipPercentage.value
    const bill = parseFloat(billAmount.value);
    const percentage = parseFloat(tipPercentage.value);
    const tip = (bill * percentage) / 100;
    const total = bill + tip;

    tipAmount.value = tip.toFixed(2);
    totalAmount.value = total.toFixed(2);
});
