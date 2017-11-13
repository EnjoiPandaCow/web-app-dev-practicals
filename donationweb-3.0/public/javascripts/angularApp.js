var app = angular.module('DonationWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

            .when('/about',{
                templateUrl : 'pages/about.ejs',
                controller : 'aboutController'
            })

            .when('/contactUs',{
                templateUrl : 'pages/contactUs.ejs',
                controller : 'contactUsController'
            })

             // route for the donate page
            .when('/donate', {
                templateUrl : 'pages/donate.ejs',
                controller  : 'donateController'
            })

             // route for the donations page
            .when('/donations', {
                templateUrl : 'pages/donations.ejs',
                controller  : 'donationsController'
            });
    });


  
  


