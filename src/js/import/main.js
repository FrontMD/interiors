document.addEventListener('DOMContentLoaded', () => {
    // скролл по странице
    const anchors = document.querySelectorAll('a[href*="#"]')

    if(anchors.length > 0) {   
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')

          gsap.to(window, { duration: 2, scrollTo: { y: blockID, offsetY: 120 } });
          
        })
      })
    }

    // блоки с обратным ховером
    const reversHoversItems = document.querySelectorAll('[data-js="reversHoversItem"]')

    if(reversHoversItems.length > 0) {
      reversHoversItems.forEach(item => {
        const currentBlock = item.closest('[data-js="reversHoversBlock"]')
        const currentItems = currentBlock.querySelectorAll('[data-js="reversHoversItem"]')

        item.addEventListener('mouseenter', function(e) {
          if(item.classList.contains('site-footer__link--noLink')) return
          currentItems.forEach(currentItem => {
            if(e.target != currentItem) {
              currentItem.classList.add('noHovered')
            }
          })
        })

        item.addEventListener('mouseleave', function(e) {
          currentItems.forEach(currentItem => {
            currentItem.classList.remove('noHovered')
          })
        })
      })
    }
})