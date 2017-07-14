(function () {
  'use strict';

  angular.module('bcApp')
    .factory('bookClubDataFactory', bookClubDataFactory);

  // bookClubDataFactory.$inject = ['$log'];

  function bookClubDataFactory() {
    const _currentBook = {
      title: 'Lonesome Lies Before Us',
      author: 'Don Lee',
      synopsis: 'Yadin Park is a talented alt-country musician whose career has floundered―doomed first by his homely looks and lack of stage presence and then by a progressive hearing disorder. His girlfriend, Jeanette Matsuda, might have been a professional photographer but for a devastating heartbreak in her teens. Now Yadin works for Jeanette\'s father\'s carpet-laying company in California while Jeanette cleans rooms at a local resort. When Yadin\'s former lover and musical partner, the celebrated Mallory Wicks, comes back into his life, all their most private hopes and desires are exposed, their secret fantasies about love and success put to the test. Drawn to the music of indie singer-songwriters like Will Johnson, who helped shape the lyrics in this book, Don Lee has written a novel that unforgettably captures America’s deepest yearnings. Beautifully sad and laced with dark humor, Lonesome Lies Before Us is a profound, heartfelt romance, a soulful and memorable song.',
      imgUrl: 'app/images/lonesome-lies.jpg',
      dplUrl: 'http://www.worldcat.org/title/lonesome-lies-before-us-a-novel/oclc/959885744&referer=brief_results',
      amzUrl: 'https://www.amazon.com/Lonesome-Lies-Before-Us-Novel/dp/0393608816/ref=sr_1_1?ie=UTF8&qid=1500044641&sr=8-1&keywords=lonesome+lies+before+us',
      month: 'July',
      year: 2017,
      choosenBy: 'Keith'
    };

    const _nextMeeting = {
      date: new Date(2017, 7, 14),
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
