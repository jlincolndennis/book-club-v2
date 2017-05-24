(function () {
  'use strict';

  angular.module('bcApp')
    .directive('bcNextMeeting', bcNextMeeting);

  function bcNextMeeting() {
    return {
      restrict: 'E',
      scope: {
        meeting: '='
      },
      templateUrl: 'app/components/meeting.html'
    };
  }
})();
