function thanksMessageShow() {
    const thanksMessage = document.querySelector("[data-js='thanksMessage']")
    if(!thanksMessage) return
    thanksMessage.classList.add('thanks-message--active');
    setTimeout(() => {
        thanksMessage.classList.remove('thanks-message--active');
    }, 3000)
}