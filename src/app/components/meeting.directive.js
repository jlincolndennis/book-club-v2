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
      templateUrl: 'app/components/meeting.html',
      controller: MeetingController,
      controllerAs: 'vm'
    };
  }

  MeetingController.$inject = ['$log', '$scope'];

  function MeetingController($log, $scope) {
    const vm = this;
    const now = new Date();
    vm.meeting = {};
    vm.meeting.type = $scope.meeting.date > now ? 'Next' : 'Last';
  }
})();
