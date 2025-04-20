let age=20;
let status="Маленький";

function checkAge() {
    if(age>18) {
        status="Взрослый";
    } else {
        status="Маленький";
    }
    console.log("Возраст:"+age+"\nСтатус:"+status);
}
checkAge();