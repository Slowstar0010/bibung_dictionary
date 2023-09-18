const imgs = document.querySelectorAll(".Module_imgs");
let styleElement = null;

function flip_div(event) {
    const clickedClassName = event.target.classList.item(event.target.classList.length - 1);

    // 스타일 요소가 없을 경우에만 생성합니다.
    if (!styleElement) {
        styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
    }

    // 스타일 요소의 innerHTML을 업데이트하여 스타일을 추가 또는 수정합니다.
    styleElement.innerHTML = `
        .${clickedClassName}:hover { transform: rotateY(180deg); }
        .${clickedClassName} { transform: rotateY(180deg); }
    `;
}

imgs.forEach(articleElement => articleElement.addEventListener("click", flip_div));
