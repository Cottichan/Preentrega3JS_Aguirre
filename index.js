const products = {
    "Café de Especialidad": [
      {
        name: "Café Arábica 300g",
        price: 300
      },
      {
        name: "Café Arábica 600g",
        price: 550
      },
      {
        name: "Café Robusta 300g",
        price: 350
      },
      {
        name: "Café Robusta 600g",
        price: 600
      }
    ],
    "Accesorios Café": [
      {
        name: "Filtro café 5un",
        price: 50
      },
      {
        name: "Filtro café 10un",
        price: 100
      },
      {
        name: "Cuchara café",
        price: 150
      }
    ],
    "Cafeteras": [
      {
        name: "Prensa Francesa",
        price: 300
      },
      {
        name: "Cafetera Italiana",
        price: 600
      }
    ]
  };
  
  let cart = [];
  
  function addToCart(product, quantity) {
    const item = {
      product,
      quantity,
      price: products[product.category][product.index].price
    };
    cart.push(item);
  }
  
  function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
  
    let total = 0;
  
    cart.forEach((item) => {
      const productPrice = item.price * item.quantity;
      total += productPrice;
  
      const div = document.createElement("div");
      div.classList.add("cart-item");
  
      const productName = document.createElement("h3");
      productName.textContent = item.product.name;
  
      const productQuantity = document.createElement("p");
      productQuantity.textContent = `Quantity: ${item.quantity}`;
  
      const productPriceText = document.createElement("p");
      productPriceText.textContent = `Price: $${productPrice}`;
  
      div.appendChild(productName);
      div.appendChild(productQuantity);
      div.appendChild(productPriceText);
  
      cartContainer.appendChild(div);
    });
  
    const totalText = document.createElement("p");
    totalText.classList.add("total-text");
    totalText.textContent = `Total: $${total}`;
  
    cartContainer.appendChild(totalText);
  }
  
  function displayProducts() {
    const productsContainer = document.getElementById("products-container");
  
    for (let category in products) {
      const categoryProducts = products[category];
  
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category;
      productsContainer.appendChild(categoryTitle);
  
      categoryProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
  
        const productName = document.createElement("h3");
        productName.textContent = product.name;
  
        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;
  
        const addButton = document.createElement("button");
        addButton.textContent = "Agregar al carrito";
        addButton.addEventListener("click", () => {
            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.placeholder = "Quantity";
            productDiv.appendChild(quantityInput);
            
            const addBtn = document.createElement("button");
            addBtn.textContent = "Add";
            addBtn.addEventListener("click", () => {
              const quantity = Number(quantityInput.value);
              if (quantity > 0) {
                addToCart({ name: product.name, category, index }, quantity);
                displayCart();
                productDiv.removeChild(quantityInput);
                productDiv.removeChild(addBtn);
              }
            });
            
            productDiv.appendChild(addBtn);
          });
          
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addButton);
  
        productsContainer.appendChild(productDiv);
      });
    }
  } 
