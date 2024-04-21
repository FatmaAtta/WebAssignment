function deleteBook(button) {
    const book = button.parentNode; // Get the parent div (book container)
    // book.style.display = 'none'; 
    const books=book.parentNode;
    books.removeChild(book);
}


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");
    const buttons = document.querySelectorAll('.deleteBook');
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
                books.splice(i, 1); // Remove the book at index i from the array
                break; 
            }

        }
        localStorage.setItem("Books", JSON.stringify(books));
    
    });
});
});