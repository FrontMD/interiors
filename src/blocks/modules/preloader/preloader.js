@@include("../pages/home/home-intro/home-intro.js")

const preloader = document.querySelector('[data-js="preloader"]')
if(preloader !== null ) {
	setTimeout(() => {
		$(preloader).fadeOut("slow")
		$('body').removeClass('no-scroll')
		homeIntroAnim();
	}, 4600)
}