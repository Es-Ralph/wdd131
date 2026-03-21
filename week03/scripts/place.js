// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Static values
const temp = 28;
const wind = 10;

// Function (ONE LINE RETURN — requirement!)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// Condition check
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = calculateWindChill(temp, wind);
}

document.getElementById("chill").textContent = chill;