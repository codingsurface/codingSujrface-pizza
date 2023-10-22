let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart) {
    cart = [

    ]
}
const menu_button = document.querySelector('.cart');
const mobileMenu = document.querySelector('.cart-products')
menu_button.addEventListener('click' , function() {
    mobileMenu.classList.toggle('is-active');
    menu_button.classList.toggle('is-active');
})

