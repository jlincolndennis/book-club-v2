(function () {
  'use strict';

  angular.module('bcApp')
    .directive('bcCurrentBook', bcCurrentBook);

  function bcCurrentBook() {
    return {
      restrict: 'E',
      scope: {
        book: '='
      },
      templateUrl: 'app/components/book.html'
    };
  }
})();
