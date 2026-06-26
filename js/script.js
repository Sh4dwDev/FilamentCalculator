const gramsInput = document.getElementById("grams");
const filamentPriceInput = document.getElementById("filamentPrice");
const profitMarginInput = document.getElementById("profitMargin");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    let grams = Number(gramsInput.value);
    let filamentPrice = Number(filamentPriceInput.value);
    let profitMargin = Number(profitMarginInput.value);

    if (grams <=0 || filamentPrice <=0 || profitMargin <=0) {
        result.textContent = "Please enter valid numbers."
        return;
    }

    let materialCost = grams / 1000 * filamentPrice;
    let margin = materialCost * (1 + profitMargin/100);

    result.innerHTML = `
        <span>Material cost: <strong>${materialCost.toFixed(2)} kr</strong></span>
        <span>Suggested price: <strong>${margin.toFixed(2)} kr</strong></span>
    `;
})