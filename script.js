const LibraryDiv = document.querySelector('main')
const createButton = document.querySelector('.creates')
const addButton = document.querySelector('.add')
const cancelButton = document.querySelector('.cancelIt')
const bookList = []
function Book(bookName, author, page, readStatus) {
    this.bookName = bookName;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}




function generateBook() {

    for (i = 0; i < 5; i++) {
        const para = document.createElement('p')
        para.id = `div ${j} ${i} `;
        document.getElementById(`div ${j}`).appendChild(para)
    }
    document.getElementById(`div ${j} 1 `).textContent = `Book Name: ${bookList[j].bookName}`;
    document.getElementById(`div ${j} 2 `).textContent = `Author Name: ${bookList[j].author}`;
    document.getElementById(`div ${j} 3 `).textContent = `Pages: ${bookList[j].page}`;
    document.getElementById(`div ${j} 4 `).textContent = `Status: ${bookList[j].readStatus}`;
}

function generateLibrary() {
    while ( LibraryDiv.firstChild ) {LibraryDiv.removeChild( LibraryDiv.firstChild )};
    for (j = 0; j < bookList.length; j++) {
        const singleBook = document.createElement("div");
        singleBook.id = "div " + j;
        const divNo = document.getElementById("div " + j)
        LibraryDiv.appendChild(singleBook)
        generateBook()
    }
}



createButton.addEventListener("click", () => {
    const dialogBox = document.querySelector('dialog')
    dialogBox.showModal()
})


document.getElementById('bookForm').addEventListener('submit', () => {

    bookList.push(new Book((document.getElementById('book').value), (document.getElementById('author').value), (document.getElementById('page').value), (document.getElementById('bookStatus').value)));
    generateLibrary()
    console.log(bookList)
    return false

})

cancelButton.addEventListener("click", function(){document.querySelector('dialog').close()})