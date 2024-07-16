const titleEl = document.querySelector('#title')
const authorEl = document.querySelector('#author')
const genreEl = document.querySelector('#genre')
const pagesEl = document.querySelector('#pages')

const submitBtn = document.querySelector('#submit-btn')

const myLibrary = [];

function Book(title, author, genre, pages) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
}

function addBookToLibrary(){
    let titleVal = titleEl.value;
    let authorVal = authorEl.value;
    let genreVal = genreEl.value;
    let pagesVal = pagesEl.value;
    const newBook = new Book(titleVal, authorVal, genreVal, pagesVal)
    myLibrary.push(newBook);
 
    }
    var table = document.querySelector('table');

function displayBooks(){
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th>Genre</th><th>Pages</th></tr>'
    myLibrary.forEach(function(book){  
    let row = table.insertRow();
    row.insertCell().textContent = book.title;
    row.insertCell().textContent = book.author;
    row.insertCell().textContent = book.genre;
    row.insertCell().textContent = book.pages;
    })
}

var allInputs = document.querySelector('#myform')
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        addBookToLibrary();
        allInputs.reset();
        displayBooks();
    });

