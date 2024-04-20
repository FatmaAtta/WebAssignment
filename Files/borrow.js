document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");
const buttons = document.querySelectorAll('.borrowBook');
console.log(buttons);
buttons.forEach(button =>{
    console.log("button is pressed");
    button.addEventListener('click',function(event){
        const thisBook = this.closest('.book');
        console.log(thisBook);
        const bookTitle = thisBook.querySelector('.title').innerHTML;

        let books = JSON.parse(localStorage.getItem("Books"))||[];
        for(let i=0;i<books.length;i++){
            if(books[i].title==bookTitle){
                books[i].isAvailable=false;
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

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");
const buttons = document.querySelectorAll('.returnBook');
console.log(buttons);
buttons.forEach(button =>{
    console.log("button is pressed");
    button.addEventListener('click',function(event){
        const thisBook = this.closest('.book');
        console.log(thisBook);
        const bookTitle = thisBook.querySelector('.title').innerHTML;

        let books = JSON.parse(localStorage.getItem("Books"))||[];
        for(let i=0;i<books.length;i++){
            if(books[i].title==bookTitle){
                books[i].isAvailable=true;
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
