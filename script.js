function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " open";
        console.log("Menu Opened"); 
    } else {
        x.className = "menu";
        console.log("Menu Closed"); 
    } 
}

function copyText() {
    var copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function copyText2() {
    var copyText = document.getElementById("copyText2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}