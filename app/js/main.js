const burgerMenu = document.querySelector('.header__burger-menu');
if(burgerMenu) {
    const menuList = document.querySelector('.menu');
    burgerMenu.addEventListener('click', function(){
        burgerMenu.classList.toggle('menu--active')
        menuList.classList.toggle('menu--active')
    })
}
