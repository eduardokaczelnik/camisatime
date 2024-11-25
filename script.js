// Variáveis globais
let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");

// Função para atualizar o carrinho
function updateCart() {
  // Atualiza o número de itens no carrinho
  cartCount.textContent = cart.length;

  // Atualiza a lista de itens no carrinho
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price}`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);
  });

  // Atualiza o total
  totalPrice.textContent = total.toFixed(2);
}

// Função para adicionar ao carrinho
function addToCart(event) {
  const button = event.target;
  const productName = button.getAttribute('data-product');
  const productPrice = button.getAttribute('data-price');

  cart.push({ name: productName, price: productPrice });
  updateCart();
}

// Adiciona eventos de clique nos botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCart);
});
