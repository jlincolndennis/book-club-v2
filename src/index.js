angular
.module('bcApp', [
  'ui.router',
  'ngSanitize',
  'angularMoment'
])
.run(moment => {
  moment.updateLocale('en', {
    calendar: {
      sameDay: '[Today at] h:mma[!]',
      nextDay: '[Tomorrow at] h:mma[!]',
      nextWeek: 'dddd, MMMM Do [at] h:mma',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd, MMMM Do',
      sameElse: 'dddd, MMMM Do [at] h:mma'
    }
  });
})
.filter('removeHTMLTags', () => {
  return function (text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
});
