$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbars').addClass("stickys");
        }else{
            $('.navbars').removeClass("stickys");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });  

    //smoot scroll
    $('.page-scroll').on('click', function(e) {
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
        $('html , body').animate({
         scrollTop: elemenTujuan.offset().top - 50
        });
        e.preventDefault();
       });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbars .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.dontClcik').click(function(){
        alert("Sorry this feature cannot be used");
    });
    // typing text animation script

    var typed = new Typed(".typing", {
        strings: ["Fresh Graduate", 'Data Analyst', 'Data Scientist' , "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});