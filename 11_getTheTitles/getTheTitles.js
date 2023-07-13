const getTheTitles = function(books) {
    let titles = books.reduce((array,book) => array.concat(book.title),[]);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
