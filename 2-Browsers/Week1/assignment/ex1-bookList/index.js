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
    // TODO your code goes in here, return the ul element
    //create ul
    const ul = document.createElement('ul');
    //iterate over the books array
    books.forEach(book => {
        const li = document.createElement('li'); //create <li>
        const p = document.createElement('p'); //create <p>
        p.textContent = `${book.title} by ${book.author}`; //txt

        const img = document.createElement('img'); //create <img ...>
        img.src = book.cover;

        //apply some style
        ul.style.display = 'flex';
        ul.style.justifyContent = 'space-between'

        li.style.border = '1px solid black';
        li.style.padding = '10px';
        li.style.width = '30%'
        li.style.listStyleType = 'none';

        img.style.width = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'cover';

        //if book.read
        li.style.backgroundColor = (book.alreadyRead) ? 'green' : 'red';

        //append stuff
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul;
}

function main() {
    const myBooks = [
        {
            title: 'The Design of Everyday Things',
            author: 'Don Norman',
            isbn: '978-0465050659',
            cover: "./assets/the_design_of_everyday_things.jpg",
            alreadyRead: false,
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            isbn: '978-1617933431',
            cover: "./assets/the_most_human_human.jpg",
            alreadyRead: true,
        },
        {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt',
            isbn: '978-0201616224',
            cover: "./assets/the_pragmatic_programmer.jpg",
            alreadyRead: true,
        },
    ];

    const ulElement = createBookList(myBooks);
    document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
