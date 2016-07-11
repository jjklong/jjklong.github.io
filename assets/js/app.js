var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html'
  })
  .when('/about', {
    templateUrl: 'pages/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
