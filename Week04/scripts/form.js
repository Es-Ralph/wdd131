const products = [
  { id: "p1", name: "Smartphone X" },
  { id: "p2", name: "Laptop Pro" },
  { id: "p3", name: "Wireless Earbuds" },
  { id: "p4", name: "Smart Watch" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});