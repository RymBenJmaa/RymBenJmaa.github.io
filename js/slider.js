/*
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
  */