(function(){

    // admin page driver details directive
    angular.module("Transport").directive("driverDetails", function() {
        return {
            restrict:"E",
            templateUrl: "templates/directive-pages/driver-details.html"
        };
    });
    
})();