document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart! (This is a basic example)');
            // In a real website, you would handle cart logic here
        });
    });
});
