const elHeader = document.querySelector('.site-header')
const elNavToggler = elHeader.querySelector('js-nav-toggler')

elNavToggler.addEventListener('click', function(){
    elHeader.classList.toggle('site-header--active')
})