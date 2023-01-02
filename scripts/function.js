const parallax = document.getElementById("bg");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .7 + "px";
})





function themeswitch() {
    if (document.getElementById("theme").checked == false) {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home {backdrop-filter: brightness(.3) grayscale(1)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(.3) grayscale(1)}');
        style.sheet.insertRule('#home-proj {backdrop-filter: brightness(.3) grayscale(1)}');

    } else {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home {backdrop-filter: brightness(1) grayscale(0)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(1) grayscale(0)}');
        style.sheet.insertRule('#home-proj {backdrop-filter: brightness(.3) grayscale(1)}');
    }
};
function themeswitchproj() {
    if (document.getElementById("theme-proj").checked == false) {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home-proj {backdrop-filter: brightness(.3) grayscale(1)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(.3) grayscale(1)}');
        style.sheet.insertRule('#proj-imgdark {filter: brightness(.3) grayscale(1)}');

    } else {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home-proj {backdrop-filter: brightness(1) grayscale(0)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(1) grayscale(0)}');
        style.sheet.insertRule('#proj-imgdark {filter: brightness(1) grayscale(0)}');
    }
};