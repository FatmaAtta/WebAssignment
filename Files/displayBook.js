import {Book} from './localStorage.js';


// books=[];
// localStorage.setItem("Books",JSON.stringify(books));

// document.getElementById('admin_available').innerHTML = '';
// document.getElementById('available-books').innerHTML = '';
// document.getElementById('borrowedList').innerHTML = '';

let books = JSON.parse(localStorage.getItem("Books"));

    books.forEach(book=>{
        const title =book.title;
        const author=book.author;
        const category=book.category;
        const img=book.imgUrl;
        const description=book.description;
        const isAvailable=book.isAvailable;

        const currentUrl=window.location.href;

        const sendQuery = new URLSearchParams();
        sendQuery.append('img',img);
        sendQuery.append('title',title);
        sendQuery.append('author',author);
        sendQuery.append('category',category);
        sendQuery.append('description',description);

        if(currentUrl.includes("admin.html") && isAvailable){
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
        else if(currentUrl.includes("second_main.html") && isAvailable){
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
        }
        else if(currentUrl.includes("borrowed.html") && !isAvailable){
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
            <button class="returnBook">Return</button>
            `;
            document.getElementById('borrowedList').appendChild(book);
        }

});