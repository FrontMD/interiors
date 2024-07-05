gsap.registerPlugin(ScrollTrigger);

function homeIntroAnim() {
    console.log("работатет")
    console.log(gsap)

    document.activeElement.blur()

    if(document.querySelector('[data-js="homeIntro"]')) {
        let tl = gsap.timeline();
        //расставляем по местам элементы
        tl.to('[data-js="homeIntroBg"]', {
            top: '0%',
            duration: 2,
            delay: 1
        })
        tl.to('[data-js="homeIntroFakeLogo"]', {
            top: '47px',
            duration: 1
        }, '<')
        tl.to('[data-js="homeIntroFake1"]', {
            top: '-32.5%',
            left: '25.7%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake2"]', {
            top: '26%',
            left: '75%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake3"]', {
            top: '76%',
            left: '34%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake4"]', {
            top: '76%',
            left: '6.2%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake5"]', {
            top: '35.9%',
            left: '-1.8%',
            duration: 2
        }, '<')

        //увеличиваем элементы
        tl.to('[data-js="homeIntroBg"]', {
            scale: 1,
            duration: 2
        }, '> -0.2')
        tl.to('[data-js="homeIntroFake1"]', {
            scale: 1.42,
            top: '-71.5%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake2"]', {
            scale: 1.42,
            top: '8%',
            left: '107%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake3"]', {
            scale: 1.42,
            left: '41%',
            top: '109%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake4"]', {
            scale: 1.42,
            top: '109%',
            left: '-3.8%',
            duration: 2
        }, '<')
        tl.to('[data-js="homeIntroFake5"]', {
            scale: 1.42,
            top: '53.9%',
            left: '-34.8%',
            duration: 2
        }, '<')

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


        /*gsap.fromTo('[data-js="homeIntroBg"]', {
            scale: "0",
        }, {
            scale: 1,
            duration: 1.6,
            ease: "none",
        }, "0");*/
    }
}
