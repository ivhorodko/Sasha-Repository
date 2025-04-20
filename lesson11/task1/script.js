let temperature=15;

function checkTemperature() {
    if (temperature<18) {
        return "Холодно!";
    } else {
        return "Тепло!";
    }
}
console.log(checkTemperature());