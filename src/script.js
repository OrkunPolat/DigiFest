const products = [
  {
    imgSrc: "/public/third-product.jpg",
    title: "365 Signature Hoodie",
    price: "€33.95",
  },
  {
    imgSrc: "/public/first-product.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    imgSrc: "/public/second-product.jpg",
    title: "Organic Skinny Hoodie",
    price: "€33.95",
  },
];

const productList = document.getElementById("product-list");
const nextBtn = document.getElementById("next-btn");

let currentTranslate = 0;

products.map((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
      <img src="${product.imgSrc}" alt="${product.title}" />
      <div class="title">${product.title}</div>
      <div class="product-bottom">
        <span class="price">${product.price}</span>
        <div class"options">
            <input type="radio" id="first-option" name="" value="" checked />
            <input type="radio" id="second-option" name="" value="" checked />
            <input type="radio" id="third-option" name="" value=""  checked/>
            <input type="radio" id="fourth-option" name="" value=""  checked/>
            </div>
        </div>
      
    `;
  productList.appendChild(productDiv);
});

nextBtn.addEventListener("click", () => {
  currentTranslate -= 180;
  if (currentTranslate <= -360) {
    currentTranslate = 0;
  }
  productList.style.transform = `translateX(${currentTranslate}px)`;
});
