let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
const cards = document.querySelectorAll('.card');
let currentItem = 0;

function showcard(index) {
    cards.forEach(card => {
        card.classList.remove('active');
        cards[index].classList.add('active');
    });
}
showcard(currentItem);
setInterval(() => {
    currentItem++;
    if (currentItem >= cards.length) currentItem = 0;
    showcard(currentItem);
}, 3000)

const input = document.querySelector('#search-bar');
const medecins = document.querySelectorAll('.medecins-card');

function searchDoctors() {
    const text = input.value.toLowerCase();
    medecins.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(text)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}
input.addEventListener('keyup', searchDoctors);
