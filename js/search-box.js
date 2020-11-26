
// // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// // if user press any key and release
// inputBox.onkeyup = (e)=>{
//     let userData = e.target.value; //user enetered data
//     let emptyArray = [];
//     if(userData){
        
//         searchWrapper.classList.add("active"); //show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");

//             let a = li[i].getElementsByTagName('a')[0];
//         let textValue = a.textContent || a.innerHTML;

//         if (textValue.toUpperCase().indexOf(filter) > -1) {
//             // let data = '<li>'+textValue+'</li>';
//             li[i].style.display = '';
//         }
//         else {
//             li[i].style.display = 'none';
//         }
//         }
//     }else{
//         searchWrapper.classList.remove("active"); //hide autocomplete box
//     }
// }

// function select(element){
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     searchWrapper.classList.remove("active");
// }

const searchBlog = () => {
    let filter = document.getElementById('search').value.toUpperCase();

    let ul = document.getElementById('menu');

    document.getElementById('menu').style.display = "block";

    let li = ul.getElementsByTagName('li');

    for (var i=0; i<li.length; i++) {

        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}

const nosearch = () => {
    document.getElementById('menu').style.display = "none";
}