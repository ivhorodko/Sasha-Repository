let age=16;
let hasPermission=false;

function canEnter() {
    if (age>=18 && hasPermission===true) {
        console.log("Вход разрешён!");
    } else {
        console.log("Вход запрещён!");
    }
}
canEnter();