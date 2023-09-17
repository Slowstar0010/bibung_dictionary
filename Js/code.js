const articleElements = document.querySelectorAll(".Module_imgs"); // 모듈 이미지를 array로 만들어줌

for (const articleElement of articleElements) { // array 내부 요소들을 for loop로 각각의 event를 만들어줌
    articleElement.addEventListener('click', function(event) { // click event 
        const clickedElement = event.target; // click event 발생시 event.target를 변수로 저장함
        const parentArticle = clickedElement.closest('article.Module_imgs');  // 변수로 저장된 event.target의 부모 요소를 찾고 변수에 저장

        if (parentArticle) {  // 부모 요소가 있을시 실행되는 함수
            const childElements = Array.from(parentArticle.querySelectorAll('.Module_img')); // 부모 요소가 존재할 시 자식을 전부 저장.
            const index = childElements.indexOf(clickedElement); // click event가 일어난 자식요소가 몇번째 index인지 저장

            if (index !== -1) {
                console.log('클릭된 요소의 인덱스:', index);
            } else {
                console.log('클릭된 요소가 부모 article 안에서 찾을 수 없음.');
            }
        }
    });
}
