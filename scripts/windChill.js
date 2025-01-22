const windChill = document.getElementById("wind-chill")

const t = -11
const wS = 15

const calculateWindChill = (temp, windSpeed) => 35.74 + 0.6215*temp - 35.75*(windSpeed**0.16) + 0.4275*temp*(windSpeed**0.16)

if (t <= 50 && wS > 5) {
    windChill.innerHTML = `${parseFloat(calculateWindChill(t, wS)).toFixed(2)} ºF`
}