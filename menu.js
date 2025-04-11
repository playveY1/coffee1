const products = [
  {
    name: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    category: "coffee",
    category_img_src: "./assets/img/miniIcons/cupOfCoffe.png",
    img_src: "./assets/img/menu/coffeAndTea/coffee-1.jpeg",
    sizes: {
      s: {
        textSize: "S",
        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",
        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",
        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-2.jpeg",
    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.50",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-3.jpeg",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-4.jpeg",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Espresso",
    description: "Classic black coffee",
    price: "4.50",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-5.jpeg",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    img_src: "./assets/img/menu/coffeAndTea/coffee-6.jpeg",

    category: "coffee",
    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-7.jpeg",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    category: "coffee",
    img_src: "./assets/img/menu/coffeAndTea/coffee-8.jpeg",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Cinnamon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    img_src: "./assets/img/menu/coffeAndTea/tea-1.png",
    category_img_src: "./assets/img/miniIcons/tea.png",
    category: "tea",
    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Lemon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    img_src: "./assets/img/menu/coffeAndTea/tea-2.png",

    category: "tea",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",
        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Lemon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    img_src: "./assets/img/menu/coffeAndTea/tea-3.png",

    category: "tea",
    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Lemon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    category: "tea",
    img_src: "./assets/img/menu/coffeAndTea/tea-4.png",

    sizes: {
      s: {
        textSize: "S",

        size: "200 ml",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "300 ml",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "400 ml",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        add_price: "0.50",
      },
      {
        name: "Lemon",
        add_price: "0.50",
      },
      {
        name: "Syrup",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    category: "dessert",
    img_src: "./assets/img/menu/desserts/dessert-1.png",
    category_img_src: "./assets/img/miniIcons/cacke.png",
    sizes: {
      s: {
        textSize: "S",
        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",
        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    category: "dessert",
    img_src: "./assets/img/menu/desserts/dessert-2.png",

    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    category: "dessert",
    img_src: "./assets/img/menu/desserts/dessert-3.png",

    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "4.00",
    img_src: "./assets/img/menu/desserts/dessert-4.png",

    category: "dessert",
    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    category: "dessert",
    img_src: "./assets/img/menu/desserts/dessert-5.png",

    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    category: "dessert",
    img_src: "./assets/img/menu/desserts/dessert-6.png",

    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    img_src: "./assets/img/menu/desserts/dessert-7.png",

    category: "dessert",
    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },

  {
    name: "Black forest",
    img_src: "./assets/img/menu/desserts/dessert-8.png",

    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    category: "dessert",
    sizes: {
      s: {
        textSize: "S",

        size: "50 g",
        add_price: "0.00",
      },
      m: {
        textSize: "M",

        size: "100 g",
        add_price: "0.50",
      },
      l: {
        textSize: "L",

        size: "200 g",
        add_price: "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        add_price: "0.50",
      },
      {
        name: "Nuts",
        add_price: "0.50",
      },
      {
        name: "Jam",
        add_price: "0.50",
      },
    ],
  },
];
const modelMenu = document.querySelector(".model__menu");
const categories = [];
const catigoriesImg = [];
let filteredProducts = [];
let filterProduct = [];
const categoriesContainer = document.querySelector(".choice_menu-buttos");
const menuList = document.querySelector(".menu-list");
const modelMenuConteiner = document.querySelector(".model__menu-container2");

document.addEventListener("DOMContentLoaded", () => {
  products.forEach((item) => {
    if (categories.indexOf(item.category) === -1) {
      categories.push(item.category);
    }
  });
  products.forEach((item) => {
    if (
      item.category_img_src &&
      !catigoriesImg.includes(item.category_img_src)
    ) {
      catigoriesImg.push(item.category_img_src);
    }
  });
  console.log(catigoriesImg);

  if (categories.length !== 0) {
    categories.forEach((item, index) => {
      const category = createCategory(item, index);
      if (index === 0) {
        category.classList.add("active");
      }
      categoriesContainer.appendChild(category);
    });
  }
  filterCarts("coffee");
});

categoriesContainer.addEventListener("click", (event) => {
  const category = event.target.closest(".category");

  if (!category) return;
  const allCategories = categoriesContainer.querySelectorAll(".category");
  allCategories.forEach((button) => button.classList.remove("active"));
  category.classList.add("active");
  const categoryName = category.getAttribute("id");
  menuList.innerHTML = "";

  filterCarts(categoryName);
});

function filterCarts(categoryName) {
  filteredProducts = products.filter((item) => item.category === categoryName);
  filteredProducts.forEach((item) => {
    const productCart = createProductCart(item);
    menuList.appendChild(productCart);
  });
}

function createProductCart(product) {
  const productCart = document.createElement("div");
  productCart.classList.add("product-cart");
  productCart.setAttribute("name", product.name);
  productCart.innerHTML = `
      <div class="product-cart__container">
      <img src="${product.img_src}" alt="" class="product-cart__img" >
      <h3 class="product-cart__title">${product.name}</h3>
      <p class="product-cart__description">${product.description}</p>
      <span class="product-cart__price">$${product.price}</span>
      </div>
      `;
  return productCart;
}

function createCategory(item, index) {
  const category = document.createElement("div");
  category.classList.add(`category`);
  category.classList.add(`category--${item}`);
  category.setAttribute("id", item);
  category.innerHTML = `
      <div class="category__circle">
     
      <img src="${catigoriesImg[index]}" alt="" class="category__img" >
    </div>
    <span>${item}</span>`;

  return category;
}

menuList.addEventListener("click", (event) => {
  const productCart = event.target.closest(".product-cart");
  if (productCart) {
    const name = productCart.getAttribute("name");
    const product = products.find((item) => {
      if (item.name === name) {
        return item;
      }
    });
    modelMenu.innerHTML = "";
    filterProduct = products.filter((item) => item.name === name);
    filterProduct.forEach((item) => {
      const menu = createModelCart(item);
      modelMenuConteiner.appendChild(menu);
    });
  }
});
const additiveNames = products.flatMap((product) =>
  product.additives.map((additive) => additive.name)
);

function createModelCart(product) {
  const modelCart = document.createElement("div");
  modelCart.classList.add("model__menu");
  modelCart.innerHTML = `
  <div class="model__menu-block ">
    <div class="model__menu_inner">
      <img src="${product.img_src}" alt="" class="model__menu_img">
      <div class="model__menu_inner-right">
        <span class="model__menu__title">${product.name}</span>
        <span class="model__menu__text">${product.description}</span>
        <div class="btn__size-container">
          <span class="btn__size-title">Size</span>
          <div class="btn__size">
            <button class="category btn_category size_btn" data-size="s" data-price="${
              product.sizes.s.add_price
            }">
              <div class="category__circle">
                <span>${product.sizes.s.textSize}</span>
              </div>
              <span>${product.sizes.s.size}</span>
            </button>
            <button class="category btn_category size_btn" data-size="m" data-price="${
              product.sizes.m.add_price
            }">
              <div class="category__circle">
                <span>${product.sizes.m.textSize}</span>
              </div>
              <span>${product.sizes.m.size}</span>
            </button>
            <button class="category btn_category size_btn" data-size="l" data-price="${
              product.sizes.l.add_price
            }">
              <div class="category__circle">
                <span>${product.sizes.l.textSize}</span>
              </div>
              <span>${product.sizes.l.size}</span>
            </button>
          </div>
        </div>
        <div class="btn__additives-container">
          <span class="btn__additives-title">Additives</span>
          <div class="btn__additives">
            ${product.additives
              .map(
                (additive, index) => `
              <button class="category btn_category btn_additives" data-additive="${
                additive.name
              }" data-price="${additive.add_price}">
                <div class="category__circle">
                  <span>${index + 1}</span>
                </div>
                <span>${additive.name}</span>
              </button>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="total__price-container">
          <span class="total__price-title">Total:</span>
          <span class="total__ptice-price" id="total-price">$${
            product.price
          }</span>
        </div>
        <div class="cost__text-container">
          <div class="cost__text-img"></div>
          <span class="cost__text-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</span>
        </div>
        <button class="model__menu-close__btn close__btn">Close</button>
      </div>
    </div>
  </div>`;

  let totalPrice = parseFloat(product.price);
  modelCart.addEventListener("click", function (event) {
    if (event.target.closest(".size_btn")) {
      const sizeBtn = event.target.closest(".size_btn");
      const sizePrice = parseFloat(sizeBtn.getAttribute("data-price"));
      if (!isNaN(sizePrice)) {
        totalPrice = parseFloat(product.price) + sizePrice;
      }
      const sizeButtons = modelCart.querySelectorAll(".size_btn");
      sizeButtons.forEach((button) => button.classList.remove("active"));
      sizeBtn.classList.add("active");
    }
    if (event.target.closest(".btn_additives")) {
      const additiveBtn = event.target.closest(".btn_additives");
      const additivePrice = parseFloat(additiveBtn.getAttribute("data-price"));
      if (!isNaN(additivePrice)) {
        totalPrice += additivePrice;
      }
      const additiveBtns = modelCart.querySelectorAll(".btn_additives");
      additiveBtns.forEach((button) => button.classList.remove("active"));
      additiveBtn.classList.add("active");
    }
    const totalPriceElement = modelCart.querySelector("#total-price");
    if (totalPrice > 8.5) {
      totalPrice -= 0.5;
    }
    if (totalPriceElement) {
      totalPriceElement.innerHTML = "$" + totalPrice.toFixed(2);
    }
  });
  const closeBtn = modelCart.querySelector(".model__menu-close__btn");
  closeBtn.addEventListener("click", function () {
    modelCart.remove();
  });

  return modelCart;
}
