function homeIntroAnim() {

    document.activeElement.blur()

    let windowWidth = $(window).width()
    let fakeLogoTop = '47px'

    if(windowWidth < 1200) {
        fakeLogoTop = '42px'
    }

    if(document.querySelector('[data-js="homeIntro"]')) {
        let tl = gsap.timeline();
        //расставляем по местам элементы
        tl.to('[data-js="homeIntroFakeLogo"]', {
            top: fakeLogoTop,
            duration: 1,
            delay: 1
        })
        tl.to('[data-js="homeIntroBg"]', {
            top: '0%',
            duration: 2,
        }, '<')

        //увеличиваем элементы
        tl.to('[data-js="homeIntroBg"] > *', {
            scale: 1,
            duration: 2
        }, '>')
        tl.to('[data-js="homeIntroFake1"]', {
            top: '0%',
            left: '50%',
            duration: 2
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake4"]', {
            top: '70%',
            left: '5%',
            duration: 2
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake2"]', {
            top: '20%',
            left: '85%',
            duration: 2
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake3"]', {
            top: '100%',
            left: '70%',
            duration: 2
        }, '< +0.2')
        tl.to('[data-js="homeIntroFake5"]', {
            top: '20%',
            left: '10%',
            duration: 2
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
            duration: 0
        }, '>')

    }
}
