var navbar;

window.onload = function() {
    navbar = document.getElementById("div-banner");
}

window.onscroll = function() {
    changeNavbarStatement();
}

function changeNavbarStatement() {
    if (document.body.scrollTop > 77 || document.documentElement.scrollTop > 77) {
        navbar.style.opacity = 0.8;
        navbar.style.fontSize = "14px";
    }
    else {
        if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
            navbar.style.opacity = 1;
            navbar.style.fontSize = "16px";
        }
    }
}