(function(){
        
    // GLTransport controller 
    angular.module("Transport")
        .controller('GLTransport', ['$scope', function($scope){
            $scope.shuttleTimings = shuttle;
            $scope.tab = 1;
            $scope.setTab = function(value){
                $scope.tab = value;
            };
            $scope.isSet = function(checkValue){
                return (checkValue === $scope.tab);  
            };
        }]);
    
    // shuttle data
    var shuttle = {
        timingsMorning: ['9:00 AM', '9:20 AM', '9:40 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
        timingsEvening: ['5:00 PM', '5:20 PM', '5:40 PM', '6:10 PM', '6:30 PM', '7:30 PM', '8:30 PM'],
    };
})();