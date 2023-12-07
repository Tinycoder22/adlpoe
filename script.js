let cart = {}; 

function addItem(itemId, price) {
  if (cart[itemId]) {
    cart[itemId]++;
  } else {
    cart[itemId] = 1;
  }
  updateTotal(price);
}
function removeItem(itemId, price) {
  if (cart[itemId] && cart[itemId] > 0) {
    cart[itemId]--;
    updateTotal(-price); 
  }
}
function updateTotal(price) {
  const totalPriceElement = document.getElementById('totalPrice');
  let totalPrice = parseFloat(totalPriceElement.textContent.replace('$', '')) + price;
  totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
}