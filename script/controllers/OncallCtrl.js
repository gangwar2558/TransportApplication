(function(){
        // OncallCtrl controller
        angular.module("Transport")
            .controller('OncallCtrl', ['$scope',function($scope){
                $scope.isValidOnCall = false;
                var OnCallData = {}; 
                // validating oncall cab request
                $scope.validateOncall = function(){
                    //Getting Values from form   
                    var employeeId = angular.element('#employeeId').val();
                    var managerId = angular.element('#managerId').val();
                    var employeeEmail = angular.element('#employeeEmail').val();
                    var managerEmail = angular.element('#managerEmail').val();
                    var pickupAddress = angular.element('#pickupAddress').val();
                    var dropAddress = angular.element('#dropAddress').val();
                    var phoneNo = angular.element('#phoneNumber').val();
                    if(!($scope.isValidOnCall)){
                        $scope.isValidOnCall = true;   
                    }
                    if(employeeId.length != 6 || managerId.length != 6){
                        bootbox.alert("Enter valid ID.");
                        $scope.isValidOnCall = false;
                    }
                    if(!employeeEmail.includes("@globallogic.com") || !managerEmail.includes("@globallogic.com")){
                        bootbox.alert("Enter valid Oficial E-mail ID.");
                        $scope.isValidOnCall = false;
                    }
                    if(pickupAddress === dropAddress){
                        bootbox.alert("Pickup and drop address cannot be same.");
                        $scope.isValidOnCall = false;
                    }
                    if(phoneNo.length != 10){
                        bootbox.alert("Phone number is Invalid");
                        $scope.isValidOnCall = false;
                    }
                    if(managerEmail === employeeEmail){
                        bootbox.alert("Manager email and employee email cannot be same");
                        $scope.isValidOnCall = false;
                    }
                    if($scope.isValidOnCall)
                    {
                        bootbox.alert("Your Request Has been forwarded for manager approval");
                        OnCallData.employeeName = angular.element('#employeeName').val();
                        OnCallData.employeeId = angular.element('#employeeId').val();
                        OnCallData.employeeEmail = angular.element('#employeeEmail').val();
                        OnCallData.pickupAddress = angular.element('#pickupAddress').val();
                        OnCallData.dropAddress = angular.element('#dropAddress').val();
                        OnCallData.managerName = angular.element('#managerName').val();
                        OnCallData.managerId = angular.element('#managerId').val();
                        OnCallData.managerEmail = angular.element('#managerEmail').val();
                        OnCallData.projectName = angular.element('#projectName').val();
                        OnCallData.phoneNumber = angular.element('#phoneNumber').val();
                    }
                };
            }]);
})();
