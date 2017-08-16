(function () {
  'use strict';

  angular.module('bcApp')
    .factory('bookClubDataFactory', bookClubDataFactory);

  // bookClubDataFactory.$inject = ['$log'];

  function bookClubDataFactory() {
    const _currentBook = {
      title: 'Flatland: A Romance of Many Dimensions',
      author: 'Edwin A. Abbott',
      synopsis: 'This masterpiece of science (and mathematical) fiction is a delightfully unique and highly entertaining satire that has charmed readers for more than 100 years. The work of English clergyman, educator and Shakespearean scholar Edwin A. Abbott (1838-1926), it describes the journeys of A. Square, a mathematician and resident of the two-dimensional Flatland, where women-thin, straight lines-are the lowliest of shapes, and where men may have any number of sides, depending on their social status.  Through strange occurrences that bring him into contact with a host of geometric forms, Square has adventures in Spaceland (three dimensions), Lineland (one dimension) and Pointland (no dimensions) and ultimately entertains thoughts of visiting a land of four dimensions—a revolutionary idea for which he is returned to his two-dimensional world. Charmingly illustrated by the author, Flatland is not only fascinating reading, it is still a first-rate fictional introduction to the concept of the multiple dimensions of space.',
      imgUrl: 'app/images/flatland.jpg',
      dplUrl: 'http://www.worldcat.org/title/flatland-a-romance-of-many-dimensions/oclc/280319',
      amzUrl: 'https://www.amazon.com/Flatland-Romance-Dimensions-Thrift-Editions/dp/048627263X/ref=sr_1_1?ie=UTF8&qid=1502905228&sr=8-1&keywords=flatland',
      month: 'August',
      year: 2017,
      choosenBy: 'Marley'
    };

    const _nextMeeting = {
      date: new Date(2017, 8, 11),
      time: '7:00pm',
      message: 'If you\'ve never been to a meeting, even if you haven\'t read the book, you are still more than welcome - nay, encouraged! - to attend.  Come meet everyone, assess the general vibe, etc. Also, it is the quickest way to find out the next book we\'ll be reading ....since sometimes it takes me a few days to remember to send out an email to the group at large.'
    };

    return {getCurrentBook, getNextMeeting};

    function getCurrentBook() {
      return _currentBook;
    }

    function getNextMeeting() {
      return _nextMeeting;
    }
  }
})();
