// Simulasi array PHP (data produk)
const items = [
  "Laptop Asus",
  "Smartphone Samsung",
  "Kamera Canon",
  "Mouse Logitech",
  "Keyboard Mechanical",
  "Monitor Dell",
  "Headset Gaming",
  "Printer Epson",
  "Tablet iPad",
  "Flashdisk Sandisk"
];

// Fungsi pencarian (mirip PHP)
function searchItems(keyword) {
  return items.filter(item =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Event listener untuk input pencarian
const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

input.addEventListener("input", function () {
  const keyword = input.value.trim();
  const results = searchItems(keyword);

  if (keyword === "") {
    resultsDiv.innerHTML = "";
    return;
  }

  if (results.length > 0) {
    resultsDiv.innerHTML = results
      .map(item => `<div class="result-item">${item}</div>`)
      .join("");
  } else {
    resultsDiv.innerHTML = `<div class="result-item">Tidak ditemukan</div>`;
  }
});
