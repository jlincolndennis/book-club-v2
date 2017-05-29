(function () {
  'use strict';

  angular.module('bcApp')
    .factory('bookClubDataFactory', bookClubDataFactory);

  bookClubDataFactory.$inject = ['$log'];

  function bookClubDataFactory($log) {
    const _currentBook = {
      title: 'The Immortal Life of Henrietta Lacks',
      author: 'Rebecca Skloot',
      synopsis: ['Her name was Henrietta Lacks, but scientists know her as HeLa. She was a poor black tobacco farmer whose cells—taken without her knowledge in 1951—became one of the most important tools in medicine, vital for developing the polio vaccine, cloning, gene mapping, and more. Henrietta\'s cells have been bought and sold by the billions, yet she remains virtually unknown, and her family can\'t afford health insurance. This phenomenal New York Times bestseller tells a riveting story of the collision between ethics, race, and medicine; of scientific discovery and faith healing; and of a daughter consumed with questions about the mother she never knew.'],

      imgUrl: 'http://gallery.tinyletterapp.com/a3dd8fb87b24c5e4dc54f5e65d6794333240b284/images/6c9263c0-51f1-4471-89a3-2e96284d908d.jpg',
      dplUrl: 'https://catalog.denverlibrary.org/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Default&term=the%20immortal%20life%20of%20henrietta%20lacks&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=1',
      amzUrl: 'https://www.amazon.com/Immortal-Life-Henrietta-Lacks/dp/1400052181',
      month: 'May',
      year: 2017,
      choosenBy: 'Bridget'
    };

    let _nextMeeting = {
      date: new Date(2017, 3, 29, 19, 0, 0),
      message: ['If you\'ve never been to a meeting, but you haven\'t read the book, you are still more than welcome - nay, encouraged! - to attend. It could give you a chance to meet everyone, assess the general vibe, etc. Also, it is the quickest way to find out the next book we\'ll be reading ....since sometimes it takes me a few days to remember to send out an email to the group at large.']
    };

    return {getCurrentBook, getNextMeeting, setNextMeeting};

    function getCurrentBook() {
      return _currentBook;
    }

    function getNextMeeting() {
      return _nextMeeting;
    }

    function setNextMeeting(meeting) {
      _nextMeeting = meeting;
      $log.log('You set the next meeting!');
    }
  }
})();
