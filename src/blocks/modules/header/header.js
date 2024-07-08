gsap.registerPlugin ( ScrollTrigger );

function headerControllInit() {
    let oldScrollY = 0;
    let header = $('[data-js="siteHeader"]');
    let screenHeight = $(window).height();
    

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if(scroll > oldScrollY) {
            if(scroll >= screenHeight) {
                header.addClass("site-header--small");
            }
            if(scroll >= screenHeight * 0.85) {
                header.addClass("site-header--hidden");
            }
        } else {
            if(scroll < screenHeight) {
                header.removeClass("site-header--small");
            }

            if(scroll > screenHeight * 0.85) {
                header.addClass("site-header--hidden");
            } else {
                header.removeClass("site-header--hidden");
            }
        }





        /*if(scroll > oldScrollY && scroll <= screenHeight) {
            header.addClass("site-header--small");
        } else if (scroll > oldScrollY && scroll >= screenHeight * 0.85) {
            header.addClass("site-header--hidden");
        } else if (scroll <= oldScrollY && scroll <= screenHeight) {
            header.removeClass("site-header--small");
            if (scroll <= oldScrollY && scroll <= screenHeight * 0.85) {
                header.removeClass("site-header--hidden");
            }
        } else {
            header.addClass("site-header--hidden");
        }

        /*if (scroll >= screenHeight * 0.85) {
            if(scroll < oldScrollY && scroll <= screenHeight) {
                header.addClass("site-header--hidden");
                header.removeClass("site-header--small");
            } else if(scroll < oldScrollY) {
                header.removeClass("site-header--hidden");
                header.addClass("site-header--small");
            } else {
                header.addClass("site-header--hidden");
            }

        } else {
            header.removeClass("site-header--small");
            header.removeClass("site-header--hidden");
        }*/

        oldScrollY = scroll
    });
}
