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
  const ulElement = document.createElement('ul');
  books.forEach((book) => {
    const listElement = document.createElement('li');
    const title = document.createElement('p');
    title.textContent = `${book.title} by ${book.author}`;
    listElement.appendChild(title);
    const img = document.createElement('img');
    switch (book.isbn) {
      case '978-0465050659':
        img.src = './assets/the_design_of_everyday_things.jpg';
        img.alt = 'The design of EveryDay Things';
        break;
      case '978-1617933431':
        img.src = './assets/the_most_human_human.jpg';
        img.alt = 'The Most Human Human';
        break;
      case '978-0201616224':
        img.src = './assets/the_pragmatic_programmer.jpg';
        img.alt = 'The design of EveryDay Things';
        break;
      default:
        break;
    }
    listElement.appendChild(img);
    book.alreadyRead
      ? (listElement.className = 'alreadyRead')
      : (listElement.className = 'notReadYet');
    ulElement.appendChild(listElement);
  });
  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
