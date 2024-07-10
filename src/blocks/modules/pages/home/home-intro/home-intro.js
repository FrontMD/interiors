@@include("../../../../components/cookie/cookie.js")

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
            onComplete: () => cookieInit()
        }, '>')

    }
}
