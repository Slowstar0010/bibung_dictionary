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

    Lectur_change_Text(clickedClassName)

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

function Lectur_change_Text(clickedClassName) {
    const Lecture_0 = Lecture_box[0].children[1];
    const Lecture_1 = Lecture_box[1].children[1];
    const Lecture_2 = Lecture_box[2].children[1];
    const Lecture_3 = Lecture_box[3].children[1];
    console.log(clickedClassName);

    if (clickedClassName == "F14") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
        <a href="html/f14/spec_${clickedClassName}">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/cold_start_${clickedClassName}">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/texi_${clickedClassName}">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/take_off_${clickedClassName}">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/navigation_${clickedClassName}">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/landing_${clickedClassName}">항공모함 이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/fule_${clickedClassName}">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/formation_${clickedClassName}">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/radio_${clickedClassName}">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/f14/aa_gun_${clickedClassName}">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/aim_9_${clickedClassName}">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/f14/wvr_rader_${clickedClassName}">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/bvr_rader">레이더 조작 방법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_7">AIM-7 Sparrow</a>
        </li>
        <li class="Lecture_List">
            <a href="html/ ${clickedClassName}/aim_54">AIM-54 Phoenix</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_141">ADM-141A TALD</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/rwr">RWR</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/counter">기만체 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/defit">회피 방법</a>
        </li>
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lantirn">LANTIRN - 타겟팅포드 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        `;
    } 
    else if (clickedClassName == "F15C") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
        <a href="spec.${clickedClassName}">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="cold_start.${clickedClassName}">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="texi.${clickedClassName}">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="take_off.${clickedClassName}">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="navigation.${clickedClassName}">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="fule.${clickedClassName}">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="formation.${clickedClassName}">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="radio.${clickedClassName}">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="aa_gun.${clickedClassName}">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="aim_9.${clickedClassName}">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="wvr_rader.${clickedClassName}">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        <li class="Lecture_List">
            <a href="">레이더 조작 방법</a>
        </li>
        <li class="Lecture_List">
            <a href="">AIM-7 Sparrow</a>
        </li>
        <li class="Lecture_List">
            <a href="">AIM-120 Amraam</a>
        </li>
        <li class="Lecture_List">
            <a href="">RWR</a>
        </li>
        <li class="Lecture_List">
            <a href="">기만체 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="">회피 방법</a>
        </li>
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="">M61A1 - 기총</a>
        </li>
        `;
    }
    else if (clickedClassName == "F15E") {}
    else if (clickedClassName == "F16") {}
    else if (clickedClassName == "F18") {}
    else if (clickedClassName == "F86F") {}
    else if (clickedClassName == "F5") {}
    else if (clickedClassName == "F1") {}
    else if (clickedClassName == "A10A") {}
    else if (clickedClassName == "A10C") {}
    else if (clickedClassName == "AV8") {}
    else if (clickedClassName == "AJS37") {}
    else if (clickedClassName == "M2000") {}
    else if (clickedClassName == "JF17") {}
    else if (clickedClassName == "MIG29" || "SU33" || "SU27") {}
    else if (clickedClassName == "SU25") {}
    else if (clickedClassName == "MIG21") {}
    else if (clickedClassName == "AH64") {}
    else if (clickedClassName == "UH1") {}
    else if (clickedClassName == "SA342") {}
    else if (clickedClassName == "KA50") {}
    else if (clickedClassName == "MI24") {}
    else if (clickedClassName == "MI8") {}
};


imgs.forEach(articleElement => articleElement.addEventListener("click", flip_div));
Retune_Btn.addEventListener("click", Retune_menu)
