$('#OS').click(function () {
    $(this).removeClass();
    $(this).addClass('webDevBanner__btn-HIN');
    $('#HIN').removeClass();
    $('#HIN').addClass('webDevBanner__btn-OS');
});

$('#HIN').click(function () {
    $(this).removeClass();
    $(this).addClass('webDevBanner__btn-HIN');
    $('#OS').removeClass();
    $('#OS').addClass('webDevBanner__btn-OS');
});

$('.ourServices__row-deactive').click(function() {
    $('.ourServices__row-active').removeClass().addClass('ourServices__row-deactive');
    $(this).removeClass();
    $(this).addClass('ourServices__row-active');
});


$('.latestWorks__rowItem').click(function() {
    $('.latestWorks__rowItem-active').removeClass('latestWorks__rowItem-active');
    $(this).addClass('latestWorks__rowItem-active');

})