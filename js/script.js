$(document).ready(function() {
  $('#tab_1').click();

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
  function tabs__work(a,b) {
    $('.tabs__block').css("display", "none");
    $('.tabs-item').css("background", "#d9e2f3");
    $(a).css({"display": "flex","opacity":"0.1"}).animate({opacity:1},1600);
    $(b).css("background", "#8eaadb");

  }

  $('#tab_1').on('click',function() { tabs__work('#tab_01','#tab_1'); });
  $('#tab_2').on('click',function() { tabs__work('#tab_02','#tab_2'); });
  $('#tab_3').on('click',function() { tabs__work('#tab_03','#tab_3'); });
  $('#tab_4').on('click',function() { tabs__work('#tab_04','#tab_4'); });




