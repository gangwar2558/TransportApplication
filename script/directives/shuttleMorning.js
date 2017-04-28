(function(){
    
    // morning shuttle directive
    angular.module("Transport").directive('shuttleMorning', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/directive-pages/shuttle-morning.html',
        };
    });
    
})();