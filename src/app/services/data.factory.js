(function () {
  'use strict';

  angular.module('bcApp')
    .factory('bookClubDataFactory', bookClubDataFactory);

  // bookClubDataFactory.$inject = ['$log'];

  function bookClubDataFactory() {
    const _currentBook = {
      title: 'Gun Machine',
      author: 'Warren Ellis',
      synopsis: 'After a shootout claims the life of his partner in a condemned tenement building on Pearl Street, Detective John Tallow unwittingly stumbles across an apartment stacked high with guns. When examined, each weapon leads to a different, previously unsolved murder. Confronted with the sudden emergence of hundreds of unsolved homicides, Tallow discovers that he\'s walked into a veritable deal with the devil. An unholy bargain that has made possible the rise of some of Manhattan\'s most prominent captains of industry. A hunter who performs his deadly acts as a sacrifice to the old gods of Manhattan and who may, quite simply, be the most prolific murderer in New York City\'s history.',
      imgUrl: 'app/images/gun-machine.jpg',
      dplUrl: 'http://www.worldcat.org/oclc/870342597',
      amzUrl: 'https://www.amazon.com/Gun-Machine-Warren-Ellis/dp/0316187410/ref=sr_1_1?ie=UTF8&qid=1497316209&sr=8-1&keywords=gun+machine',
      month: 'June',
      year: 2017,
      choosenBy: 'Christina'
    };

    const _nextMeeting = {
      date: new Date(2017, 6, 10),
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
