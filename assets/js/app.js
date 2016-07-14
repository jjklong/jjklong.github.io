var app = angular.module('app', ['ngRoute']);

app.run(['$anchorScroll', function($anchorScroll){
  $anchorScroll.yOffset = 50;
}]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html'
  })
  .when('/about', {
    templateUrl: 'pages/about.html'
  })
  .when('/cv', {
    templateUrl: 'pages/cv.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
