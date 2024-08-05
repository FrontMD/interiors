function mProjects() {
    const mProjectsEl = document.querySelector('[data-js="mProjects"]')

    if(!mProjectsEl) return

    projectsAnimationMarkup()

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
        speed: 1000,
        spaceBetween: 4,
        freeMode: true,
        breakpoints: {
        }
    })

    let slidesSliderEx = new Swiper(slides, {
        slidesPerView: 1,
        effect: 'fade',
        speed: 1000,
        allowTouchMove: false,
        autoHeight: true,
        thumbs: {
            swiper: tabsSliderEx
        },
    })

    slidesSliderEx.on('transitionEnd', function () {
        refreshPageAnimation()
    })
   
}

/* разметка проектов */
function projectsAnimationMarkup() {
    const projectsAnim = document.querySelectorAll('[data-anim="projectAnim"]')

    if(projectsAnim.length < 1) return

    projectsAnim.forEach(projectAnim => {

        let project = projectAnim.querySelector('[data-js="projectCard"]')

        let projectHeight = project.offsetHeight
        let projectWidth = project.offsetWidth

        projectAnim.style.height = projectHeight + "px"
        projectAnim.style.width = projectWidth + "px"

    })

}