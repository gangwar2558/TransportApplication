(function(){

    // admin page delete stop directive
    angular.module("Transport").directive("deleteStop", function() {
        return {
            restrict:"E",
            templateUrl: "templates/directive-pages/delete-stop.html"
        };
    });
    
})();