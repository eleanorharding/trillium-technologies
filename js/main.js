
/* This guy does the scroll to on vertical and horizontal */
var storedScrollPos;
var timeout;
var $rightAnchor;
var onProject = false;

function setHash(event){

  window.location.hash= $rightAnchor+"page";
    //  event.preventDefault();


};

// $('.sub-nav a').bind('click', function(event){
//   if(onProject == true){
//     storedScrollPos = $($(this).attr('href')).offset().top;
//     scrollback();
//   }
// });
/*going to the project side */
$('.project-link').bind('click',function(event){

        onProject = true;
        $('.secondary').removeClass('hidden');
      /*stores the scroll position before moving to the page */
      storedScrollPos = $(window).scrollTop();

      /*Fetch the right anchor name */

      $rightAnchor = $(this).attr('href');

      /* Stops the anchor from jumping directly to the spot*/
        event.preventDefault();
      /*SCROLLIN' */
      $('html, body').animate({
          scrollTop: $($rightAnchor).offset().top-45
      }, 500);

       if ($(window).width() > 800) {
         $('html, body').animate({
             scrollLeft: $($rightAnchor).offset().left+20
         }, 500);

      $('html').css('overflowY', 'hidden');
    } else {
      $('html, body').animate({
          scrollLeft: $($rightAnchor).offset().left
      }, 500);
    }






      /*sets the hash of the url to the anchor name after 1 sec, avoiding the jump */
      // var string = $(this).attr('href');
      // var value = string.split('-');
      //   $rightAnchor = value[1]+value[2];
       timeout = window.setTimeout(setHash, 1000);

      //  console.log($(window).width());

      $(window).on('hashchange',function(){
        if(location.hash.slice(1) == "home"){

          scrollback();
        }

      });

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
        timeout = window.setTimeout(setHash, 1000);
       if ($(window).width() > 800) {
        $('html').css('overflowY', 'hidden');

      }
        // console.log($(window).width());

  });
/*going from the project side */
 $('.project-scroll-back').bind('click',function(event){


      scrollback();


  });

  function scrollback(event){
    onProject = false;
    $('html, body').animate({
        scrollLeft: 0
    }, 500);

    $("html, body").animate({
       scrollTop: storedScrollPos
     }, 500);



    //  event.preventDefault();
     $rightAnchor = "home";
    //  timeout = window.setTimeout(setHash, 1000);
     $('html').css('overflowY', 'auto');
    //  console.log($(window).width());
    if ($(window).width() < 800) {
     setTimeout(function(){
         $('.secondary').toggleClass('hidden');
     }, 1000);
   }
 };

 $(".backtotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
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
  // console.log( index + " Counting");
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

  // console.log(number);
});



$( document ).ready(function() {
    $('header').css('width', $(window).width())


});

/* Arrow keys nav inside projects, very crappy code */
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        scrollback();
        break;

        case 38: // up
          if ($rightAnchor == "#secondary-13-mavericks" ){
            $rightAnchor = "#secondary-12-osa";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-12-osa"){
            $rightAnchor = "#secondary-11-phi";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-11-phi"){
            $rightAnchor = "#secondary-9-octotalk";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-9-octotalk"){
            $rightAnchor = "#secondary-7-fuelpod";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-7-fuelpod"){
            $rightAnchor = "#secondary-6-ultrascope";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-6-ultrascope"){
            $rightAnchor = "#secondary-5-dropfab";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-5-dropfab"){
            $rightAnchor = "#secondary-3-BSQ";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-3-BSQ"){
            $rightAnchor = "#secondary-2-ISS";
            scrollToItInProject();
          }

        break;

        case 39: // right
        break;

        case 40: // down
          if ($rightAnchor == "#secondary-2-ISS" ){
            $rightAnchor = "#secondary-3-BSQ";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-12-osa"){
            $rightAnchor = "#secondary-13-mavericks";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-11-phi"){
            $rightAnchor = "#secondary-12-osa";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-9-octotalk"){
            $rightAnchor = "#secondary-11-phi";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-7-fuelpod"){
            $rightAnchor = "#secondary-9-octotalk";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-6-ultrascope"){
            $rightAnchor = "#secondary-7-fuelpod";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-5-dropfab"){
            $rightAnchor = "#secondary-6-ultrascope";
            scrollToItInProject();
          } else if($rightAnchor == "#secondary-3-BSQ"){
            $rightAnchor = "#secondary-5-dropfab";
            scrollToItInProject();
          }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function scrollToItInProject(){
  storedScrollPos = $(window).scrollTop();
  $('html, body').animate({
      scrollTop: $($rightAnchor).offset().top-45
  }, 500);


  /* Stops the anchor from jumping directly to the spot*/
    event.preventDefault();

 /*sets the hash of the url to the anchor name after 1 sec, avoiding the jump */
  timeout = window.setTimeout(setHash, 1000);
  if ($(window).width() > 800) {
    $('html').css('overflowY', 'hidden');

  }
};

$(window).resize(function() {
  if(onProject == true){

    if ($(window).width() > 800) {
      $('html, body').animate({
          scrollLeft: $($rightAnchor).offset().left+20
      }, 10);

   $('html').css('overflowY', 'hidden');
 } else {
   $('html, body').animate({
       scrollLeft: $($rightAnchor).offset().left
   }, 10);
 }

  }
});

/*pay no attention to this... */

function hashSpin(){

  setTimeout(function(){
    window.location.hash= "S";
  },200);
  setTimeout(function(){
    window.location.hash= "SP";
  },400);
  setTimeout(function(){
    window.location.hash= "SPA";
  },600);
  setTimeout(function(){
    window.location.hash= "SPAC";
  },800);
  setTimeout(function(){
    window.location.hash= "SPACE";
  },1000);
  setTimeout(function(){
    window.location.hash= "SPACE";
  },1200);
  setTimeout(function(){
    window.location.hash= "SPACE!";
  },1400);
  setTimeout(function(){
    window.location.hash= "SPACE!!";
  },1600);
  setTimeout(function(){
    window.location.hash= "SPACE!!!";
  },1800);
  setTimeout(function(){
    window.location.hash= "SPACE!!!!";
  },2000);
  setTimeout(function(){
    window.location.hash= "SPACE!!!";
  },2200);
  setTimeout(function(){
    window.location.hash= "SPACE!!";
  },2400);
  setTimeout(function(){
    window.location.hash= "SPACE!";
  },2600);
  setTimeout(function(){
    window.location.hash= "SPACE";
  },2800);
  setTimeout(function(){
    window.location.hash= "SPAC";
  },3000);
  setTimeout(function(){
    window.location.hash= "SPA";
  },3200);
  setTimeout(function(){
    window.location.hash= "SP";
  },3400);
  setTimeout(function(){
    window.location.hash= "S";
  },3600);
  setTimeout(function(){
    window.location.hash= "";
  },3800);

}
