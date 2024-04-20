
const buttons = document.querySelectorAll('.borrowButton');
buttons.forEach(button =>{
    button.addEventListener('click',function(event){
        const thisBook = this.closest('.book');
        
        const title = thisBook.querySelector('.title').innerHTML;
        const img = thisBook.querySelector('img').src;
        const author = thisBook.querySelector('.author').innerHTML;
        const description = thisBook.querySelector('.description').innerHTML;
        const category = thisBook.querySelector('.category').innerHTML;
    
        const sendQuery = new URLSearchParams();
        sendQuery.append('img',img);
        sendQuery.append('title',title);
        sendQuery.append('author',author);
        sendQuery.append('category',category);
        sendQuery.append('description',description);
        window.location.href = `borrowed.html?${sendQuery.toString()}`;
    
    });
});

// function blurImg(){
//     const image=thisBook.querySelector('img');
//     image.style.filter = 'blur(10px)';
// }
