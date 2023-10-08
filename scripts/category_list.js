const lecture_box = document.querySelector('.Lecture_box');


const fetchCategoryList = () => {
    return fetch('../assets/data/topic.json')
            .then((res) => res.json())
            .then((data) => {
                

                const categories = data.categories;
                
                categories.forEach((c, idx) => {
                    console.log(c, idx)
                })
            })
}