(function () {
  'use strict';

  angular.module('bcApp')
  .controller('MainController', function (bookClubDataFactory) {
    const vm = this;
    vm.test = 'Tycho is the best';

    vm.book = bookClubDataFactory.getBook();
    vm.meeting = bookClubDataFactory.getMeeting();
  });
})();
