// Get references to the add to cart buttons
const salonBtn = document.getElementById('salonBtn');
const repairBtn = document.getElementById('repairBtn');
// Get reference to the cart
const cartItems = [];

// Add event listeners to the buttons
salonBtn.addEventListener('click', () => addToCart('Salon Service'));
repairBtn.addEventListener('click', () => addToCart('Appliance Repair Service'));
// Add event listeners for other buttons as needed

// Function to add item to cart
function addToCart(itemName) {
    cartItems.push(itemName);
    alert(`Added ${itemName} to cart!`);
    console.log('Cart Items:', cartItems); // You can remove this line, it's for demonstration purposes
}
