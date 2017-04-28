(function(){
    var app = angular.module("Transport", ['ui.router']);
    // angular config file
    app.config(function($stateProvider){    
        $stateProvider
            .state('shuttle', {
               url: '/shuttle',
               templateUrl: "templates/pages/shuttle.html",
            })
           .state('fixedCab', {
               url: '/fixedcab',
               templateUrl: "templates/pages/fixed-cab.html",
           })
           .state('onCall', {
               url: '/oncall',
               templateUrl: "templates/pages/oncall.html",
           })
           .state('contactUs', {
               url: '/contactus',
               templateUrl: "templates/pages/contact-us.html",
           })
           .state('admin', {
               url: '/admin',
               templateUrl: "templates/pages/admin.html",
           })
    });
    // mainController which defines routes
    app.controller('mainController',['$rootScope', function($rootScope){
        $rootScope.routeDetails = [
            {
                    route_id:1,
                    route_name:"Route-1",
                    drop_points:["Vikas Puri","Lajwanti Garden","Naraina","R K Puram","Naroji Nagar","South EX","Lagpat Nagar"],
                    driver_name:"Joginder Singh",
                    maps_link:'https://www.google.com/maps/d/u/1/embed?mid=1H_WApCwz6bSRgI7TSjr64aNB64E',
                    driver_phone:"9658569856",      
            },
            {
                    route_id:2,
                    route_name:"Route-2",
                    drop_points:["Khajuri","Bhajan Pura", "Mandoli","Gagan Red Light","Dilshad Garden Metro","Vinod Nagar","Mayur Vihar"],
                    driver_name:"Yoginder Singh",
                    driver_phone:"9658569856",
                    maps_link:'https://www.google.com/maps/d/u/1/embed?mid=1S0Uw8i3EV7FKxcEqiAbMlSskCCw',
            },
            {
                    route_id:3,
                    route_name:"Route-3",
                    drop_points:["Rohini Sec. 15","Japneese red light","Rohini Sec 3","Rohini Sec 13","Rohini West Metro Station","Pitampura","NSP","Shalimar Bagh","GTB Metro Station"],
                    driver_name:"Harinder Singh",
                    driver_phone:"9658569856",
                    maps_link:'https://www.google.com/maps/d/u/1/embed?mid=1H_WApCwz6bSRgI7TSjr64aNB64E',
            },
            {
                    route_id:4,
                    route_name:"Route-4",
                    drop_points:["Dwarka Mor RedLight","Dwarka More","Dwarka Sec 3","Ashirwad Chowk","Suboto Park","AIIMS","Lagpat Nagar"],
                    driver_name:"Maninder Singh",
                    driver_phone:"9658569856",
                    maps_link:'https://www.google.com/maps/d/u/1/embed?mid=1S0Uw8i3EV7FKxcEqiAbMlSskCCw',
            },
            {
                    route_id:5,
                    route_name:"Route-5",
                    drop_points:["ballabhgah","Escorts Mujesar","NIIT Ajrounda Chowk","Old Faridabad Chowk","NHPC Chowk","Badarpur","Sarita Vihar"],
                    driver_name:"Ravinder Singh",
                    driver_phone:"9658569856",
                    maps_link:'https://www.google.com/maps/d/u/1/embed?mid=1SQc2BxmQzSpVr4dQ_6OTu9H8kvM',
            }
        ];
    }]);

})();