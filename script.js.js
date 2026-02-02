let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        cart.push({ name, price });
        total += price;
        updateCart();
    });
});

function updateCart() {
    document.getElementById('cart-btn').textContent = `Cart (${cart.length})`;
}

document.getElementById('cart-btn').addEventListener('click', () => {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total.toFixed(2);
    modal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout functionality not implemented. Integrate with a payment gateway like Stripe.');
});