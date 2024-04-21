// document.getElementById('available-books').innerHTML = '';
// document.getElementById('borrowedList').innerHTML = '';

// localStorage.removeItem("Books");
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('admin_available').innerHTML = '';
    let books=JSON.parse(localStorage.getItem("Books"))||[];
    books.forEach(book => {
    const title =book.title;
    const author=book.author;
    const category=book.category;
    const img=book.imgUrl;
    const description=book.description;
    const isAvailable=book.isAvailable;

    if(isAvailable){
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
        <button class="deleteBook">Delete Book</button>
        `;
        document.getElementById('admin_available').appendChild(book);
    }

});
});