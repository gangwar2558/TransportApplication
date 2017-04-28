(function(){

    // admin page add stop directive
    angular.module("Transport").directive("addStop", function() {
        return {
            restrict:"E",
            templateUrl: "templates/directive-pages/add-stop.html"
            };
    });
    
})();