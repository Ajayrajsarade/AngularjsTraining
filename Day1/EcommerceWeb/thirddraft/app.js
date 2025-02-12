
// //1.define angularjs module

var app=angular.module("transflower",[]);
app.controller("LoginController",function($scope){
   //Define Module
   $scope.user={
    email:"Ajay.s@gmail.com",
    password:"Ajay"
   };

    $scope.onValidate=function(){
        if ($scope.user.email && $scope.user.password ) {
            alert("Welcome Ajayraj.");
        }
        else{
            alert("Invalid User.");
        }
    }
});
// var app = angular.module("Lakhan",[]);
// app.controller("LoginController",function($scope){
//     $scope.user = {
//         email:"lakhanchavan1106@gmail.com",
//         password:"test"
//     }; 



//     $scope.onValidate=function(){
//         if($scope.user.email && $scope.user.password){
//             alert("Welcome Lakhan");
//         }
//         else{
//             alert("Invalid User");
//         }
//     }
// });
