function deleteBook(button) {
    const book = button.parentNode; // Get the parent div (book container)
    // book.style.display = 'none'; 
    const books=book.parentNode;
    books.removeChild(book);
}