const imgs = document.querySelectorAll(".Module_imgs");

function flip_div(event) {
    const clickedClassName = event.target.classList.item(event.target.classList.length - 1);
    console.log(clickedClassName);
}

imgs.forEach(articleElement => articleElement.addEventListener("click", flip_div));
