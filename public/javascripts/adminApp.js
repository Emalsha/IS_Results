var app = angular.module('adminApp',[]);

app.controller('adminController',['$scope',adminController]);

function adminController($scope){

	$scope.courseType = "IS";
	$scope.query = "";

	$scope.submitSubject = function(){
		$scope.query = $scope.courseid + $scope.subject + $scope.credit; 
	}
}	
