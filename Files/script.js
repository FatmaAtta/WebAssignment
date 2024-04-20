// function addBookUserPage(){
//     const title=localStorage.getItem('title');
//     const author=localStorage.getItem('author');
//     const category=localStorage.getItem('category');
//     const imageURL=localStorage.getItem('imageURL');
//     const description=localStorage.getItem('description');
    
//     let book=document.createElement('div');
//     book.classList.add('book');
//     book.innerHTML=
//     `<a href="Deliverance_book.html" target="_blank">
//     <img src="${imageURL}">
//     </a>`;
//     document.getElementById('available-books').appendChild(book);
//     alert('Added Book Successfully!');
// }

let library=[];
let addBookForm = document.getElementById('addBook');

addBookForm.addEventListener('submit', function(event){
    event.preventDefault();
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const category=document.getElementById('category').value;
    const imageURL=document.getElementById('imageURL').value;
    const description=document.getElementById('description').value;
    let book = {
        title: title,
        author: author,
        category: category,
        image: imageURL,
        description: description
    };
    let libraryString=localStorage.getItem('library');
    if(!libraryString){
        library.push(book);
        saveLocal(library);
    }
    else{
        let libraryStringParse=JSON.parse(localStorage.getItem('library'));
        libraryStringParse.push(book);
        saveLocal(libraryStringParse);
        console.log('save local');
    }
});

function saveLocal(library){
    let libraryStringify=JSON.stringify(library);
    localStorage.setItem('library',libraryStringify);
    const itemAddedEvent = new Event('itemAdded');
    window.dispatchEvent(itemAddedEvent);
}

// function addBookAdminPage(title, author, category, imageURL, description){
    
// }

// function borrowBook(book){
//     book.status='B';
// }

// function returnBook(title, author, category,imageURL, description){
//     let book={
//         title:title,
//         author:author,
//         category:category,
//         imageURL:imageURL,
//         description:description
//     };
//     borrowed.push(book);
// }


//search 

// function findCategory(category){
//     return library.filter(book=>book.category==category);
// }
// function findAuthor(author){
//     return library.filter(book=>book.author==author);
// }

// function saveChanges(){

// }
//test

// function addItem(){
//         const book=document.createElement('div');
//         book.classList.add('book');
//         book.innerHTML=`
//         <a href="Deliverance_book.html" target="_blank">
//            <img src="deliverance.jpeg">
//         </a>
//         `;
//         document.getElementById('available-books').appendChild(book);
// }
