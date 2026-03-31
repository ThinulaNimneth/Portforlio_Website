// menu icon dev

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click' , () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open')
});

//when link click menu closed
mobileMenu.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});