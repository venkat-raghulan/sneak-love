const service = axios.create();

const priceFilter = document.getElementById("price-filter");
const sizeFilter = document.getElementById("size-filter");
const productGrid = document.getElementById("products_grid");

function updateList(sneakers) {
  let tpl1 = `<div id="products_grid" class="products-grid flexed-item">`;
  let tpl2 = "";
  sneakers.forEach(sneaker => {
    tpl2 += `<a href="/one-product/${sneaker._id}" class="product-item-wrapper">
      <div class="product-img">
          <img src="${sneaker.image}" alt="${sneaker.description}">
      </div>
      <p class="product-name">${sneaker.name}</p>
      <p class="product-cat">${sneaker.category}</p>
      <p class="product-price">${sneaker.price}</p><br>Size`;

    let tpl5 = "";
    sneaker.sizes.forEach(size => {
      tpl5 += `<p class="product-price">${size}</p>`;
    });

    tpl2 += `${tpl5}</a>`;
  });

  let tpl3 = `</div>`;
  let tpl4 = tpl1 + tpl2 + tpl3;
  productGrid.innerHTML = "";
  productGrid.innerHTML += tpl4;
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
