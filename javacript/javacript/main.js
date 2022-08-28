const moon = document.querySelector('#moon');
const stars = document.querySelector('#stars');
const text = document.querySelector('#text');
const button = document.querySelector('#button');



function mouseScroll() {
    let windowScrolly = window.scrollY;

    moon.style.top = windowScrolly * 0.5 + 'px';
    text.style.right = windowScrolly * 3 + 'px';
    button.style.marginTop = windowScrolly * 0.5 +'px';
    stars.style.left = windowScrolly * 0.5 + 'px'

}
window.addEventListener('scroll' , mouseScroll);
