
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
           scrollTop: $($rightAnchor).offset().top-45
       }, 500);
       if ($(window).width() > 601) {
         $('html, body').animate({
             scrollLeft: $($rightAnchor).offset().left+20
         }, 500);

      $('html').css('overflowY', 'hidden');
    } else {
      $('html, body').animate({
          scrollLeft: $($rightAnchor).offset().left
      }, 500);
    }



       /* Stops the anchor from jumping directly to the spot*/
         event.preventDefault();

      /*sets the hash of the url to the anchor name after 1 sec, avoiding the jump */
      //  timeout = window.setTimeout(setHash, 1000);

       console.log($(window).width());

 });

 $('.inter-project').bind('click',function(event){

       /*stores the scroll position before moving to the page */
       storedScrollPos = $(window).scrollTop();

       /*Fetch the right anchor name */
       $rightAnchor = $(this).attr('href');

       /*SCROLLIN' */

        $('html, body').animate({
            scrollTop: $($rightAnchor).offset().top-45
        }, 500);



        /* Stops the anchor from jumping directly to the spot*/
          event.preventDefault();

       /*sets the hash of the url to the anchor name after 1 sec, avoiding the jump */
       //  timeout = window.setTimeout(setHash, 1000);
       if ($(window).width() > 601) {
        $('html').css('overflowY', 'hidden');

      }
        console.log($(window).width());

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
         console.log($(window).width());
  });


  /*Color picker for the stats */

var colors = ['120,225,231,', '254,155,143,', '173,180,196,'];

$( ".statnumber" ).each(function() {
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  var random_alpha = (Math.random() * (0.08 - 0.3) + 0.3);
  $(this).css("background-color", "rgba("+random_color+random_alpha+")");
});

/*gallery*/
/* poplutating the gallery based on the classes and their numbers */
/* Setting the gallery image as bg and then hiding it means that the browser wont load it until we need it*/
$("[class*='galleryimg']").each(function(index) {
  console.log( index + " Counting");
  var fullname = $(this).attr('class');
  var arr = fullname.split('-');
  var album = arr[1];
  var slide = arr[2];
  var imageurl = "img/projects/"+album+"/slide"+slide+".jpg";

  $(this).css('background-image',  'url(' + imageurl +')');
  if (slide == 1){
    $(this).css('display', 'block');
  }
});

/*Connecting the thumbs to the galler images*/
$('[class^="thumb"]').bind('click',function(event){
  var fullname = $(this).attr('class');
  var arr = fullname.split('-');
  var slide = arr[2];
  var album = arr[1];


  $("[class*='galleryimg-"+album+"']").each(function(index) {
    $(this).css('display', 'none');
  });
  $('.galleryimg-'+album+"-"+slide).css("display", "block");

  console.log(number);
});



$( document ).ready(function() {
    $('header').css('width', $(window).width())


});

// function scrollLock(lock){
//   if(lock == true){
//
// $(window).scroll(function locking(e){
//   var footer = $('footer');
//   var height = footer.height();
//   var offset = footer.offset();
//   var top = offset.top;
//   var limit = (top) -100 ;
//
//   if($(window).scrollTop() >=limit){
//     $(window).scrollTop(limit);
//   }
// })
// }else{
//   locking().stop();
//
// }
// };
