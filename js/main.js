
/* This guy does the scroll to on vertical and horizontal */
var storedScrollPos;

$('.project-link').bind('click',function(event){
        storedScrollPos = $(window).scrollTop()
       var $anchor = $(this);

       $('html, body').animate({
           scrollLeft: $($anchor.attr('href')).offset().left
       }, 500);
       $('html, body').animate({
           scrollTop: $($anchor.attr('href')).offset().top - 50
       }, 500);
       event.preventDefault();
 });

 $('.project-scroll-back').bind('click',function(event){

        $('html, body').animate({
            scrollLeft: 0
        }, 500);

        $("html, body").animate({
           scrollTop: storedScrollPos
         }, 500);



        event.preventDefault();
  });
