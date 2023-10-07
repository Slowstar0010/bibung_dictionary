const imgs = document.querySelectorAll(".Module_imgs");
let styleElement = null;
const Retune_Btn = document.querySelector(".Retune_Btn")
const Lecture_box = document.querySelectorAll(".Lecture_box")

function flip_div(event) {
    const clickedClassName = event.target.classList.item(event.target.classList.length - 1);

    if (!styleElement) {
        styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
    .Lecture {
        display: block;
    }
    
    .${clickedClassName}:hover {
        display: none;
    }`;
{}
    return ClickedName = clickedClassName

}


function Retune_menu(event) {
    if (!styleElement) {
        styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = `
    .Lecture {
        display: none;
    }

    .${ClickedName}:hover {
        display: flex;
    }

    }`;

    
}

imgs.forEach(articleElement => articleElement.addEventListener("click", flip_div));
Retune_Btn.addEventListener("click", Retune_menu)
