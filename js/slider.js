  //Slider1

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
 function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none ";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
         }
  //Slider2
        var slideIndex2 = 1;
        showSlides2(slideIndex2);

        function plusSlides2(n) {
            showSlides2(slideIndex2 += n);
        }

        function currentSlide2(n) {
            showSlides2(slideIndex2 = n);
        }
        
        function showSlides2(n) {
            var i;
            var slides2 = document.getElementsByClassName("mySlides2");
            
            var dots2 = document.getElementsByClassName("dot2");

            if (n > slides2.length) {
                slideIndex2 = 1
            }
            if (n < 1) {
                slideIndex2 = slides2.length
            }
            for (i = 0; i < slides2.length; i++) {
                slides2[i].style.display = "none ";
            }
            for (i = 0; i < dots2.length; i++) {
                dots2[i].className = dots2[i].className.replace(" active", "");
            }
            slides2[slideIndex2 - 1].style.display = "block";
            dots2[slideIndex2 - 1].className += " active";
        }


 //Slider3
        var slideIndex3 = 1;
        showSlides3(slideIndex3);

        function plusSlides3(n) {
            showSlides3(slideIndex3 += n);
        }

        function currentSlide3(n) {
            showSlides3(slideIndex3 = n);
        }
        
        function showSlides3(n) {
            var i;
            var slides3 = document.getElementsByClassName("mySlides3");
            
            var dots3 = document.getElementsByClassName("dot3");

            if (n > slides3.length) {
                slideIndex3 = 1
            }
            if (n < 1) {
                slideIndex3 = slides3.length
            }
            for (i = 0; i < slides3.length; i++) {
                slides3[i].style.display = "none ";
            }
            for (i = 0; i < dots3.length; i++) {
                dots3[i].className = dots3[i].className.replace(" active", "");
            }
            slides3[slideIndex3 - 1].style.display = "block";
            dots3[slideIndex3 - 1].className += " active";
        }


 //Slider4 
        var slideIndex4 = 1;
        showSlides4(slideIndex4);

        function plusSlides4(n) {
            showSlides4 (slideIndex4 += n);
        }

        function currentSlide4(n) {
            showSlides4 (slideIndex4 = n);
        }
        
        function showSlides4(n) {
            var i;
            var slides4 = document.getElementsByClassName("mySlides4");
            
            var dots4 = document.getElementsByClassName("dot4");

            if (n > slides4.length) {
                slideIndex4 = 1
            }
            if (n < 1) {
                slideIndex4 = slides4.length
            }
            for (i = 0; i < slides4.length; i++) {
                slides4[i].style.display = "none ";
            }
            for (i = 0; i < dots4.length; i++) {
                dots4[i].className = dots4 [i].className.replace(" active", "");
            }
            slides4[slideIndex4 - 1].style.display = "block";
            dots4[slideIndex4 - 1].className += " active";
        }
 //Slider5 
        var slideIndex5 = 1;
        showSlides5(slideIndex5);

        function plusSlides5 (n) {
            showSlides5(slideIndex5 += n);
        }

        function currentSlide5 (n) {
            showSlides5(slideIndex5 = n);
        }
        
        function showSlides5(n) {
            var i;
            var slides5 = document.getElementsByClassName("mySlides5");
            
            var dots5 = document.getElementsByClassName("dot5");

            if (n > slides5.length) {
                slideIndex5 = 1
            }
            if (n < 1) {
                slideIndex5 = slides5.length
            }
            for (i = 0; i < slides5.length; i++) {
                slides5[i].style.display = "none ";
            }
            for (i = 0; i < dots5.length; i++) {
                dots5[i].className = dots5 [i].className.replace(" active", "");
            }
            slides5[slideIndex5 - 1].style.display = "block";
            dots5[slideIndex5  - 1].className += " active";
        }

 //Slider6
        var slideIndex6 = 1;
        showSlides6(slideIndex6);

        function plusSlides6 (n) {
            showSlides6(slideIndex6 += n);
        }

        function currentSlide6 (n) {
            showSlides6(slideIndex6 = n);
        }
        
        function showSlides6(n) {
            var i;
            var slides6 = document.getElementsByClassName("mySlides6");
            
            var dots6 = document.getElementsByClassName("dot6");

            if (n > slides6.length) {
                slideIndex6 = 1
            }
            if (n < 1) {
                slideIndex6 = slides6.length
            }
            for (i = 0; i < slides6.length; i++) {
                slides6[i].style.display = "none ";
            }
            for (i = 0; i < dots6.length; i++) {
                dots6[i].className = dots6 [i].className.replace(" active", "");
            }
            slides6[slideIndex6 - 1].style.display = "block";
            dots6[slideIndex6  - 1].className += " active";
        }

var $window = $(window);
var $elem = $(".abL");
var $elem2 = $(".dAr");
var $elem3 = $(".abLI");
var $elem4 = $(".abR");
var $elem5 = $(".abL2");
var $elem6 = $(".abR2");
var $elem7 = $(".abLI2");
var $elem8 = $(".abLI3");
var $elem9 = $(".abLI4");
var $ryry = $(".contR");
var $fifi = $(".mynn");

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass(" animate");
    }else if(isScrolledIntoView($elem2, $window)){
        $elem2.addClass(" animate");
    }else if(isScrolledIntoView($elem3, $window)){
        $elem3.addClass(" animate");
    }else if(isScrolledIntoView($elem4, $window)){
        $elem4.addClass(" animate");
    }else if(isScrolledIntoView($elem5, $window)){
        $elem5.addClass(" animate");
    }else if(isScrolledIntoView($elem6, $window)){
        $elem6.addClass(" animate");
    }else if(isScrolledIntoView($elem7, $window)){
        $elem7.addClass(" animate");
    }else if(isScrolledIntoView($elem8, $window)){
        $elem8.addClass(" animate");
    }else if(isScrolledIntoView($elem9, $window)){
        $elem9.addClass(" animate");
    }else if(isScrolledIntoView($ryry,$window)){
        $ryry.addClass(" animate");
    }else if(isScrolledIntoView($fifi,$window)){
        $fifi.addClass(" animate");
    }
});
  