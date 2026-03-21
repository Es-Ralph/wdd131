// Footer Dynamic Values
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Static Weather Values
const temp = 28;
const wind = 10;

// Wind Chill Function (ONE LINE RETURN)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// Apply Conditions
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = calculateWindChill(temp, wind);
}

// Output Result
document.getElementById("chill").textContent = chill;