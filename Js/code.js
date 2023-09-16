const articleElements = document.querySelectorAll(".Module_imgs");

for (const articleElement of articleElements) {
    articleElement.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const parentArticle = clickedElement.closest('article.Module_imgs');

        if (parentArticle) {
            const childElements = Array.from(parentArticle.querySelectorAll('.Module_img')); // 이미지와 div 요소 선택
            const index = childElements.indexOf(clickedElement); // 클릭된 요소의 인덱스 찾기

            if (index !== -1) {
                console.log('클릭된 요소의 인덱스:', index);
            } else {
                console.log('클릭된 요소가 부모 article 안에서 찾을 수 없음.');
            }
        }
    });
}
