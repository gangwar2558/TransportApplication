(function(){

    // evening shuttle directive
    angular.module("Transport").directive('shuttleEvening', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/directive-pages/shuttle-evening.html',
        };
    });
    
})();