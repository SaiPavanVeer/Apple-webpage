const logo =document.querySelector('.filters-list');
const menu = document.querySelector('.show-filters');
menu.addEventListener('click',function(){
    logo.classList.toggle('showmenu');
});