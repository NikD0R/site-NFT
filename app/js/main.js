// const { event } = require("jquery");

$(function(){

  $('.menu a, .logo, .footer-top__list a').on('click', function(event) {
    event.preventDefault();

    var id = $(this).attr('href'),

    top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 1500);
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');  
  });

  $('.experience-slider').slick({
    dots: false,
    variableWidth: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="arrow arrow-left" src="images/icons/arrow-left.svg" alt="left arrow of slider">',
    nextArrow: '<img class="arrow arrow-right" src="images/icons/arrow-right.svg" alt="right arrow of slider">',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          draggable: true,
        },
        breakpoint: 385,
        settings: {
          arrows: false,
          draggable: true,
        }
      }
    ]
  });

  $('.team__filter-btn').on('click', function () {
    $('.team__filter-btn').removeClass('team__filter-btn--active');
    $(this).addClass('team__filter-btn--active');
  });

  $('.team__filter-btn--team-1').on('click',function(){
    // $('.team__inner--first').css('display', 'flex');
    $('.team__inner--first').show('slow');
    $('.team__inner--second').hide();
    $('.team__inner--third').hide();
  });

  $('.team__filter-btn--team-2').on('click', function() {
    // $('.team__inner--second').css('display', 'flex');
    $('.team__inner--second').show('slow');
    $('.team__inner--first').hide();
    $('.team__inner--third').hide();
 });

 $('.team__filter-btn--team-3').on('click', function() {
  //  $('.team__inner--third').css('display', 'flex');
    $('.team__inner--third').show('slow');
    $('.team__inner--first').hide();
    $('.team__inner--second').hide();
 });

 $('.faq__accordion-name').on('click', function (e) {
      
      var accordionitem = $(this).attr('data-tab');
      
      $('#' + accordionitem)
      
      .slideToggle()
      
      .parent()
      
      .siblings()
      
      .find('.faq__accordion-content')
      
      .slideUp();
      
      $(this).toggleClass('active-name');
      
      $('#' + accordionitem)
      
      .parent()
      
      .siblings()
      
      .find('.faq__accordion-name')
      
      .removeClass('active-name');
      
      $('.faq__accordion-btn', this).toggleClass('faq__accordion-btn--top');
      
      $('#' + accordionitem)
      
      .parent()
      
      .siblings()
      
      .find('.faq__accordion-btn')
      
      .removeClass('faq__accordion-btn--top');
      
      });

});
