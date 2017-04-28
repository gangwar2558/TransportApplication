(function(){
    
    // fixedCabCOntroller controller
    angular.module("Transport")
        .controller("FixedCabController",['$scope',function($scope){
        $scope.setRouteId = 1;
        $scope.setRoute = function(valueReceived){
            $scope.setRouteId = valueReceived;  
        };  
    }]);
    
})();