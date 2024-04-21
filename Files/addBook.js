import {Book} from './localStorage.js';
// import {update} from './displayBook.js';

// const url = new URLSearchParams(window.location.search);
// const img = url.get('imageURL');
// const title=url.get('title');
// const author=url.get('author');
// const category=url.get('category');
// const description=url.get('description');
// const book = new Book(title,author,category,description,img,true);
// console.log("before function is called");
// // update(book);
// console.log("after function is called");
// let books=JSON.parse(localStorage.getItem("Books")) || [];
// books.push(book);
// console.log(books);
// localStorage.setItem("Books",JSON.stringify(books));
// console.log(JSON.parse(localStorage.getItem("Books")));






const addBookForm = document.getElementById('addBookForm');
    addBookForm.addEventListener('submit', function(event){
        console.log("clicked");
            event.preventDefault();
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const category = document.getElementById("category").value;
            const description = document.getElementById("description").value;
            const imgUrl = document.getElementById("imageURL").value; 
            const book = new Book(title,author,category,description,imgUrl,true);
            let books=JSON.parse(localStorage.getItem("Books"))||[];
            books.push(book);
            localStorage.setItem("Books",JSON.stringify(books));
    });

// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOMContentLoaded event fired");
//     const book_flex = document.getElementById('available-books');
//     const books=book_flex.querySelectorAll('.book');
//     console.log("hey");
//     console.log(book_flex);
//     console.log(books);
//     console.log("hey");
//     console.log(books.length);
//     for(let i=0;i<books.length;i++){
//         console.log(i);
//         const book=books[i];
//         const borrowButton=book.querySelector('borrowBook');
//         borrowButton.addEventListener('click',function(event){
//             console.log("Borrow button clicked for book:", book);
//         });
//     }
// const addBookForm = document.getElementById('addBookForm');
//     addBookForm.addEventListener('submit', function(event){
//             event.preventDefault();
//             const title = document.getElementById("title").value;
//             const author = document.getElementById("author").value;
//             const category = document.getElementById("category").value;
//             const description = document.getElementById("description").value;
//             const imgUrl = document.getElementById("imageURL").value; 
//             const book = new Book(title,author,category,description,imgUrl,true);
//             let books=JSON.parse(localStorage.getItem("Books"));
//             books.push(book);
//             localStorage.setItem("Books",JSON.stringify(books));
//     });




// const query=window.location.search;
// const url = new URLSearchParams(query);
// const img = url.get('imageURL');
// const title=url.get('title');
// const author=url.get('author');
// const category=url.get('category');
// const description=url.get('description');
// const sendQuery = new URLSearchParams();
//     sendQuery.append('img',img);
//     sendQuery.append('title',title);
//     sendQuery.append('author',author);
//     sendQuery.append('category',category);
//     sendQuery.append('description',description);
// const book=document.createElement('div');
// book.classList.add('book');
// book.innerHTML=`
// <a href="admin_details.html?${sendQuery.toString()}" target="_blank">
// <div class="hiddenDetails">
// <p class="title">${title}</p>
// <p class="author">${author}</p>
// <p class="category">${category}</p>
// <p class="description">${description}</p>
// </div>
//    <img src="${img}" alt="book image">
// </a>
// <button onclick="deleteBook(this)">Delete Book</button>
// `;
// // document.getElementById('available-books').appendChild(book);
// document.getElementById('admin_available').appendChild(book);


// document.getElementById('updateAvailableBooks').addEventListener('click',function(){
//     window.location.href= `second_main.html?${sendQuery.toString()}`;
// });



{/* <a href="admin_details.html?${sendQuery.toString()}" target="_blank">
   <img src="${img}" alt="book image">
</a> */}