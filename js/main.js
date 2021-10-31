$(document).ready( function() {
    $('.menu__btn').click(function(event){
        $('body').toggleClass('lock');
});
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        autoplay:true,
        autoplaySpeed:4500,
        pauseOnFocus:true,
        pauseOnHover:false,
        pauseOnDotsHover:true,
        draggable:true,
        swipr:true,
        tiuchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        varianleWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }