@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/pages/home/home-intro/home-intro.js")
@@include("../../blocks/modules/pages/home/home-reviews/home-reviews.js")
@@include("../../blocks/modules/m-projects/m-projects.js")

document.addEventListener('DOMContentLoaded', () => {
    homeIntroAnim()
    mProjects()
    homeReviews()
})