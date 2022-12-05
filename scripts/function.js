$(document).ready(function () {

    if (this.width() <= 700) {

        $('.middle-section').hide();

    } else if (this.width() > 700) {

        $('.middle-section').show();

    }

});