function updateInputValue(product, isInCreasing, price) {
  const inputText = document.getElementById(product + "-number");
  let inputValue = inputText.value;
  if (isInCreasing === true) {
    inputValue = parseInt(inputValue) + 1;
  } else if (inputValue > 0) {
    inputValue = parseInt(inputValue) - 1;
  }
  inputText.value = inputValue;
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = inputValue * price;
  // calculate total
  calculateTotal();
}
function getInputValue(product) {
  const input = document.getElementById(product + "-number");
  const inputText = parseInt(input.value);
  return inputText;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = total;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateInputValue("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateInputValue("phone", false, 1219);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateInputValue("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateInputValue("case", false, 59);
});

document.getElementById("remove").addEventListener("click", function () {
  document.getElementById("cart").style.display = "none";
});

document.getElementById("remove-case").addEventListener("click", function () {
  document.getElementById("cart-case").style.display = "none";
});

const checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  //   checkout.style.display = "none";
  const input = document.getElementById("phone-number");
  const inputText = parseInt(input.value);
  const inputCase = document.getElementById("case-number");
  const inputTextCase = parseInt(inputCase.value);
  const phoneTotal = inputText * 1219;
  const caseTotal = inputTextCase * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;
  document.getElementById(
    "add-total"
  ).innerText = `Thanks buying product $${total}`;
});
