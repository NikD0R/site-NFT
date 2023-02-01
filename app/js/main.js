$(function(){
  $('.experience-slider').slick({
    dots: false,
    variableWidth: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="arrow arrow-left" src="images/icons/arrow-left.svg" alt="left arrow of slider">',
    nextArrow: '<img class="arrow arrow-right" src="images/icons/arrow-right.svg" alt="right arrow of slider">',
  });

  $('.team__filter-btn').on('click', function () {
    $('.team__filter-btn').removeClass('team__filter-btn--active');
    $(this).addClass('team__filter-btn--active');
  });

  $('.team__filter-btn--team-1').on('click',function(){
    $('.team__inner--first').css('display', 'flex');
    // $('.team__inner--first').show('slow');
    $('.team__inner--second').hide();
    $('.team__inner--third').hide();
  });

  $('.team__filter-btn--team-2').on('click', function() {
    $('.team__inner--second').css('display', 'flex');
    // $('.team__inner--second').show('slow');
    $('.team__inner--first').hide();
    $('.team__inner--third').hide();
 });

 $('.team__filter-btn--team-3').on('click', function() {
   $('.team__inner--third').css('display', 'flex');
    // $('.team__inner--third').show('slow');
    $('.team__inner--first').hide();
    $('.team__inner--second').hide();
 });

});
