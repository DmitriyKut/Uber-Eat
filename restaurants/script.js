//////////////////////////////////////////////Mobile menu//////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.nav1').click(function(event) {
        $('.nav1,.nav2,.nav3,.nav4,.nav5,.nav6').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.nav2').click(function(event) {
        $('.nav1,.nav3,.nav4,.nav5,.nav6').toggleClass('hide');
    });
});

$(document).ready(function() {
    $('.nav3').click(function(event) {
        $('.nav1,.nav2,.nav4,.nav5,.nav6').toggleClass('hide');
    });
});

$(document).ready(function() {
    $('.nav4').click(function(event) {
        $('.nav1,.nav2,.nav3,.nav5,.nav6').toggleClass('hide');
    });
});

$(document).ready(function() {
    $('.nav5').click(function(event) {
        $('.nav1,.nav2,.nav3,.nav4,.nav6').toggleClass('hide');
    });
});

$(document).ready(function() {
    $('.nav6').click(function(event) {
        $('.nav1,.nav2,.nav3,.nav4,.nav5').toggleClass('hide');
    });
});
/////////////////////////////////////////////////Main menu///////////////////////////////////////////////////////////////////////////


