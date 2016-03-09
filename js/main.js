
/* This guy does the scroll to on vertical and horizontal */
var storedScrollPos;
var timeout;
var $rightAnchor;

function setHash(event){
  window.location.hash= $rightAnchor;

};

/*going to the project side */
$('.project-link').bind('click',function(event){

      /*stores the scroll position before moving to the page */
      storedScrollPos = $(window).scrollTop();

      /*Fetch the right anchor name */
      $rightAnchor = $(this).attr('href');

      /*SCROLLIN' */
      $('html, body').animate({
          scrollLeft: $($rightAnchor).offset().left
      }, 500);
       $('html, body').animate({
           scrollTop: $($rightAnchor).offset().top - 45
       }, 500);


       /* Stops the anchor from jumping directly to the spot*/
         event.preventDefault();

      /*sets the hash of the url to the anchor name after 1 sec, avoiding the jump */
       timeout = window.setTimeout(setHash, 1000);
       $('html, body').css('overflowY', 'hidden');



 });

/*going from the project side */
 $('.project-scroll-back').bind('click',function(event){

        $('html, body').animate({
            scrollLeft: 0
        }, 500);

        $("html, body").animate({
           scrollTop: storedScrollPos
         }, 500);



         event.preventDefault();
         $rightAnchor = " ";
         timeout = window.setTimeout(setHash, 1000);
         $('html').css('overflowY', 'auto'); 
  });


  /*Color picker for the stats */

var colors = ['120,225,231,', '254,155,143,', '173,180,196,'];

$( ".statnumber" ).each(function() {
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  var random_alpha = (Math.random() * (0.08 - 0.3) + 0.3);
  $(this).css("background-color", "rgba("+random_color+random_alpha+")");
});
