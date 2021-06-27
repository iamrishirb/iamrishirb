 // Initialize AOS
 function aos_init() {
    AOS.init({
    duration: 1000,
    once: true
    });
}
$(window).on('load', function() {
    aos_init();
});

//banner image moving effect
var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 10;

function animate() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

$('.heroimg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
});

window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function (e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});

animate();

//typed js effect
var typed = new Typed('.name', {
    strings: [
        "<span style='color:#ffd000;'>Spin a planet on my finger 🤓 </span>",
        "<span style='color:#DAA89B;'>🤣 🤣 you know I am kidding, right? </span>",
        "<span style='color:#FAF8D4;'>but, there are many things I can do... </span>",
        "<span style='color:#FFB8D1;'>craft stunning websites </span>",
        "<span style='color:#CDC1FF;'>design beautiful User Interfaces </span>",
        "<span style='color:#008DD5;'>create smooth User Experiences </span>",
        "<span style='color:#28AFB0;'>make your website SEO ready </span>"
    ],
    typeSpeed: 40,
    backSpeed: 40,
    showCursor: true,
    loop: true,
    cursorChar: '|',
    backDelay: 4000
});

//slider
function detect_active(){
    // get active
    var get_active = $("#dp-slider .dp_item:first-child").data("class");
    $("#dp-dots li").removeClass("active");
    $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
  }
  $("#dp-next").click(function(){
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();
  
  });
  
  $("#dp-prev").click(function(){
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
  
    detect_active();
  });
  
  $("#dp-dots li").click(function(){
    $("#dp-dots li").removeClass("active");
    $(this).addClass("active");
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
  });
  
  
  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
  
    detect_active();
  });