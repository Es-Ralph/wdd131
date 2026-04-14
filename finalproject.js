const devices = [
  { name: "Air Conditioner", usage: 1200 },
  { name: "Refrigerator", usage: 800 },
  { name: "Lighting", usage: 300 }
];

const UI = {
  list: document.getElementById("deviceList"),
  response: document.getElementById("formResponse")
};

function renderDevices() {
  if (!UI.list) return;

  UI.list.innerHTML = devices
    .map(d => `<li>${d.name} - ${d.usage}W</li>`)
    .join("");
}

function detectHighUsage() {
  const high = devices.find(d => d.usage > 1000);
  if (high) {
    alert(`⚠ High usage detected: ${high.name}`);
  }
}

function persistData() {
  localStorage.setItem("devices", JSON.stringify(devices));
}

function handleForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    UI.response.textContent = "Please fill in all fields.";
    return;
  }

  UI.response.textContent = `Thank you ${name}, your message has been received.`;

  e.target.reset();
}

// Event bindings
const loadBtn = document.getElementById("loadData");
if (loadBtn) {
  loadBtn.addEventListener("click", () => {
    renderDevices();
    detectHighUsage();
    persistData();
  });
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", handleForm);
}

// Initial render
renderDevices();