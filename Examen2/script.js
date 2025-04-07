function alternarMenu() {
    var menu = document.getElementById("menuDesplegable");
    if (menu.className == "menu-desplegable") {
        menu.className = "menu-desplegable open";
    } else {
        menu.className = "menu-desplegable";
    }
}

function elegirItem(item) {
    var itemSeleccionado = document.getElementById("itemSeleccionado");
    itemSeleccionado.innerHTML = item;
    var menu = document.getElementById("menuDesplegable");
    menu.className = "menu-desplegable";
}