const vyshyvankaOrder = [
    {
        model: "Синьо-жовта",
        size: "M",
        price: 1200
    }];

const jsonString = JSON.stringify(vyshyvankaOrder);
document.getElementById("json-output").textContent = jsonString;