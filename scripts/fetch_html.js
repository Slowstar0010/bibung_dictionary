/** 
 * XMLHttpRequest를 이용한 방법
 * 
 * XMLHttpRequest는 Html에서 제공하는 API로 웹 브라우저와 웹 서버간에 데이터를교환할 수 있는 기능을 제공, AJAX
 * 비동기작업이므로(Promise객체를 반환) Promise를 사용해주는게 좋음.
 */

const fetchHtmlWithXhr = (filename, tagname, target) => {
    return new Promise((resolve, reject) => {
        if(!filename || !target) {
            reject(new Error('파일이름, 타겟명은 필수 입니다.'));
            return;
        }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', filename, true);    // xhr.opne(method, directory, resType 여부)  
    xhr.responseType = 'text'           // responseType이 true를 줬기때문에 응답 형식을 text로해야함.
                                        // 기본 응답은 arrayBuffer , [2B, AB, 33, DD....]

    xhr.onload = () => {
        if(xhr.status === 200) {
            const parser = new DOMParser();
            const parsedDocument = parser.parseFromString(xhr.responseText, 'text/html');
            const currTag = parsedDocument.querySelector(tagname);
            const targetElement = document.querySelector(target);
            
            if(!currTag) {
                reject(new Error(`${target}을(를) 찾을 수 없습니다.`))
            }

            targetElement.appendChild(currTag);
            resolve();
        
        } 

        reject(new Error(`html태그를 로드하는 동안 오류가 발생했습니다. 상태:${xhr.status}`))
    }

    xhr.onerror = () => {
        reject(new Error("파일 로드 중에 오류가 발생했습니다."))
    };

    xhr.send();
    })
}

/** 
 *  fetch API를 이용한 방법(미완)
 */

const fetchHtmlWithFetchApi = (filename, tagname, target) => {
    
    
        fetch(url)
            .then((res) => {
                if(!res.ok) {
                    reject()
                    return;
                }

                return res.text();
            })
            .then((html) => {
                const parser = new DOMParser();
                const parsedDocument = parser.parseFromString(html, 'text/html');
                const currTag = parsedDocument.querySelector(tagname);
                const targetElement = document.querySelector(target);

                targetElement.appendChild(currTag);
                resolve();
            })


}
/**
 *  각 비동기 함수를 순서(동기적)으로 실행
 * 
 * 
 */

const loadHtmlSequentially = async () => {
    try {
       await fetchHtmlWithXhr('../html/BlueJet.html', 'section.blue-jet', '#bibung-app') 
       await fetchHtmlWithXhr('../html/RedJet.html', 'section.red-jet', '#bibung-app') 
       await fetchHtmlWithXhr('../html/Helicopter.html', 'section.common-heli', '#bibung-app') 
    } catch (error) {
        throw Error(error);
    }
}