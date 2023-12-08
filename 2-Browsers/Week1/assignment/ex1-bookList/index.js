'use strict';
//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // create ul elem
  const ul = document.createElement('ul');

  //Iterate through each book in arr
  books.forEach((book) => {
    //li for each book
    const li = document.createElement('li');
    //p elem for book info
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    //Append p to li
    li.appendChild(p);
    //img elem for book cover
    const img = document.createElement('img');
    img.src = `./assets/${book.image}`;
    //Append img to li
    li.appendChild(img);
    //set b.g for li based on read or unread
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    //Append li to ul
    ul.appendChild(li);
  });
  // Apply styles directly to ul
  ul.style.listStyleType = 'none';
  ul.style.padding = '0';
  ul.style.margin = '0';

  // Get all li elements
  const liElements = ul.querySelectorAll('li');

  // Apply styles directly to li elements
  liElements.forEach((li) => {
    li.style.display = 'inline-block';
    li.style.textAlign = 'center';
    li.style.color = 'white';
    li.style.fontWeight = 'bold';
    li.style.width = '400px';
    li.style.margin = '8px';
    li.style.padding = '8px';
  });
  //Return ul
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      image: 'the_design_of_everyday_things.jpg',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      image: 'the_most_human_human.jpg',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      image: 'the_pragmatic_programmer.jpg',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
