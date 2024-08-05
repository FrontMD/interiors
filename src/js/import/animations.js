@@include("../../blocks/components/cookie/cookie.js")

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let addTime = 800;


const preloader = document.querySelector('[data-js="preloader"]')
const currentPage = document.querySelector('[data-js="pageAnimWrap"]')
let currentPageName = currentPage ? currentPage.dataset.page : ""

const windowHeight = window.innerHeight

if(preloader !== null ) {
	setTimeout(() => {
		$(preloader).fadeOut("slow")

        if(currentPageName === "home") {
            $('body').removeClass('no-scroll')
            titlesMarkup();
            heightAnimMarkup();
            homeIntroAnim();
            startPageAnimation();
            cursorRunAway();
        } else {
            $('body').removeClass('no-scroll')
            cookieInit()
        }

	}, 4600)
}

function startPageAnimation() {
    if(currentPageName === "home") {
        homePageAnimation()
    } else {
        return
    }
}

function refreshPageAnimation() {
    if (typeof scrollTriggerObject !== "undefined") scrollTriggerObject.kill();
	mainTimeline.clear();

    startPageAnimation();
}


window.addEventListener('resize', () => {
    refreshPageAnimation()
});


/** Стартовая анимация первого экрана главной страницы */
function homeIntroAnim() {

    document.activeElement.blur()

    let windowWidth = $(window).width()
    let fakeLogoTop = '47px'

    if(windowWidth < 1200) {
        fakeLogoTop = '42px'
    }

    if(windowWidth < 501) {
        fakeLogoTop = '32px'
    }

    if(document.querySelector('[data-js="homeIntro"]')) {
        let tl = gsap.timeline();
        //ставим на место лого
        tl.to('[data-js="homeIntroFakeLogo"]', {
            top: fakeLogoTop,
            duration: 1,
            delay: 1
        })
        //увеличиваем элементы
        tl.to('[data-js="homeIntroBg"] > *', {
            scale: '0.48',
            duration: 2,
        }, '<')
        tl.to('[data-js="homeIntroFake1"]', {
            scale: '1',
            opacity: '1',
            duration: 1
        }, '>')
        tl.to('[data-js="homeIntroFake4"]', {
            scale: '1',
            opacity: '1',
            duration: 1
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake2"]', {
            scale: '1',
            opacity: '1',
            duration: 1
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake3"]', {
            scale: '1',
            opacity: '1',
            duration: 1
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake5"]', {
            scale: '1',
            opacity: '1',
            duration: 1
        }, '< +0.2')
        tl.to('[data-js="homeIntroBg"] > *', {
            scale: 1,
            duration: 2
        }, '> + 0.2')

        //убираем элементы из окна
        tl.to('[data-js="homeIntroFake1"]', {
            scale: '2',
            top: '-100%',
            duration: 1
        }, '< + 0.5')
        tl.to('[data-js="homeIntroFake4"]', {
            scale: '2',
            left: '-40%',
            top: '120%',
            duration: 1
        }, '< +0.5')
        tl.to('[data-js="homeIntroFake2"]', {
            scale: '2',
            left: '140%',
            top: '50%',
            duration: 1
        }, '< +0.5')
        tl.to('[data-js="homeIntroFake5"]', {
            scale: '2',
            left: '-60%',
            top: '20%',
            duration: 1
        }, '< +0.5')
        tl.to('[data-js="homeIntroFake3"]', {
            scale: '2',
            left: '140%',
            top: '120%',
            duration: 1
        }, '< +0.2')


        //показываем контент
        tl.to('[data-js="siteHeader"]', {
            opacity: 1,
            duration: 1
        }, '>')

        tl.to('[data-js="homeIntroTitle"] [data-js="titleAnimInternal"]', {
            marginTop: 0,
            duration: 0.3,
            delay: 1
        }, '<')

        tl.to('[data-js="homeIntroContent"]', {
            opacity: 1,
            duration: 1,
        }, '<')
        tl.to('[data-js="homeIntroFakeLogo"]', {
            opacity: 0,
            duration: 1
        }, '> +0.5')
        tl.to('[data-js="homeIntroFakeLogo"]', {
            display: 'none',
            duration: 0,
            onComplete: () => {
                cookieInit()
            }
        }, '>')

    }
}

