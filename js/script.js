$(document).ready(function() {
  // scroll
    $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });

    // modal Window
    $('.button_writeAutor').click(function(){
      $('#exampleModal').arcticmodal();
    })
    
  // spoler Skills
    $('.service__content-tabTitle').click(function(event) {
      if ($('.service__content-tabs').hasClass('one')) {
          $('.service__content-tabTitle').not($(this)).removeClass('active');
          $('.service__content-tabText').not($(this).next()).slideUp(400);
      }
      $(this).toggleClass('active').next().slideToggle(400);
  });




// skills
$('.html_css').delay(1000).animate({'width':'90%'},3000);
$('.wp').delay(4000).animate({'width':'70%'},3000);
$('.js').delay(7000).animate({'width':'80%'},3000);
$('.sass').delay(10000).animate({'width':'70%'},3000);
$('.vue').delay(13000).animate({'width':'40%'},2000);

// burger menu
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });


  });




  // tabs portfolio

  $('#tab_01').css("display", "flex");
  $('#tab__02').css("display", "none");
  $('#tab__03').css("display", "none");
  $('#tab__04').css("display", "none");

  $('#tab_1').css("background", "#8eaadb");
  $('#tab_2').css("background", "#d9e2f3");
  $('#tab_3').css("background", "#d9e2f3");
  $('#tab_4').css("background", "#d9e2f3");


  $('#tab_1').on('click',function() {

    $('#tab_01').css("display", "flex");
    $('#tab__02').css("display", "none");
    $('#tab__03').css("display", "none");
    $('#tab__04').css("display", "none");

    $('#tab_1').css("background", "#8eaadb");
    $('#tab_2').css("background", "#d9e2f3");
    $('#tab_3').css("background", "#d9e2f3");
    $('#tab_4').css("background", "#d9e2f3");
  });


  $('#tab_2').on('click',function() {

    $('#tab_01').css("display", "none");
    $('#tab_02').css("display", "flex");
    $('#tab__03').css("display", "none");
    $('#tab__04').css("display", "none");

    $('#tab_1').css("background", "#d9e2f3");
    $('#tab_2').css("background", "#8eaadb");
    $('#tab_3').css("background", "#d9e2f3");
    $('#tab_4').css("background", "#d9e2f3");

  });

  $('#tab_3').on('click',function() {
    $('#tab_01').css("display", "none");
    $('#tab_02').css("display", "none");
    $('#tab_03').css("display", "flex");
    $('#tab_04').css("display", "none");

    $('#tab_1').css("background", "#d9e2f3");
    $('#tab_2').css("background", "#d9e2f3");
    $('#tab_3').css("background", "#8eaadb");
    $('#tab_4').css("background", "#d9e2f3");
  });

  $('#tab_4').on('click',function() {
    $('#tab_01').css("display", "none");
    $('#tab_02').css("display", "none");
    $('#tab_03').css("display", "none");
    $('#tab_04').css("display", "flex");

    $('#tab_1').css("background", "#d9e2f3");
    $('#tab_2').css("background", "#d9e2f3");
    $('#tab_3').css("background", "#d9e2f3");
    $('#tab_4').css("background", "#8eaadb");
  });




