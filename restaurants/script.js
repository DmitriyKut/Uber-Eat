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

$(document).ready(function() {
    $('.menu1').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion1').addClass('active_partion');
    });
});

$(document).ready(function() {
    $('.menu2').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion2').addClass('active_partion');
    });
});

$(document).ready(function() {
    $('.menu3').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion3').addClass('active_partion');
    });
});

$(document).ready(function() {
    $('.menu4').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion4').addClass('active_partion');
    });
});

$(document).ready(function() {
    $('.menu5').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion5').addClass('active_partion');
    });
});

$(document).ready(function() {
    $('.menu6').click(function(event) {
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').removeClass('active_partion');
        $('.partion1,.partion2,.partion3,.partion4,.partion5,.partion6').addClass('hide');
        $('.partion6').addClass('active_partion');
    });
});

