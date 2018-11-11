(function () {
    var app = angular.module('tmnApp', ['ngRoute']);
    app.value('baseUrl', 'https://teachmenowdevtest.azurewebsites.net/');

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            }).
            otherwise({
                redirectTo: '/home'
            });

          
      }]);
})();
