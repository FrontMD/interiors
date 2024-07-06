function mProjects() {
    // Инициализируем слайдеры
    const tabs = document.querySelector('[data-js="mProjectsTabs"]');
    const slides = document.querySelector('[data-js="mProjectsSlides"]');

    if(!tabs || !slides) return

    let tabsSliderEx = new Swiper(tabs, {
        slidesPerView: 'auto',
        spaceBetween: 4,
        freeMode: true,
        breakpoints: {
        }, 
        on: {
            realIndexChange: function() {
                document.activeElement.blur()
                mProjectsAnimReload()
            },
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

    mProjectsAnimInit()
}


function mProjectsAnimInit() {
    //расчитываем высоту секции
    //запускаем анимацию.
    console.log('запустили аниацию')
    return
}

function mProjectsAnimReload() {
    //Прокручиваем секцию к началу
    //вызываем инициализацию анимации
    console.log('пересчитали аниацию')
    return
}