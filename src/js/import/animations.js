@@include("../../blocks/components/cookie/cookie.js")

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let addTime = 800;

const preloader = document.querySelector('[data-js="preloader"]')
const currentPage = document.querySelector('[data-js="pageAnimWrap"]')
let currentPageName = currentPage ? currentPage.dataset.page : ""


if(preloader !== null ) {
	setTimeout(() => {
		$(preloader).fadeOut("slow")

        if(currentPageName === "home") {
            $('body').removeClass('no-scroll')
            homeIntroAnim();
            startPageAnimation()
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
        tl.to('[data-js="homeIntroContent"]', {
            opacity: 1,
            duration: 1
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
    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1.5,
        animation: mainTimeline,
    })

    currentPage.style.minHeight = "100vh"

    const allSectionSelectors = [
        '[data-js="homeIntro"]',
        '[data-js="homeNumbers"]',
        '[data-js="mProjects"]',
        '[data-js="homeAbout"]',
        '[data-js="homeReviews"]',
        '[data-js="mContacts"]',
        '[data-js="homeDiscussion"]',
        '[data-js="footer"]'
    ]

    allSectionSelectors.forEach((selector, index) => {

        let section = document.querySelector(selector)

        section.style.position = 'absolute'
        section.style.width = "100%"

        if(index == 0) {
            section.style.top = "0"
        } else if (index == allSectionSelectors.length - 1) {
            section.style.bottom = "0"
            section.style.position = 'relative'
        } else {
            section.style.top = "100%"
        }
    })

    //первый экран
    mainTimeline.fromTo('[data-js="homeIntro"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 0.9,
		ease: "none",
	}, "0");

    //цифры

    mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
		top: "-20%"
	}, {
		top: "0",
		duration: 2.4,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbersQuote"]', {
		y: "0"
	}, {
		y: "150%",
		duration: 2.4,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbers"]', {
		y: "0"
	}, {
		y: "-100%",
		duration: 1.2,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbers"]', {
		y: "-100%"
	}, {
		y: "-200%",
		duration: 1.2,
		ease: "none",
	}, ">");

    //проекты
    mainTimeline.fromTo('[data-js="mProjects"]', {
		top: "100%",
	}, {
		top: "-315px",
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
    mainTimeline.fromTo('[data-js="homeAbout"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1,
		ease: "none",
	}, "< -0.2");

    mainTimeline.fromTo('[data-js="homeAbout"]', {
		scale: "0.3",
	}, {
		scale: "1",
		duration: 1,
		ease: "none",
	}, ">");

    mainTimeline.fromTo('[data-js="homeAbout"]', {
		y: "-100%",
	}, {
		y: "-200%",
		duration: 1.5,
		ease: "none",
	}, "> +0.2");

    //истории
    mainTimeline.fromTo('[data-js="homeReviews"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="homeReviews"]', {
		y: "-100%",
	}, {
		y: "-200%",
		duration: 1,
		ease: "none",
	}, ">");

    //контакты
    mainTimeline.fromTo('[data-js="mContacts"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1.2,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="mContacts"]', {
		y: "-100%",
	}, {
		y: () => {
            return ( 0 - document.querySelector('[data-js="mContacts"]').offsetHeight - document.querySelector('[data-js="homeDiscussion"]').offsetHeight) + "px"
        },
		duration: 1,
		ease: "none",
	}, ">");

    //тексты
    mainTimeline.fromTo('[data-js="homeDiscussion"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 1,
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