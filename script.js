

const biotechToggle = document.getElementById('biotechToggle');
const constructionToggle = document.getElementById('constructionToggle');
const biotech = document.getElementById('biotech');
const construction = document.getElementById('construction');
const moreInformation = document.getElementById('moreInformation');

// TOGGLE EXPERTISE AREAS ON HOME PAGE

biotechToggle.onclick = function () {
    moreInformation.style.display = "none";
    biotech.style.display = "flex";
    if (construction.style.display == "flex") {
        construction.style.display = "none";
        biotech.style.display = "flex";
    };

}

constructionToggle.onclick = function () {
    moreInformation.style.display = "none";
    construction.style.display = "flex";
    if (biotech.style.display == "flex") {
        biotech.style.display = "none";
        construction.style.display = "flex";
    };
}



// KEEPS NAVIGATION BAR AT THE TOP OF SCREEN WHEN YOU SCROLL DOWN

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar2").style.backgroundColor = "black";
    } else {
        document.getElementById("navbar2").style.backgroundColor = "green";
    }
}







