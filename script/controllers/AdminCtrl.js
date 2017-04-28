(function(){
        // AdminCtrl controller
        angular.module("Transport")
            .controller('AdminCtrl', ['$rootScope','$scope',function($rootScope,$scope){
                $scope.routeData = $rootScope.routeDetails;
                $scope.ifLoggedIn = false;
                $scope.wrongPassword = false;
                $scope.buttonId = 0;
                $scope.setButtonTab = 0; 
                $scope.validateLogin = function(){
                    var username = angular.element('#username').val();
                    var password = angular.element('#password').val();
                    var userData = {
                        userName: 'admin',
                        userPassword: 'admin'
                    };
                    if(username === userData.userName && password === userData.userPassword){
                        $scope.ifLoggedIn = true;
                        $scope.wrongPassword = false;
                    }
                    else{
                        $scope.wrongPassword = true;
                    }
                };

                //selecting Button Value
                $scope.setButtonTab = function(buttonValue){
                    $scope.buttonTab = buttonValue;
                };

                // function for route navigation in admin update menu
                $scope.setButtonId = function(buttonValue){
                    $scope.buttonId = buttonValue;
                };

                //checking login value    
                $scope.isLoggedIn = function(value){
                    return $scope.ifLoggedIn;
                };

                // adding stop to route
                $scope.addStop = function(){ 
                    // getting index of previus stop and new stop's value
                    var indexOfRoute = $scope.selectedRoute.route_id;
                    var prevStop = angular.element('#prev_stop').val();
                    var newStop = angular.element('#new_stop').val();
                    var dropPointArray = $scope.routeData[(indexOfRoute - 1)].drop_points;
                    var indexOfPreviousStop = dropPointArray.indexOf(prevStop);

                    //updating route
                    $scope.routeData[(indexOfRoute - 1)].drop_points.splice(indexOfPreviousStop,"0",newStop);
                    bootbox.alert("Route Updated");
                };

                // deleting stop from route
                $scope.deleteStop = function(){
                    //getting index of deleting stop point
                    var indexOfRoute = $scope.selectedRoute.route_id;
                    var deleteStop = $scope.selectedStop;
                    var dropPointArray = $scope.routeData[(indexOfRoute - 1)].drop_points;
                    var indexOfStop = dropPointArray.indexOf(deleteStop);

                    // deleting stop
                    $scope.routeData[(indexOfRoute - 1)].drop_points.splice(indexOfStop,"1");
                    bootbox.alert("Stop Deleted");                    
                };

                $scope.updateDriverDetails = function(){
                    var indexOfRoute = $scope.selectedRoute.route_id;
                    var driverName = angular.element('#driver_name').val();
                    var driverPhone = angular.element("#driver_phone").val();

                    // updating driver name
                    $scope.routeData[(indexOfRoute - 1)].driver_name = driverName;

                    // updating Driver Phone
                    $scope.routeData[(indexOfRoute - 1)].driver_phone = driverPhone;
                    bootbox.alert("Driver details updated");
                };
        }]);
})();