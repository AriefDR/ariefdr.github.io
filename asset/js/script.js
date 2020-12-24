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

        if(this.scrollY > 1200){
            $(".bar").each(function(){
                $(this).find(".bar-inner").animate({
                  width: $(this).attr("data-width")
                },2000)
              });
        }

    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbars .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
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
        strings: ["Mahasiswa", "Web Developer", "Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});