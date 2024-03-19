const getTheTitles = function(books) {

    /* let titleArray = [];
    let i = 0;
      for (let book of books){
        titleArray[i++] = book.title
      }

      return titleArray */

      return books.map((book) => book.title)
};

console.log(getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]))

// Do not edit below this line
module.exports = getTheTitles;
