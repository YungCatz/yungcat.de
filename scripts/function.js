const parallax = document.getElementById("bg");
const stars = document.getElementById("stars");

window.addEventListener("scroll", function (event) {
    let offset = event.target.scrollingElement.scrollTop;
    parallax.style.backgroundPositionY = offset * .7 + "px";
    stars.style.backgroundPositionY = offset * .5 + "px";
})

const themeStyle = document.createElement('style');
document.head.appendChild(themeStyle);

function themeswitch() {
    while (themeStyle.sheet.cssRules.length > 0) {
        themeStyle.sheet.deleteRule(0);
    }
    if (document.getElementById("theme").checked == false) {
        themeStyle.sheet.insertRule('#home {backdrop-filter: brightness(.3) grayscale(1)}');
        themeStyle.sheet.insertRule('#footer {backdrop-filter: brightness(.3) grayscale(1)}');
        themeStyle.sheet.insertRule('#home-proj {backdrop-filter: brightness(.3) grayscale(1)}');
        themeStyle.sheet.insertRule('#proj-imgdark {filter: brightness(.3) grayscale(1)}');

    } else {
        themeStyle.sheet.insertRule('#home {backdrop-filter: brightness(1) grayscale(0)}');
        themeStyle.sheet.insertRule('#footer {backdrop-filter: brightness(1) grayscale(0)}');
        themeStyle.sheet.insertRule('#home-proj {backdrop-filter: brightness(.3) grayscale(1)}');
        themeStyle.sheet.insertRule('#proj-imgdark {filter: brightness(1) grayscale(0)}');
    }
};