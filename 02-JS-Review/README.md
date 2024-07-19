## Essential JavaScript concepts before learning React 
##### Object
```javascript
const book =  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  }
```

##### Destructuring
```javascript
//destructure an object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(author, title, genres); 

//destructure an array
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

```
##### spread 
```javascript
// Adding a new vale to the array
const newGenres = ["epic fantasy", ...genres];


const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
```
##### Ternaries instead of if/else
```javascript
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`The book has ${pagesRange} pages`);
```
##### Template literal
```javascript
const getYear = (str) => str.split("-")[0];

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)}.
The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
console.log(summary);
```

##### Arrow function
```javascript
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));
```
##### short circuriting and logical operator && || ??
```javascript
console.log(true && "Some string");
console.log(false && "Some string"); //short circuriting
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
```

##### Optional chain
- optional chaining (?.) If any part of this path is undefined or null, the expression will return undefined instead of throwing an error.
- nullish coalescing operator (??) If this results in undefined or null, it will use 0 as the default value.
```javascript
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
```
##### map
```javascript
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData) 
```

##### filter
```javascript
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);
```

##### reduce
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;
```
##### sort
```javascript
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;
```
##### Working with immutable arrays
```javascript
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
```

##### Asynchronous promises
```javascript
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => console.log(data));
```
##### Asynchronous await
```javascript
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
```



