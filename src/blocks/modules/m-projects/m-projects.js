gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)


function mProjects() {
    const mProjectsEl = document.querySelector('[data-js="mProjects"]')

    if(!mProjectsEl) return

    const windowWidth = $(window).width()

    if(windowWidth > 1199) {
        mProjectsSliderInit(mProjectsEl)
    } else {
        return
    }

}

function mProjectsSliderInit(mProjectsEl) {
    const tabs = mProjectsEl.querySelector('[data-js="mProjectsTabs"]');
    const slides = mProjectsEl.querySelector('[data-js="mProjectsSlides"]');

    let tabsSliderEx = new Swiper(tabs, {
        slidesPerView: 'auto',
        spaceBetween: 4,
        freeMode: true,
        breakpoints: {
        }
    })

    let slidesSliderEx = new Swiper(slides, {
        slidesPerView: 1,
        effect: 'fade',
        allowTouchMove: false,
        autoHeight: true,
        thumbs: {
            swiper: tabsSliderEx
        },
    })

    const content = mProjectsEl.querySelector('[data-js="mProjectsContainer"]');
    const mProjectsAll = mProjectsEl.querySelector('[data-js="mProjectsAll"]');
    
    let projectsAnim = gsap.to(content, {
        y: $(window).height() - $(content).height() + 190,
        overwrite: true,
    })

    let st = ScrollTrigger.create({
        trigger: mProjectsEl,
        start: '315px top',
        endTrigger: mProjectsAll,
        end: 'bottom bottom',
        pin: true,
        scrub: true,
        animation: projectsAnim
    })

    slidesSliderEx.on('transitionEnd', function () {
        document.activeElement.blur()
        
       // gsap.to(window, { duration: 0.4, scrollTo: 400 });

        projectsAnim.revert()
        st.kill();


        projectsAnim = gsap.to(content, {
            y: $(window).height() - $(content).height() + 190,
            overwrite: true,
        })
    
        st = ScrollTrigger.create({
            trigger: mProjectsEl,
            start: '315px top',
            endTrigger: mProjectsAll,
            end: 'bottom bottom',
            pin: true,
            scrub: true,
            animation: projectsAnim
        })


    });
}