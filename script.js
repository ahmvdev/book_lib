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
    console.log(myLibrary)

 
    }


    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        addBookToLibrary();
        var allInputs = document.querySelector("#myform");
        allInputs.reset();
    });

