const menu =document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.onclick = ()=>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
}
closeBtn.onclick = ()=>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
}