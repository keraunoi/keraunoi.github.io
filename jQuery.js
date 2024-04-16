// -- menu
$(function() {
    $("#menu").load("../panels/menu.html");
});

// -- menu
$(function() {
    $("#side").load("../panels/side.html");
});


// -- current page link
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("current-link");
        }
    });
});