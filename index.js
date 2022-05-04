import Pages from './modules/Pages.js';
import BookStore from './modules/Bookstore.js';
import DateTime from './modules/date.js';

DateTime();

const bookList = document.querySelector('#list');
const form = document.querySelector('form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const books = new BookStore(titleInput.value, authorInput.value);
  books.addBook();
});

window.addEventListener('load', () => {
  const arr = JSON.parse(localStorage.getItem('localData'));
  for (let i = 0; i < arr.length; i += 1) {
    function assignClass() {
      if (i % 2 === 0) { return 'grey'; } return 'white';
    }
    if (arr[i].title !== '' || arr[i].author !== '') {
      bookList.innerHTML += `<div class='bookWrapper ${assignClass()}'><p class='bookDetails'>"${arr[i].title}" by ${arr[i].author}</p><button class="btns" id='${i}'>Remove</button></div>`;
    } else {
      bookList.innerHTML += '';
    }
  }

  const bookR = new BookStore();
  bookR.removeBook();
});

const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');

const pageChanging = new Pages();

menu1.addEventListener('click', pageChanging.firstOnly);
menu2.addEventListener('click', pageChanging.secondOnly);
menu3.addEventListener('click', pageChanging.lasttOnly);