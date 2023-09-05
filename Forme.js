let btnPlus = document.querySelector('.qty-plus');
let btnMinus = document.querySelector('.qty-minus');
let qtyInput = document.querySelector('.qty'); // Utilisez une variable globale pour l'élément d'entrée de quantité
let priceElement = document.querySelector('.price');
let subtotalElement = document.querySelector('.subtotal'); // Ajoutez un élément pour afficher le sous-total

btnPlus.addEventListener('click', increaseQuantity);
btnMinus.addEventListener('click', decreaseQuantity);

// Partie du bouton d'incrémentation
function increaseQuantity() {
    qtyInput.value = parseInt(qtyInput.value) + 1;
    calculateSubtotal();
}

// Parti du bouton de décrémentation
function decreaseQuantity() {
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        calculateSubtotal();
    }
}

function calculateSubtotal() {
    let price = parseInt(priceElement.innerText);
    let qty = parseInt(qtyInput.value);
    let subtotal = price * qty; // Calcul du sous-total
    subtotalElement.innerText = subtotal; // Affiche le sous-total dans un élément HTML
}



// Sélectionnez tous les boutons de suppression
const removeButtons = document.querySelectorAll('.remove-button');

// Parcourez tous les boutons de suppression et ajoutez un gestionnaire d'événements pour chaque bouton
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtenez le conteneur parent de l'élément du panier (div.cart-item dans cet exemple)
        const cartItem = this.parentElement;

        // Supprimez l'élément du panier en le retirant de son parent
        cartItem.remove();
    });
});
