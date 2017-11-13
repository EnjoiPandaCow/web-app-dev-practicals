var app = angular.module('DonationWebApp');

app.controller('contactUsController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Contact us on 051 123456';
    }
]);