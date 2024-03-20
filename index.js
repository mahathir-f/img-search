const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-img");
const showResult = document.getElementById("show-result");
const showMore = document.getElementById("show-more");
//https://api.unsplash.com/search/photos?page=3&query=office//uX01ZLGQ0xCZBnGGzm3wXEe1QmY8Y6hMtLDF6rdXUmo
let keword = "";
let page = 1;
async function searchImg(){
    keword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keword}&client_id=uX01ZLGQ0xCZBnGGzm3wXEe1QmY8Y6hMtLDF6rdXUmo&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        showResult.innerHTML = "";
    }
    const results = data.results;
   
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLinks = document.createElement("a");
        imgLinks.href = result.links.html;
        imgLinks.target = "_blank";
        imgLinks.appendChild(image);
        showResult.appendChild(imgLinks);
    })
    showMore.style.display = "block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImg();
})
showMore.addEventListener("click",()=>{
    page++;
    searchImg();
})