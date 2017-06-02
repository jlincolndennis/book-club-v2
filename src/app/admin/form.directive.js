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
    vm.nextBook = {};
    vm.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();
    vm.nextBook.month = vm.months[thisMonth];

    vm.setMeetingData = bookClubDataFactory.setNextMeeting;

    function formSubmit(form) {
      const meeting = {};
      const book = angular.copy(vm.nextBook);
      book.year = thisYear;
      const dateTime = new Date(
        vm.nextMtg.date.getFullYear(),
        vm.nextMtg.date.getMonth(),
        vm.nextMtg.date.getDate(),
        vm.nextMtg.time.getHours(),
        vm.nextMtg.time.getMinutes(),
        vm.nextMtg.time.getSeconds()
      );
      meeting.date = dateTime;

      if (vm.nextMtg.msg) {
        let msg = vm.nextMtg.msg.split('\n');
        // Removes empty strings from array
        msg = msg.filter(entry => /\S/.test(entry));

        meeting.message = msg;
      }

      let syn = vm.nextBook.synopsis.split('\n');
      // Removes empty strings from array
      syn = syn.filter(entry => /\S/.test(entry));

      book.synopsis = syn;
      $log.log(meeting);
      $log.log(book);

      bookClubDataFactory.setMeeting(meeting);
      bookClubDataFactory.setBook(book);
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
