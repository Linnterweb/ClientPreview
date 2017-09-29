angular.module('Axle', ['ngRoute', 'ngResource', 'Axle.controllers', 'Axle.directives'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    })
    .when('/brands', {
        templateUrl: 'views/brands.html'
    })
    .when('/about', {
        templateUrl: 'views/about.html'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])