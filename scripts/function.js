function themeswitch() {
    console.log(document.getElementById("theme").checked)

    if (document.getElementById("theme").checked == false) {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home {backdrop-filter: brightness(.3) grayscale(1)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(.3) grayscale(1)}');

    } else {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#home {backdrop-filter: brightness(1) grayscale(0)}');
        style.sheet.insertRule('#footer {backdrop-filter: brightness(1) grayscale(0)}');
    }
};