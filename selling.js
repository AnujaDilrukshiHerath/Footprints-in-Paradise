if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
     // Remove item function	
    var removeCartItemButtons = document.getElementsByClassName('btn-danger') 
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
     // Change quantity of item function
    var quantityInputs = document.getElementsByClassName('cart-quantity-input') 
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // Add an item to cart function
    var addToCartButtons = document.getElementsByClassName('shop-item-button') 
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function removeCartItem(event) { 
    // Remove item function updated
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
	// determines whether a value is an illegal number (Not-a-Number) or less than or equal to Zero
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) { 
    // Add details of products to cart function
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) { 
    // If an item is added twice alert function
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
	// Get Total value
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function purchaseClicked(){
    //The total bill output will be here :
	var name=document.getElementById('fname').value;
	var TotalPrice= document.getElementsByClassName('cart-total-price')
	var cartItems = document.getElementsByClassName('cart-items')[0]
	alert('Dear'+" "+name+" "+"Thank you for your purchase your total bill is"+" "+TotalPrice[0].innerHTML);
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }	
    updateCartTotal()		
}




function validateForm() {
  // Form validation
  var x = document.forms["Form"]["fname"].value;
  var y = document.forms["Form"]["Address"].value;
  var z = document.forms["Form"]["Email Address"].value;
  var n = document.forms["Form"]["Mobile Number"].value;
  if (x == "") {
    alert("Please provide your Full Name!");
    return false;
  }
  if (y == "") {
    alert("Please provide your Delivery Address!");
    return false;
  }
  if (z == "") {
    alert("Please provide your Email Address!");
    return false;
  }
  if (n == "") {
    alert("Please provide your Mobile Number!");
    return false;
  }
return true;
  
}

function myFunction(selectTag) {  
  // Font size function
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("A").style.fontSize = listValue;
  document.getElementById("B").style.fontSize = listValue;
  document.getElementById("C").style.fontSize = listValue;
  document.getElementById("D").style.fontSize = listValue;
  document.getElementById("E").style.fontSize = listValue;
  document.getElementById("F").style.fontSize = listValue;
  document.getElementById("G").style.fontSize = listValue;
  document.getElementById("H").style.fontSize = listValue;
  document.getElementById("I").style.fontSize = listValue;
  document.getElementById("J").style.fontSize = listValue;
  document.getElementById("K").style.fontSize = listValue;
  document.getElementById("L").style.fontSize = listValue;
  document.getElementById("P").style.fontSize = listValue;
  document.getElementById("P1").style.fontSize = listValue;
  document.getElementById("P2").style.fontSize = listValue;
  document.getElementById("P3").style.fontSize = listValue;
  
  }

