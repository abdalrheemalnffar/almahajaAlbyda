$(document).ready(function () {
    // slider code
    $(".main-title .owl-carousel").owlCarousel({
        rtl:true,
        items: 1,
        margin: 20,
        loop: true,
        center: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<img src="images/slider/1.png" width="100px">', '<img src="images/slider/2.png" width="100px">'],
        responsive: {

            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                nav: false,
                navText: ['', ''],
            },

            767: {

            },

            1199: {
            }
        }

    });
    // **************************
    // side_bare
    $(".bar").click(function(){
        $(".contaner-box").delay(000).fadeIn(1500)
        $("aside").animate({
            left:"0"
        },1500)
        $(".li1").delay(1000).animate({
            top:"30%"
        },1500)
        $(".li2").delay(2000).animate({
            left:"45%"
        },1500)
        $(".li3").delay(3000).animate({
            right:"45%"
        },1500)
        $(".li4").delay(4000).animate({
            bottom:"35%"
        },1500)
    })
    $(".close").click(function(){
        $(".contaner-box").fadeOut(1000)
        $("aside").animate({
            left:"-100%"
        },1500)
        $(".li1").animate({
            top:"-30%"
        },1500)
        $(".li2").animate({
            left:"-48.5%"
        },1500)
        $(".li3").animate({
            right:"-46%"
        },1500)
        $(".li4").animate({
            bottom:"-34%"
        },1500)
    })
});