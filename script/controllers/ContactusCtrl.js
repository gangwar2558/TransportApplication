(function(){
        // ContactusCtrl controller
        angular.module('Transport')
            .controller('ContactusCtrl', ['$scope',function($scope){
                $scope.isValidContactUs = false;
                var contactUsData = {};
                $scope.validateContactus = function(){
                    var userEmail = angular.element('#userEmail').val();
                    if(userEmail.includes("@globallogic.com")){
                        bootbox.alert("Thank you. We will get back to you soon.");
                        $scope.isValidContactUs = true;
                        contactUsData.userName = angular.element('#userName').val();
                        contactUsData.userEmail = angular.element('#userEmail').val();
                        contactUsData.summary = angular.element('#summary').val();
                        contactUsData.userMessage = angular.element('#userMessage').val();
                    }else{
                        bootbox.alert("Enter valid Oficial E-mail ID.");
                        $scope.isValidContactUs = false;  
                    }
                };
        }]);   
})();