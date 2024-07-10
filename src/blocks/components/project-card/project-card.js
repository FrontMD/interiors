function projectCardCursor() {
    const projectCards = document.querySelectorAll('[data-js="projectCard"]')

    if(projectCards.length < 1) return

    let cursorIcon = document.querySelector('[data-js="projectCardCursor"]');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            cursorIcon.style.opacity = 1;
        })

        card.addEventListener('mouseleave', (e) => {
            cursorIcon.style.opacity = 0;
        })


        card.addEventListener('mousemove', function(e){
            $(cursorIcon).css({
                left:  e.clientX,
                top:   e.clientY
            });
        })
    })
}