const url = new URLSearchParams(window.location.search);
const img = url.get('img');
const title=url.get('title');
const author=url.get('author');
const category=url.get('category');
const description=url.get('description');

const dTitle=document.getElementById('dTitle');
dTitle.innerHTML=title;
const dCategory=document.getElementById('dCategory');
dTitle.innerHTML=category;
const dDesc=document.getElementById('dDesc');
dTitle.innerHTML=description;
const dAuthor=document.getElementById('dAuthor');
dTitle.innerHTML=author;
const bImg=document.getElementById('bImg');
bImg.src=img;

function saveChanges(){
    const updatedTitle = document.getElementById('dTitle').textContent;
    const updatedAuthor = document.getElementById('dAuthor').textContent;
    const updatedCategory = document.getElementById('dCategory').textContent;
    const updatedDescription = document.getElementById('dDesc').textContent;

    // Construct the URL with query parameters
    const query = new URLSearchParams();
    query.append('title', updatedTitle);
    query.append('author', updatedAuthor);
    query.append('category', updatedCategory);
    query.append('description', updatedDescription);

    // Redirect to admin_details.html with the updated query parameters
    window.location.href = `second_main.html?${query.toString()}`;
}