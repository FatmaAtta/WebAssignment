const query=window.location.search;
const url = new URLSearchParams(query);
const img = url.get('imageURL');
const title=url.get('title');
const author=url.get('author');
const category=url.get('category');
const description=url.get('description');
const sendQuery = new URLSearchParams();
    sendQuery.append('img',img);
    sendQuery.append('title',title);
    sendQuery.append('author',author);
    sendQuery.append('category',category);
    sendQuery.append('description',description);
const book=document.createElement('div');
book.classList.add('book');
book.innerHTML=`
<a href="admin_details.html?${sendQuery.toString()}" target="_blank">
<div class="hiddenDetails">
<p class="title">${title}</p>
<p class="author">${author}</p>
<p class="category">${category}</p>
<p class="description">${description}</p>
</div>
   <img src="${img}" alt="book image">
</a>
<button onclick="deleteBook(this)">Delete Book</button>
`;
// document.getElementById('available-books').appendChild(book);
document.getElementById('admin_available').appendChild(book);


document.getElementById('updateAvailableBooks').addEventListener('click',function(){
    window.location.href= `second_main.html?${sendQuery.toString()}`;
});



{/* <a href="admin_details.html?${sendQuery.toString()}" target="_blank">
   <img src="${img}" alt="book image">
</a> */}