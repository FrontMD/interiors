@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/pages/home/home-reviews/home-reviews.js")
@@include("../../blocks/modules/m-projects/m-projects.js")
@@include("../../blocks/modules/modals/modals.js")


document.addEventListener('DOMContentLoaded', () => {
    headerControllInit();
    mProjects();
    homeReviews();
})