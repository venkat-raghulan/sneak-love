const service = axios.create();

const priceFilter = document.getElementById("price-filter");
const sizeFilter = document.getElementById("size-filter");
const productGrid = document.getElementById("products_grid");

function updateList(sneakers) {
  productGrid.innerHTML = "";
  sneakers.forEach(sneaker => {
    let sizes = "";
    sneaker.sizes.forEach(size => {
      sizes += `<li>EU ${size}</li>`;
    });
    const temp = `
      <a href="/one-product/${sneaker._id}" class="product-item-wrapper">
        <div class="product-img">
            <img src="${sneaker.image}" alt="${sneaker.description}">
        </div>
        <p class="product-name">${sneaker.name}</p>
        <p class="product-cat">${sneaker.category}</p>
        <p class="product-price">Price £${sneaker.price}</p>
        <span><strong>Available Sizes</strong></span>
        <ul>${sizes}</ul>
    </a>`;
    productGrid.innerHTML += temp;
  });
}

function filterByInputPrice(evt) {
  let str = window.location.pathname;

  var n = str.lastIndexOf("/");
  var result = str.substring(n + 1);
  var sliderNumber = document.getElementById("price-slider-number");
  sliderNumber.innerHTML = evt.target.value;

  service
    .get(`/filtered-shoes?price=${evt.target.value}&cat=${result}`)
    .then(apiRes => {
      updateList(apiRes.data);
    })
    .catch(apiErr => console.log(apiErr));
}

priceFilter.oninput = filterByInputPrice;
