let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  totalPrice += itemPrice;
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: ₹${totalPrice}`;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orderDetails = "You have ordered:\n";
  cart.forEach(item => {
    orderDetails += `• ${item.name} - ₹${item.price}\n`;
  });
  orderDetails += `\nTotal: ₹${totalPrice}`;

  alert(orderDetails);

  // Clear cart
  cart = [];
  totalPrice = 0;
  updateCartUI();
}
