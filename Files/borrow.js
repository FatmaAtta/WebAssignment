document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");
    const buttons = document.querySelectorAll('.borrowBook');
    console.log("hey");
    console.log(buttons);
    buttons.forEach(button =>{
    button.addEventListener('click',function(event){
        console.log("button is pressed");
        const thisBook = this.closest('.book');
        console.log(thisBook);
        const bookTitle = thisBook.querySelector('.title').innerHTML;

        let books = JSON.parse(localStorage.getItem("Books"))||[];
        for(let i=0;i<books.length;i++){
            if(books[i].title==bookTitle){
                books[i].isAvailable=false;
                break; 
            }

        }

        // books.forEach(book=>{
        //     if(bookTitle == book.title){
        //         book.isAvailable=false;
        //     }
        // });
        localStorage.setItem("Books", JSON.stringify(books));
    
    });
});
});
console.log(document.getElementById('borrowedList'));


export function borrow(book){
    console.log(book);
}





























// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOMContentLoaded event fired");
//     const buttons = document.querySelectorAll('.borrowBook');
//     console.log("hey");
//     console.log(buttons);
//     buttons.forEach(button =>{
//     button.addEventListener('click',function(event){
//         console.log("button is pressed");
//         const thisBook = this.closest('.book');
//         console.log(thisBook);
//         const bookTitle = thisBook.querySelector('.title').innerHTML;

//         let books = JSON.parse(localStorage.getItem("Books"))||[];
//         for(let i=0;i<books.length;i++){
//             if(books[i].title==bookTitle){
//                 books[i].isAvailable=false;
//                 break; 
//             }

//         }

//         // books.forEach(book=>{
//         //     if(bookTitle == book.title){
//         //         book.isAvailable=false;
//         //     }
//         // });
//         localStorage.setItem("Books", JSON.stringify(books));
    
//     });
// });
// });




    // books.forEach(button =>{
    // button.addEventListener('click',function(event){
    //     console.log("button is pressed");
    //     const thisBook = this.closest('.book');
    //     console.log(thisBook);
    //     const bookTitle = thisBook.querySelector('.title').innerHTML;

    //     let books = JSON.parse(localStorage.getItem("Books"))||[];
    //     for(let i=0;i<books.length;i++){
    //         if(books[i].title==bookTitle){
    //             books[i].isAvailable=false;
    //             break; 
    //         }

    //     }

        // books.forEach(book=>{
        //     if(bookTitle == book.title){
        //         book.isAvailable=false;
        //     }
        // });
        // localStorage.setItem("Books", JSON.stringify(books));
    
    // });
// });
// });











// document.getElementById('admin_available').innerHTML = '';
// document.getElementById('available-books').innerHTML = '';

// localStorage.removeItem("Books");


// document.addEventListener('DOMContentLoaded', function () {
//     // document.getElementById('borrowedList').innerHTML = '';
//     let books=JSON.parse(localStorage.getItem("Books"));
//     books.forEach(book => {
//     const title =book.title;
//     const author=book.author;
//     const category=book.category;
//     const img=book.imgUrl;
//     const description=book.description;
//     const isAvailable=book.isAvailable;

//     if(!isAvailable){
//         const sendQuery = new URLSearchParams();
//         sendQuery.append('img',img);
//         sendQuery.append('title',title);
//         sendQuery.append('author',author);
//         sendQuery.append('category',category);
//         sendQuery.append('description',description);

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

// });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOMContentLoaded event fired");
// const buttons = document.querySelectorAll('.returnBook');
// console.log(buttons);
// buttons.forEach(button =>{
//     console.log("button is pressed");
//     button.addEventListener('click',function(event){
//         const thisBook = this.closest('.book');
//         console.log(thisBook);
//         const bookTitle = thisBook.querySelector('.title').innerHTML;

//         let books = JSON.parse(localStorage.getItem("Books"))||[];
//         for(let i=0;i<books.length;i++){
//             if(books[i].title==bookTitle){
//                 books[i].isAvailable=true;
//             }

//         }

//         // books.forEach(book=>{
//         //     if(bookTitle == book.title){
//         //         book.isAvailable=false;
//         //     }
//         // });
//         localStorage.setItem("Books", JSON.stringify(books));
    
//     });
// });
// });

        // const img = thisBook.querySelector('img').src;
        // const author = thisBook.querySelector('.author').innerHTML;
        // const description = thisBook.querySelector('.description').innerHTML;
        // const category = thisBook.querySelector('.category').innerHTML;
    
        // const sendQuery = new URLSearchParams();
        // sendQuery.append('img',img);
        // sendQuery.append('title',title);
        // sendQuery.append('author',author);
        // sendQuery.append('category',category);
        // sendQuery.append('description',description);
        // window.location.href = `borrowed.html?${sendQuery.toString()}`;
// function blurImg(){
//     const image=thisBook.querySelector('img');
//     image.style.filter = 'blur(10px)';
// }
