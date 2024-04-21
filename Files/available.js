import {borrow} from './borrow.js'

// document.getElementById('admin_available').innerHTML = '';
// document.getElementById('borrowedList').innerHTML = '';

// localStorage.removeItem("Books");
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('available-books').innerHTML = '';
    let books=JSON.parse(localStorage.getItem("Books"))||[];
    console.log(books);
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
        console.log("available");
        const book=document.createElement('div');
        book.classList.add('book');
        book.innerHTML=`
        <a href="book_details.html?${sendQuery.toString()}" target="_blank">
        <div class="hiddenDetails">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="category">${category}</p>
        <p class="description">${description}</p>
        </div>
        <img src="${img}" alt="book image">
        </a>
        <button class="borrowBook">Borrow</button>
        `;
        document.getElementById('available-books').appendChild(book);

        const borrowButton = book.querySelector('.borrowBook');
        // console.log(borrowButton);
            borrowButton.addEventListener('click', function(event) {
                // Handle borrow button click
                book.isAvailable=false;

                localStorage.setItem("Books", JSON.stringify(books));
                console.log("Borrow button clicked for book:", book);

                borrow(book);
               
               
                console.log(document.getElementById('borrowedList'));
                const bBook=document.createElement('div');
                bBook.classList.add('book');
                bBook.innerHTML=`
                <a href="book_details.html?${sendQuery.toString()}" target="_blank">
                <div class="hiddenDetails">
                <p class="title">${title}</p>
                <p class="author">${author}</p>
                <p class="category">${category}</p>
                <p class="description">${description}</p>
                </div>
                <img src="${img}" alt="book image">
                </a>
                <button class="returnBook">Return</button>
                `;

                // document.getElementById('borrowedList').appendChild(bBook);
        });
    }}
);
});

