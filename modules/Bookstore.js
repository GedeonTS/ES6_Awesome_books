let arrOfBooks = [];

class BookStore {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    if (localStorage.getItem('localData') === null) {
      localStorage.setItem('localData', JSON.stringify([]));
      const book = { title: this.title, author: this.author };
      arrOfBooks.push(book);
      localStorage.setItem('localData', JSON.stringify(arrOfBooks));
      location.reload();
    } else {
      arrOfBooks = JSON.parse(localStorage.getItem('localData'));
      arrOfBooks.push({ title: this.title, author: this.author });
      localStorage.setItem('localData', JSON.stringify(arrOfBooks));
      location.reload();
    }
  }

  removeBook() {
    let arr = JSON.parse(localStorage.getItem('localData'));
    const allbtns = document.querySelectorAll('#list button');

    allbtns.forEach((a, i) => {
      a.addEventListener('click', () => {
        arr = arr.filter((object) => arr.indexOf(object) !== i);
        localStorage.setItem('localData', JSON.stringify(arr));

        location.reload();
      });
    });
  }
}

export default BookStore;