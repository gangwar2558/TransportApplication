(function(){

    // shuttle page directive
    angular.module("Transport").directive("shuttleData", function() {
        return {
            restrict:"E",
            templateUrl: "templates/directive-pages/shuttle-data.html"
            };
     });
    
})();