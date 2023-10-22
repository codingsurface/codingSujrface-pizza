function saveLocalstorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}
let generateHtml = ''
let total;
products.forEach((product) => {
    generateHtml += `
    <div class="product">
        <div class="image-div">
            <img src="${product.images}" class = "image">
        </div>
        <div class="title-div">
            <p class="titles">${product.title} 
            </p>
        </div>
        <div class="price">
            $${product.price / 100}
        </div>
        <div class="add-div">
            <button class="add" data-product-name = "${product.title}"
            data-product-price = "${product.price / 100}"
            data-product-image = "${product.images}"
            data-product-quanity = "${cart.quantity}" onclick = "">
                Add to cart
            </button>
        </div>
    </div>
    `
    document.querySelector('.products').innerHTML = generateHtml
    
})
const buttons = document.querySelectorAll('.add')
let a = 0
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ++a
        console.log(a)
        const productNName = button.dataset.productName
        const productPPrice = button.dataset.productPrice
        const productIImage = button.dataset.productImage
        const productQQuanity = button.dataset.productQuanity
        let machingItem;
        cart.forEach((item) => {
            if(productNName === item.productname) {
                machingItem = item;
            }
        })
        let q3uantity = 1;
        if(machingItem) {
            q3uantity = machingItem.quantity += 1
        } else{
            const plus = document.querySelector('.add')
            cart.push({
                productname: productNName,
                quantity: 1,
                productPrice: productPPrice,
                photo: productIImage,
            })
        }
        let html;
        cart.forEach((productCart) => {
            html += `
            <div class="photo">
                <img src="${productCart.photo}" class="cart-img">
                <p class="title-cart-div">${productCart.productname}</p>
                <div class="price-cart">
                    $${productCart.productPrice}
                </div>
                <div class="quantity-cart">
                    <div class="quantityPP">quantity:</div>
                    <div class ="quant">
                        ${productCart.quantity}
                    </div>
                </div>
            
            </div>
            `
            document.querySelector('.info').innerHTML = html
        })
        total = 0
        cart.forEach(produit => total +=produit.productPrice * 100 * produit.quantity)
        document.querySelector('.total').innerHTML = 'Total:'+'$'+total/100
        const html2 = '<button class="dilever">DILEVER</button>'
        document.querySelector('.paymentt').innerHTML = html2
        saveLocalstorage()
    })
})
let productId;
cart.forEach((prodduct) => {
    productId =  prodduct.productname
})
let total2 = 0
let geHtml;
const e = document.querySelector('.rubish-button')
e.addEventListener('click',() => {
    removeFromcart()
})
let b = 0
function removeFromcart() {
    cart.shift()
    const container = document.querySelector('.photo')
    container.remove()
    b = 0
    cart.forEach(proddduct => b += proddduct.productPrice* 100* proddduct.quantity)
    document.querySelector('.total').innerHTML = 'Total:' + '$'+b/100
    saveLocalstorage()
}
let hhtml = ''
let total3 = 0
cart.forEach((p) => {
    hhtml += `
    <div class="photo">
        <img src="${p.photo}" class="cart-img">
        <p class="title-cart-div">${p.productname}</p>
        <div class="price-cart">
            $${p.productPrice}
        </div>
        <div class="quantity-cart">
            <div class="quantityPP">quantity:</div>
            <div class ="quant">
                ${p.quantity}
            </div>
        </div>
    </div>
    `
    total3 += p.productPrice * p.quantity
})
document.querySelector('.total').innerHTML = 'Total:$' + total3
document.querySelector('.info').innerHTML = hhtml
document.querySelector('.paymentt').innerHTML = '<button class="dilever">DILEVER</button>'
