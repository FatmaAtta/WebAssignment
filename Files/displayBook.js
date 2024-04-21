// import {Book} from './localStorage.js';


// export function update(book){
//     console.log("function is called");
//     const title =book.title;
//     const author=book.author;
//     const category=book.category;
//     const img=book.imgUrl;
//     const description=book.description;
//     const isAvailable=book.isAvailable;

//     const currentUrl=window.location.href;

//     const sendQuery = new URLSearchParams();
//     sendQuery.append('img',img);
//     sendQuery.append('title',title);
//     sendQuery.append('author',author);
//     sendQuery.append('category',category);
//     sendQuery.append('description',description);

//     if(currentUrl.includes("admin.html")){
//         const book=document.createElement('div');
//         book.classList.add('book');
//         book.innerHTML=`
//         <a href="admin_details.html?${sendQuery.toString()}" target="_blank">
//         <div class="hiddenDetails">
//         <p class="title">${title}</p>
//         <p class="author">${author}</p>
//         <p class="category">${category}</p>
//         <p class="description">${description}</p>
//         </div>
//         <img src="${img}" alt="book image">
//         </a>
//         <button class="deleteBook">Delete Book</button>
//         `;
//         document.getElementById('admin_available').appendChild(book);
//     }
//     else if(currentUrl.includes("second_main.html")){
//         const book=document.createElement('div');
//         book.classList.add('book');
//         book.innerHTML=`
//         <a href="book_details.html?${sendQuery.toString()}" target="_blank">
//         <div class="hiddenDetails">
//         <p class="title">${title}</p>
//         <p class="author">${author}</p>
//         <p class="category">${category}</p>
//         <p class="description">${description}</p>
//         </div>
//         <img src="${img}" alt="book image">
//         </a>
//         <button class="borrowBook">Borrow</button>
//         `;
//         document.getElementById('available-books').appendChild(book);
//     }
//     else if(currentUrl.includes("borrowed.html")){
//         const book=document.createElement('div');
//         book.classList.add('book');
//         book.innerHTML=`
//         <a href="book_details.html?${sendQuery.toString()}" target="_blank">
//         <div class="hiddenDetails">
//         <p class="title">${title}</p>
//         <p class="author">${author}</p>
//         <p class="category">${category}</p>
//         <p class="description">${description}</p>
//         </div>
//         <img src="${img}" alt="book image">
//         </a>
//         <button class="returnBook">Return</button>
//         `;
//         document.getElementById('borrowedList').appendChild(book);
//     }

// }




// // books=[];
// // localStorage.setItem("Books",JSON.stringify(books));

// // document.getElementById('admin_available').innerHTML = '';
// // document.getElementById('available-books').innerHTML = '';
// // document.getElementById('borrowedList').innerHTML = '';

// // let avBooks=document.querySelectorAll('#available-books.books');
// // avBooks.forEach(book => {
// //     while (book.firstChild) {
// //         book.removeChild(book.firstChild);
// //     }
// // });
// // let adBooks=document.querySelectorAll('#admin_available.books');
// // avBooks.forEach(book => {
// //     while (book.firstChild) {
// //         book.removeChild(book.firstChild);
// //     }
// // });
// // let bBooks=document.querySelectorAll('#borrowedList.books');
// // avBooks.forEach(book => {
// //     while (book.firstChild) {
// //         book.removeChild(book.firstChild);
// //     }
// // });


// // let books = JSON.parse(localStorage.getItem("Books"));

// //     books.forEach(book=>{
// //         const title =book.title;
// //         const author=book.author;
// //         const category=book.category;
// //         const img=book.imgUrl;
// //         const description=book.description;
// //         const isAvailable=book.isAvailable;

// //         const currentUrl=window.location.href;

// //         const sendQuery = new URLSearchParams();
// //         sendQuery.append('img',img);
// //         sendQuery.append('title',title);
// //         sendQuery.append('author',author);
// //         sendQuery.append('category',category);
// //         sendQuery.append('description',description);

// //         if(currentUrl.includes("admin.html")){
// //             const book=document.createElement('div');
// //             book.classList.add('book');
// //             book.innerHTML=`
// //             <a href="admin_details.html?${sendQuery.toString()}" target="_blank">
// //             <div class="hiddenDetails">
// //             <p class="title">${title}</p>
// //             <p class="author">${author}</p>
// //             <p class="category">${category}</p>
// //             <p class="description">${description}</p>
// //             </div>
// //             <img src="${img}" alt="book image">
// //             </a>
// //             <button class="deleteBook">Delete Book</button>
// //             `;
// //             document.getElementById('admin_available').appendChild(book);
// //         }
// //         else if(currentUrl.includes("second_main.html")){
// //             const book=document.createElement('div');
// //             book.classList.add('book');
// //             book.innerHTML=`
// //             <a href="book_details.html?${sendQuery.toString()}" target="_blank">
// //             <div class="hiddenDetails">
// //             <p class="title">${title}</p>
// //             <p class="author">${author}</p>
// //             <p class="category">${category}</p>
// //             <p class="description">${description}</p>
// //             </div>
// //             <img src="${img}" alt="book image">
// //             </a>
// //             <button class="borrowBook">Borrow</button>
// //             `;
// //             document.getElementById('available-books').appendChild(book);
// //         }
// //         else if(currentUrl.includes("borrowed.html")){
// //             const book=document.createElement('div');
// //             book.classList.add('book');
// //             book.innerHTML=`
// //             <a href="book_details.html?${sendQuery.toString()}" target="_blank">
// //             <div class="hiddenDetails">
// //             <p class="title">${title}</p>
// //             <p class="author">${author}</p>
// //             <p class="category">${category}</p>
// //             <p class="description">${description}</p>
// //             </div>
// //             <img src="${img}" alt="book image">
// //             </a>
// //             <button class="returnBook">Return</button>
// //             `;
// //             document.getElementById('borrowedList').appendChild(book);
// //         }

// // });