/** Общая анимация главной страницы */
function homePageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1.5,
        animation: mainTimeline,
    })

    //первый экран и цифры с картинкой
    mainTimeline.fromTo('[data-js="animContainerHome1"]', {
		y: "0",
	}, {
		y: () => {
            let containerHeight = document.querySelector('[data-js="animContainerHome1"]').offsetHeight;
            return -((containerHeight - window.innerHeight) / containerHeight * 100) + "%"
        },
		duration: 1.8,
		ease: "none",
	}, "0");

    mainTimeline.fromTo('[data-js="homeNumbers"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
		duration: 0.5,
        delay: 0.3,
        marginTop: "0",
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbersQuote"] [data-anim="heightEl"]', {
        height: 0
    }, {
        height: "100%",
        delay: 0.8,
		duration: 0.4,
		ease: "none",
	}, "< -0.5");

    mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
		top: "-20%"
	}, {
		top: "0",
		duration: 3.2,
		ease: "none",
	}, "< -0.8");

    mainTimeline.fromTo('[data-js="homeNumbersQuote"]', {
		y: "0"
	}, {
		y: "150%",
		duration: 3.2,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="animContainerHome1"]', {
		top: "0",
	}, {
		top: "-100vh",
		duration: 1.2,
		ease: "none",
	}, "> -1.4");

    //проекты
    mainTimeline.fromTo('[data-js="mProjects"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
        marginTop: 0,
        duration: 0.5,
        delay: 0.3,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="animContainerHome2"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
		y: "0",
	}, {
		y: () => {
            return -(document.querySelector('[data-js="mProjectsContainer"]').offsetHeight - window.innerHeight - 95) + "px"
        },
		duration: 1.5,
		ease: "none",
        onUpdate: () => {
            projectsAnimation()
        },
	}, ">");

    mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
		opacity: "1",
	}, {
		opacity: "0",
		duration: 2,
		ease: "none",
	}, ">");

    mainTimeline.fromTo('[data-js="mProjectsControls"]', {
		opacity: "1",
	}, {
		opacity: "0",
		duration: 2,
		ease: "none",
	}, "<");

    //как мы работаем
    mainTimeline.fromTo('[data-js="animContainerHome3"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1,
		ease: "none",
	}, "< -0.2");

    mainTimeline.fromTo('[data-js="animContainerHome3"]', {
		scale: "0.3",
	}, {
		scale: "1",
		duration: 1,
		ease: "none",
	}, ">");

    mainTimeline.fromTo('[data-js="homeAbout"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
        marginTop: 0,
        duration: 0.5,
        delay: 0.3,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeAbout"] [data-anim="heightEl"]', {
        height: 0
    }, {
        height: "100%",
        delay: 0.3,
		duration: 0.4,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="animContainerHome3"]', {
		y: "-100%",
	}, {
		y: "-200%",
		duration: 1.5,
		ease: "none",
	}, "> +0.1");

    //истории, контакты, текст
    mainTimeline.fromTo('[data-js="animContainerHome4"]', {
		y: "0",
	}, {
		y: "-100vh",
		duration: 1,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeReviews"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
        marginTop: 0,
        duration: 0.4,
        delay: 0.5,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeReviews"] [data-anim="heightEl"]', {
        height: 0
    }, {
        height: "100%",
        delay: 0.5,
		duration: 0.5,
		ease: "none",
	}, "< -0.5");

    mainTimeline.fromTo('[data-js="animContainerHome4"]', {
		y: "-100vh",
	}, {
		y: "-100%",
		duration: 2,
		ease: "none",
	}, "> +0.1");

    mainTimeline.fromTo('[data-js="mContacts"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
        marginTop: 0,
        duration: 0.4,
        delay: 0.3,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="mContacts"] [data-anim="heightEl"]', {
        height: 0
    }, {
        height: "100%",
		duration: 0.5,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeDiscussion"] [data-js="titleAnimInternal"]', {
        marginTop: "1em"
    }, {
        marginTop: 0,
        duration: 0.4,
        delay: 0.3,
		ease: "none",
	}, "> +0.4");

    mainTimeline.fromTo('[data-js="homeDiscussion"] [data-anim="heightEl"]', {
        height: 0
    }, {
        height: "100%",
		duration: 0.4,
		ease: "none",
	}, "<");

    //подвал
    /*mainTimeline.fromTo('[data-js="footer"]', {
		bottom: "-100%",
	}, {
		bottom: "0",
		duration: 1,
		ease: "none",
	}, ">");*/
}


/* разметка заголовков */
function titlesMarkup() {
    const titles = document.querySelectorAll('[data-anim="title"]')

    if(titles.length < 1) return

    titles.forEach(title => {
        let titleText = title.innerHTML
        let textArray = titleText.split(" ")

        let newTitleHtml = ''

        textArray.forEach(textItem => {
            newTitleHtml += ` <span class="title-anim-external"><span class="title-anim-internal" data-js="titleAnimInternal">${textItem}</span></span>`
        })

        title.innerHTML = newTitleHtml
    })
}

/* разметка анимации высоты */
function heightAnimMarkup() {
    const els = document.querySelectorAll('[data-anim="heightEl"]')

    if(els.length < 1) return

    els.forEach(el => {
        let contentHeight = el.querySelector('[data-anim="heightContent"]').offsetHeight
        let elWrap = el.closest('[data-anim="heightWrap"]')

        elWrap.style.height = contentHeight + "px"
    })
}

/* анимация проектов */
function projectsAnimation() {
    const projectsGroups = document.querySelectorAll('[data-js="mProjectsSlides"] .swiper-slide-active [data-js="mProjectsGroup"]')
    const showPosition = 20

    if(projectsGroups.length < 1) return

    console.log("цикл")

    projectsGroups.forEach((projectGroup, index)=> {
        
        let projectGroupPosition = projectGroup.getBoundingClientRect()
        let projectGroupBottomPosition = windowHeight - projectGroupPosition.bottom

        let projectAnimWraps = projectGroup.querySelectorAll('[data-anim="projectAnimWrap"]')

        /*console.log("группа: " + index)
        console.log(projectGroupPosition.bottom)
        console.log(windowHeight)
        console.log(projectGroupBottomPosition)*/

        projectAnimWraps.forEach(projectAnimWrap => {
            if(projectGroupBottomPosition > showPosition) {
                projectAnimWrap.style.height = "100%"
            } else {
                projectAnimWrap.style.height = "0%"
            }
        })
    
    })
}

/* анимация картинок контактов */
function cursorRunAway() {
    const cursorRunAwayBlock = document.querySelector('[data-js="cursorRunAwayBlock"]');

    if(!cursorRunAwayBlock) return

    const cursorRunAwayItems = cursorRunAwayBlock.querySelectorAll('[data-js="cursorRunAwayBlock"] > div')

    console.log(cursorRunAwayItems)

    cursorRunAwayBlock.addEventListener("mouseenter", (e) => {
        let currentBlock = e.target
        console.log(currentBlock)

        currentBlock.addEventListener('mouseleave', mouseleaveHendler)

        function mouseleaveHendler() {
            console.log("уход")
        }
    })

}