/**
 * Created by makedamengistu on 7/26/16.
 */

// create the module and name it testapp
    //also include ngRoute for all our routing needs
var testApp = angular.module('testApp', ['ngRoute', 'ngAnimate']);

//configure our routes
testApp.config(function($routeProvider){
  $routeProvider
    //route for the home page
      .when('/',{
        templateUrl : 'views/home.html',
        controller : 'mainController'
    })
    //route for the about page
      .when('/about',{
        templateUrl : 'views/about.html',
        controller : 'aboutController'
      })
    //route for the contact page
      .when('/contact',{
        templateUrl : 'views/contact.html',
        controller : 'contactController'
      })
});
//create the controller and inject Angular's $scope
testApp.controller('mainController', function($scope){
  //create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
  $scope.pageClass = 'page-home';
});

testApp.controller('aboutController', function($scope){
  $scope.message = 'Look! I am an about page.';
  $scope.pageClass = 'page-about';
});

testApp.controller('contactController', function($scope){
  $scope.message = 'Contact us! JK. This is just a demo.';
  $scope.pageClass = 'page-contact';
});