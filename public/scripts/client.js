const priceFilter = document.getElementById("price-filter");
const sizeFilter = document.getElementById("size-filter");

console.log("hello");
console.log(priceFilter.value);

priceFilter.oninput(console.log(priceFilter.value));
