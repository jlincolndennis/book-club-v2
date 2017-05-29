angular
  .module('bcApp')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app/layout/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html'
    });
}
