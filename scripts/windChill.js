const windChill = document.getElementById("wind-chill")

const t = -11
const wS = 15

const calculateWindChill = (temp, windSpeed) => {
    if (temp <= 50 && windSpeed > 3) {
        return 35.74 + 0.6215*temp - 35.75*(windSpeed**0.16) + 0.4275*temp*(windSpeed**0.16)
    }
    else
        return "N/A"

}

const trimmedChill = (t, wS) => {
    return parseFloat(calculateWindChill(t, wS)).toFixed(2);
}

windChill.innerHTML = `${trimmedChill(t, wS)} ºF`