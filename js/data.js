const divs = document.querySelectorAll(".Module_imgs");
const Lecture_boxs = document.querySelectorAll(".Lecture_box")
const Lecture_0 = Lecture_box[0].children[1];
const Lecture_1 = Lecture_box[1].children[1];
const Lecture_2 = Lecture_box[2].children[1];
const Lecture_3 = Lecture_box[3].children[1];

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

function Lectur_change_Text(clickedClassName) {
    console.log(clickedClassName);

    if (clickedClassName == "F14") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/landing">항공모함 이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
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
            <a href="html/${clickedClassName}/aim_54">AIM-54 Phoenix</a>
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
            <a href="html/${clickedClassName}/gbu">GBU</a>
        </li>
        `;
    } 
    else if (clickedClassName == "F15C") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
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
            <a href="html/${clickedClassName}/aim_120">AIM-120 Amraam</a>
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
        `;
    }
    else if (clickedClassName == "F15E") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
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
            <a href="html/${clickedClassName}/aim_54">AIM-120 Amraam</a>
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
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/blu_07b">BLU-107B Durendal</a>
        </li>
        `;
    }
    else if (clickedClassName == "F16") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
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
            <a href="html/${clickedClassName}/aim_54">AIM-120 Amraam</a>
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
            <a href="html/${clickedClassName}/agm_65">AGM-65 MAVERICK- 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "F18") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
        <a href="html/${clickedClassName}/landing">항공모함 이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
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
            <a href="html/${clickedClassName}/aim_54">AIM-120 Amraam</a>
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
            <a href="html/${clickedClassName}/agm_65">AGM-65 MAVERICK- 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    } 
    else if (clickedClassName == "F86F") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">AN/M3 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">AN/M3 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        `;
    }
    else if (clickedClassName == "F5") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M39A3 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">M39A3 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/mk84">MK-84 - 자유낙하폭탄</a>
        </li>
        `;
    }
    else if (clickedClassName == "F1") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/r550">R.550 Magic - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/bvr_rader">레이더 조작 방법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/530f">530F</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/530em">530EM</a>
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
            <a href="html/${clickedClassName}/ag_gun">DEFA - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">MATRA - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "A10A") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">GAU-8 Avenger - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">GAU-8/A Avenger - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lantirn">LANTIRN - 타겟팅포드 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/agm_65">AGM-65 MAVERICK- 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "A10C") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">GAU-8 Avenger - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">GAU-8/A Avenger - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lantirn">LANTIRN - 타겟팅포드 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/agm_65">AGM-65 MAVERICK- 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "AV8") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">GAU-12 Equalizer - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">GAU-12 Equalizer - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">LAU-10 - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lantirn">LANTIRN - 타겟팅포드 조작법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/agm_65">AGM-65 MAVERICK- 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "AJS37") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">AKNA - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">RB-24 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        `;
        Lecture_3.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/ag_gun">AKNA - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">ARAK - 로켓</a>
        </li>    
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/rb05">RB05 - 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/agm_65">RB75 MAVERICK - 공대지미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">BK90</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/rb15">RB15F</a>
        </li>
        `;
    }
    else if (clickedClassName == "M2000") {
        Lecture_0.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/spec">기체 스펙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cold_start_">시동절차</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/texi">계기&지상주행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/take_off">이륙&착륙</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/navigation">항법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/fule">공중급유</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/formation">편대비행</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/radio">라디오 조작 방법</a>
        </li>
        `;
        Lecture_1.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aa_gun">M61A1 - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/aim_9">AIM-9 - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/r550">R.550 Magic - 단거리 미사일</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/wvr_rader">레이더 조작 방법</a>
        </li>
        `;
        Lecture_2.innerHTML = `
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/bvr_rader">레이더 조작 방법</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/530f">530F</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/530em">530EM</a>
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
            <a href="html/${clickedClassName}/ag_gun">DEFA - 기총</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/lau">MATRA - 로켓</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/jdam">JDAM</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/gbu_">GBU</a>
        </li>
        <li class="Lecture_List">
            <a href="html/${clickedClassName}/cbu">CBU</a>
        </li>
        `;
    }
    else if (clickedClassName == "JF17") {}
    else if (clickedClassName == "MIG29" || "SU33" || "SU27") {}
    else if (clickedClassName == "SU25") {}
    else if (clickedClassName == "MIG21") {}
    else if (clickedClassName == "MIG19") {}
    else if (clickedClassName == "MIG15") {}
    else if (clickedClassName == "AH64") {}
    else if (clickedClassName == "UH1") {}
    else if (clickedClassName == "SA342") {}
    else if (clickedClassName == "KA50") {}
    else if (clickedClassName == "MI24") {}
    else if (clickedClassName == "MI8") {}
};

divs.forEach(div => div.addEventListener("click", flip_div));