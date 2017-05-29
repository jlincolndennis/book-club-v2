(function () {
  'use strict';

  angular.module('bcApp')
  .directive('bcForm', bcForm);

  function bcForm() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/admin/form.html',
      controller: formController,
      controllerAs: 'vm'
    };
  }

  formController.$inject = ['$log', 'bookClubDataFactory'];

  function formController($log, bookClubDataFactory) {
    const vm = this;
    vm.test = 'Tycho is still the best';
    vm.formSubmit = formSubmit;
    vm.nextMtg = {
      date: getMonday(),
      time: new Date(2017, 0, 1, 19, 0, 0)
    };

    vm.setMeetingData = bookClubDataFactory.setNextMeeting;

    function formSubmit(form) {
      const meeting = {};
      const dateTime = new Date(
        vm.nextMtg.date.getFullYear(),
        vm.nextMtg.date.getMonth(),
        vm.nextMtg.date.getDate(),
        vm.nextMtg.time.getHours(),
        vm.nextMtg.time.getMinutes(),
        vm.nextMtg.time.getSeconds()
      );

      meeting.date = dateTime;
      let msg = vm.nextMtg.msg.split('\n');
      msg = msg.filter(entry => /\S/.test(entry));
      // msg.forEach(string => {
      //   string = string.replace(/ +/g, ' ');
      // });

      meeting.message = msg;
      $log.log(meeting);

      bookClubDataFactory.setNextMeeting(meeting);
    }

    function getMonday() {
      const d = new Date();
      const month = d.getMonth();

      d.setMonth(month + 1);
      d.setDate(1);

      while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
      }
      return d;
    }
  }
})();
