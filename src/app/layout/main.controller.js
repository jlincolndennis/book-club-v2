(function () {
  'use strict';

  angular.module('app')
  .controller('MainController', function () {
    const vm = this;
    vm.test = 'Tycho is the best';

    // $scope.book = booksFactory.getCurrentBook();
    // $scope.meeting = booksFactory.getNextMeeting();
  });
})();
