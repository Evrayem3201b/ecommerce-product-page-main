const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const productImg = document.getElementById("product-img").src;
const plusImg = document.getElementById("plus");
const minusImg = document.getElementById("minus");
let quantity = document.getElementById("quantity");

cartBtn.onclick = () => {
  cart.classList.toggle("invisible");
};

plusImg.onclick = increaseQuantity;
minusImg.onclick = lowerQuantity;

function lowerQuantity() {
  if (parseInt(quantity.textContent) > 1) {
    quantity.textContent = parseInt(quantity.textContent) - 1;
    updateCart();
  }
}

function increaseQuantity() {
  quantity.textContent = parseInt(quantity.textContent) + 1;
  updateCart();
}

let cartEmpty = `<p class="cart-empty">Your cart is empty</p>`;
const cartEmptyCont = document.getElementById("cart-empty-cont");
cartEmptyCont.insertAdjacentHTML('beforeend', cartEmpty);

const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener('click', addToCart);

function addToCart() {
  const cartPosi = document.getElementById("cart-items");
  const cartImg = document.getElementById("product-img").src;
  const cartName = document.getElementById("title").innerText;
  const quantityNum = quantity.textContent;
  const cartTotal = 125.00 * quantityNum;

  // Check if the product is already in the cart
  let existingCartItem = document.querySelector("#cart-template");

  if (existingCartItem) {
    // Update the quantity and total of the existing product in the cart
    existingCartItem.querySelector("#item-price").textContent = `$125.00 x ${quantityNum}`;
    existingCartItem.querySelector("#total").textContent = `$${cartTotal}`;
  } else {
    // Add new product to the cart
    let productsTemplate = `
      <div id="cart-template" class="cart">
        <div class="cart-inner">
          <img src="${cartImg}" alt="" id="cart-img">
          <div class="cart-text-cont">
            <label id="item-name">${cartName}</label>
            <div style="font-size: .8rem;">
              <span id="item-price" style="color: #717171b3;">$125.00 x ${quantityNum} </span>
              <span id="total"> $${cartTotal}</span>
            </div>
          </div>
          <img src="images/icon-delete.svg" alt="" id="delete-btn">
        </div>
        <button class="checkout">Checkout</button>
      </div>
    `;

    cartEmptyCont.innerHTML = ''; // Remove the empty cart message
    cartPosi.insertAdjacentHTML('beforeend', productsTemplate);
    
    // Add delete button functionality
    const deleteBtn = document.getElementById("delete-btn");
    deleteBtn.onclick = () => {
        const cartTemp = document.getElementById("cart-template");
        cartTemp.remove();
        cartEmptyCont.insertAdjacentHTML('beforeend', cartEmpty);
      
    };
  }
}

function updateCart() {
  const existingCartItem = document.querySelector("#cart-template");
  if (existingCartItem) {
    const quantityNum = quantity.textContent;
    const cartTotal = 125.00 * quantityNum;

    existingCartItem.querySelector("#item-price").textContent = `$125.00 x ${quantityNum}`;
    existingCartItem.querySelector("#total").textContent = `$${cartTotal}`;
  }
}

let lightbox = document.getElementById("lightbox");

document.getElementById("current-img").onclick = () => {
    lightbox.classList.remove("invisible");
}

document.getElementById("close").onclick = () => {
    lightbox.classList.add("invisible");
}

const lightboxImg = document.getElementById("lightbox-img");
const nextImg = document.getElementById("next");
const prevImg = document.getElementById("prev");

let sliderImgs = document.querySelectorAll(".lightbox-imgs");
let imgSliderIndex = 0;
let intervalid = null;

sliderImgs.forEach(slide => {
    
    nextImg.onclick = function nextFunc(){
        imgSliderIndex++;
        sliderImgs[imgSliderIndex].classList.remove("invisible");
        imgSliderIndex--;
        sliderImgs[imgSliderIndex].classList.add("invisible");
        imgSliderIndex++;
        console.log(imgSliderIndex);
        if(imgSliderIndex > 0){
            prevImg.classList.remove("invisible");
        }
        if(imgSliderIndex == 3){
            nextImg.classList.add("invisible");
        }
        if(imgSliderIndex == 0){
            prevImg.classList.add("invisible");
            nextImg.classList.remove("invisible");
        }
    }
    
    prevImg.onclick = function nextFunc(){
        imgSliderIndex--;
        sliderImgs[imgSliderIndex].classList.remove("invisible");
        imgSliderIndex++;
        sliderImgs[imgSliderIndex].classList.add("invisible");
        imgSliderIndex--;
        console.log(imgSliderIndex);
        if(imgSliderIndex > 0){
            prevImg.classList.remove("invisible");
        }
        if(imgSliderIndex == 3){
            nextImg.classList.add("invisible");
        }
        if(imgSliderIndex == 0){
            prevImg.classList.add("invisible");
            nextImg.classList.remove("invisible");
        }
    }
})

const menu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu");
const menuClose = document.getElementById("closeNav");

menuBtn.onclick = function openMenu() {
  menu.classList.add("opened");
}
menuClose.onclick = function closeMenu() {
  menu.classList.remove("opened");
  menu.style.display = "none";
}