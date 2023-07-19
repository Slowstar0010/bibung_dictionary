const wrapper = document.querySelector(".wrapper");
const items = document.querySelector(".itmes");
const item = document.querySelector(".item");

let startX = 0;
let moveX = 0;
let currentIdx = 0;
let positions = [];

function initializeData() {
    const isActive = items.classList.contains('active');
    if (isActive) items.classList.remove('active');

    const wrapper = wrapper.clientWidth;
    const itemWidth = item[0].clientWidth;
    const b = (wrapper - itemWidth) / 2;
    const initX = Math.floor((itemWidth - b) * -1);

    let pos = [];
    for (let i=0; i<itemCount; i++) {
        pos.push(intX - itemWidth * i);
    }
    positions = pos

    items.style.width = (itemCount + 1) * 100 + '%';
    items.style.left = positions[currentIdx] + 'px';
}

window.addEventListener('resize', initializeData)
window.addEventListener('load', initializeData)