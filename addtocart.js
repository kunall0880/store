// addtocart.js

// Check if the cartItems array is stored in localStorage, and retrieve it
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to add an item to the cart
function addtocart(item) {
    // Get the details of the selected item
    var itemName = document.getElementById(item).querySelector("h1").innerText;
    var itemPrice = parseFloat(document.getElementById(item).querySelector("h4").innerText.replace('$', ''));
    var itemQuantity = parseInt(document.getElementById(item).querySelector("input").value);

    // Calculate subtotal for the item
    var itemSubtotal = itemPrice * itemQuantity;

    // Create an object representing the item
    var cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        subtotal: itemSubtotal
    };

    // Add the item to the cart
    cartItems.push(cartItem);

    // Save the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally, you can show a confirmation message to the user
    alert(itemName + " added to cart!");
}

// Function to update the cart display
function updateCartDisplay() {
    // You need to implement this function based on your cart page structure
    // For example, update the table rows with cartItems data
    // Update the subtotal, tax, and total values
    // This function will depend on the HTML structure of your cart page
}
