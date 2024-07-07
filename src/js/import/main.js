

/*function num_word(value, words) {
	value = Math.abs(value) % 100;
	var num = value % 10;
	if (value > 10 && value < 20) return words[2];
	if (num > 1 && num < 5) return words[1];
	if (num == 1) return words[0];
	return words[2];
}

function myLockBody() {
	$('html').addClass('with-fancybox');
	$('body').addClass('hide-scrollbar');
}
function myUnlockBody() {
	$('html').removeClass('with-fancybox');
	$('body').removeClass('hide-scrollbar');
}

$.fn.isXScrollable = function () {
	return this[0].scrollWidth > this[0].clientWidth;
};

$.fn.isYScrollable = function () {
	return this[0].scrollHeight > this[0].clientHeight;
};

$.fn.isScrollable = function () {
	return this[0].scrollWidth > this[0].clientWidth || this[0].scrollHeight > this[0].clientHeight;
};

//Инициализация фансибокса
document.addEventListener('DOMContentLoaded', () => {
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: '<svg><use xlink:href=img/sprites/sprite.svg#card_arrow></use></svg>',
                nextTpl: '<svg><use xlink:href=img/sprites/sprite.svg#card_arrow></use></svg>',
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        }

    });
})*/


document.addEventListener('DOMContentLoaded', () => {
    // скролл по странице
    const anchors = document.querySelectorAll('a[href*="#"]')

    if(anchors.length > 0) {   
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href').substr(1)
          
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
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