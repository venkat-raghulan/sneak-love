const service = axios.create({
  baseURL: document.getElementById("site_url").value
});

const priceFilter = document.getElementById("price-filter");
const sizeFilter = document.getElementById("size-filter");

function filterByInput(evt) {
  console.log(evt.target.value);
}

priceFilter.oninput = filterByInput;
