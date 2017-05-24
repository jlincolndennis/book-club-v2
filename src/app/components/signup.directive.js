(function () {
  'use strict';

  angular.module('bcApp')
    .directive('bcSignup', bcSignup);

  function bcSignup() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/signup-modal.html'
    };
  }
})();
