const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


const getTheTitles = function(collection){
    const titles = []
    for (i=0;i< collection.length; i++){
        titles.push(collection[i].title);
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;

// console.log(getTheTitles(books));
