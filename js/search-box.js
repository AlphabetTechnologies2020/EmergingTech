
const searchBlog = () => {
    let filter = document.getElementById('search').value.toUpperCase();

    let ul = document.getElementById('menu');

    let li = ul.getElementsByTagName('li');

    // let emptyArray = [];

    for (var i=0; i<li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent || a.innerHTML;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            let data = '<li>'+textValue+'</li>';
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}

// const searchWrapper = document.querySelector(".search-bar");
// const suggBox = searchWrapper.querySelector(".blog");

// const showSuggestions = (list) => {
//     let listData;
//     if(!list.length){
//         // userValue = inputBox.value;
//         // listData = '<li>'+ userValue +'</li>';
//     }else{
//         listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }
