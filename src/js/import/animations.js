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
            duration: 1,
            onComplete: () => {
                titleAnim(document.querySelector('[data-js="homeIntroTitle"]'))
            }
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

    currentPage.style.minHeight = "100vh"

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

    titlesMarkup()
    heightAnimMarkup()


    //первый экран и цифры с картинкой
    mainTimeline.fromTo('[data-js="animContainerHome1"]', {
		y: "0",
	}, {
		y: () => {
            let containerHeight = document.querySelector('[data-js="animContainerHome1"]').offsetHeight;
            return -((containerHeight - window.innerHeight) / containerHeight * 100) + "%"
        },
		duration: 2,
		ease: "none",
	}, "0");

    mainTimeline.fromTo('[data-js="homeNumbers"]', {}, {
		duration: 0.5,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="homeNumbers"]')
            wrap.querySelectorAll('[data-anim="title"]').forEach(title => {
                titleAnim(title)
            })
        },
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbers"]', {}, {
		duration: 1,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="homeNumbers"]')
            wrap.querySelectorAll('[data-anim="heightEl"]').forEach(el => {
                heightAnim(el)
            })
        }
	}, "<");

    mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
		top: "-20%"
	}, {
		top: "0",
		duration: 3.2,
		ease: "none",
	}, "<");

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
	}, "> -1.2");

    //проекты
    mainTimeline.fromTo('[data-js="animContainerHome2"]', {}, {
		duration: 0.3,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="animContainerHome2"]')
            wrap.querySelectorAll('[data-anim="title"]').forEach(title => {
                titleAnim(title)
            })
        }
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
        onComplete: () => {
            let wrap = document.querySelector('[data-js="animContainerHome3"]')
            wrap.querySelectorAll('[data-anim="title"]').forEach(title => {
                titleAnim(title)
            })
            wrap.querySelectorAll('[data-anim="heightEl"]').forEach(el => {
                heightAnim(el)
            })
        }
	}, ">");

    mainTimeline.fromTo('[data-js="animContainerHome3"]', {
		y: "-100%",
	}, {
		y: "-200%",
		duration: 1.5,
		ease: "none",
	}, "> +0.2");

    //истории, контакты, текст
    mainTimeline.fromTo('[data-js="animContainerHome4"]', {
		y: "0",
	}, {
		y: "-100%",
		duration: 3,
		ease: "none",
	}, "<");

    mainTimeline.fromTo('[data-js="animContainerHome4"]', {}, {
		duration: 0.4,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="homeReviews"]')
            wrap.querySelectorAll('[data-anim="title"]').forEach(title => {
                titleAnim(title)
            })
            wrap.querySelectorAll('[data-anim="heightEl"]').forEach(el => {
                heightAnim(el)
            })
        }
	}, "<");

    mainTimeline.fromTo('[data-js="animContainerHome4"]', {}, {
		duration: 1.1,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="mContacts"]')
            titleAnim(wrap.querySelector('.m-contacts__title'))
            wrap.querySelectorAll('[data-anim="heightEl"]').forEach(el => {
                heightAnim(el)
            })
        }
	}, ">");

    mainTimeline.fromTo('[data-js="animContainerHome4"]', {}, {
		duration: 0.4,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="mContacts"]')
            titleAnim(wrap.querySelector('.form__title'))
        }
	}, ">");

    mainTimeline.fromTo('[data-js="animContainerHome4"]', {}, {
		duration: 0.7,
		ease: "none",
        onComplete: () => {
            let wrap = document.querySelector('[data-js="homeDiscussion"]')
            wrap.querySelectorAll('[data-anim="title"]').forEach(title => {
                titleAnim(title)
            })
            wrap.querySelectorAll('[data-anim="heightEl"]').forEach(el => {
                heightAnim(el)
            })
        }
	}, ">");

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
            newTitleHtml += ` <span class="title-anim-external"><span class="title-anim-internal animHidden" data-js="titleAnimInternal">${textItem}</span></span>`
        })

        title.innerHTML = newTitleHtml
    })
}

/* анимация заголовков */
function titleAnim(title) {
    const titlesAnimInternal = title.querySelectorAll('[data-js="titleAnimInternal"]')

    titlesAnimInternal.forEach(item => {
        item.classList.remove('animHidden')
    })
}

/* разметка анимации высоты */
function heightAnimMarkup() {
    const els = document.querySelectorAll('[data-anim="heightEl"]')

    if(els.length < 1) return

    els.forEach(el => {

        let elHeight = el.offsetHeight
        let elWrap = el.closest('[data-anim="heightWrap"]')
        let elContent = el.querySelector('[data-anim="heightContent"]')

        elWrap.style.height = elHeight + "px"
        elContent.style.height = elHeight + "px"
        elContent.style.position = "absolute"

        el.classList.add("animHidden")
    })
}

/* анимации высоты */
function heightAnim(el) {
    el.classList.remove("animHidden")
}

/* анимация проектов */
function projectsAnimation() {
    console.log(document.querySelector('[data-js="animContainerHome1"]').getBoundingClientRect())
    console.log(document.querySelector('[data-js="animContainerHome2"]').getBoundingClientRect())
    console.log(document.querySelector('[data-js="animContainerHome3"]').getBoundingClientRect())
    console.log(document.querySelector('[data-js="animContainerHome4"]').getBoundingClientRect())
    const projectsAnim = document.querySelectorAll('[data-js="mProjectsSlides"] .swiper-slide-active [data-anim="projectAnim"]')
    const showPosition = 20

    if(projectsAnim.length < 1) return

    projectsAnim.forEach((projectAnim, index)=> {

        console.log("элемент: " + index)
        console.log(projectAnim)
        
        let projectAnimPosition = projectAnim.getBoundingClientRect()
        let projectAnimBottomPosition = windowHeight - (projectAnimPosition.y + projectAnimPosition.height)
        console.log(projectAnimPosition)

        console.log(windowHeight)
        console.log(projectAnimPosition.y)
        console.log(projectAnimPosition.height)

        console.log(projectAnimBottomPosition)

        let projectAnimWrap = projectAnim.querySelector('[data-anim="projectAnimWrap"]')
    
        if(projectAnimBottomPosition > showPosition) {
            projectAnimWrap.style.height = "100%"
        } else {
            projectAnimWrap.style.height = "0%"
        }
    })
}