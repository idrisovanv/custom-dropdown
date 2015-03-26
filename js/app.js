angular.module('app', ['components'])

    .controller('myCntrl', function ($scope) {
        $scope.sampleList = {'answer':1, 'variants':['Paris', 'Moscow', 'San Francisco']};

    });