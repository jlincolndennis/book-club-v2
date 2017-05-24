(function () {
  'use strict';

  angular.module('bcApp')
    .directive('bcAbout', bcAbout);

  function bcAbout() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/about.html'
    };
  }
})();
