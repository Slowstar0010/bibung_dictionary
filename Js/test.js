const articleElements = document.querySelectorAll(".Module_imgs"); // 모듈 이미지를 array로 만들어줌


const Module_imgs_arr = ["F14", "F15E", "F16", "F18", "F86F", "F5", "F1"]
const Module_imgs_2_arr = ["A10C", "AV8", "AJS37", "M2000"]
const Module_casual_imgs_arr = ["F15C", "A10A"]

for (const articleElement of articleElements) { // array 내부 요소들을 for loop로 각각의 event를 만들어줌
    articleElement.addEventListener('click', function(event) { // click event 
        const clickedElement = event.target; // click event 발생시 event.target를 변수로 저장함
        const parentArticle = clickedElement.closest('article.Module_imgs');  // 변수로 저장된 event.target의 부모 요소를 찾고 변수에 저장
        const clickedElement_name = clickedElement.classList; // click event.target의 class를 저장
        const parentArticle_class = parentArticle.classList; // click evnet.target의 부모class를 저장

        if (parentArticle) {  // 부모 요소가 있을시 실행되는 함수
            const childElements = Array.from(parentArticle.querySelectorAll('.Module_img')); // 부모 요소가 존재할 시 자식을 전부 저장.
            const index = childElements.indexOf(clickedElement); // click event가 일어난 자식요소가 몇번째 index인지 저장

            if (index !== -1) {
                const number = index
                console.log('클릭된 요소의 인덱스:', index);

                if (parentArticle_class[1] == "Module_imgs_1") {
                    const Module_Class_name = Module_imgs_arr[number]
                    clickedElement.classList.add(Module_Class_name)
                    console.log(clickedElement)
                }
                else if (parentArticle_class[1] == "Module_imgs_2") {
                    const Module_Class_name = Module_imgs_2_arr[number]
                    clickedElement.classList.add(Module_Class_name)
                    console.log(clickedElement)
                }
                else if (parentArticle_class[1] == "Module_casual_imgs") {
                    const Module_Class_name = Module_casual_imgs_arr[number]
                    clickedElement.classList.add(Module_Class_name)
                    console.log(clickedElement)
                }
            } else {
                console.log('클릭된 요소가 부모 article 안에서 찾을 수 없음.');
            }
        }
    });
}
