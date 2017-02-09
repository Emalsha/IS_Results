var app=angular.module('app',[]);

app.controller('appController',['$scope','$http',appController]);
               
function appController($scope,$http){
    
    //--- Essential variables
	$scope.index_number = "";
    $scope.isTableShow = false;

    $scope.searchResult=function(){
        $scope.isTableShow = false;
        var index_num = $scope.index_number;
        var index ={ index:index_num };

        if (index_num < 0 || index_num.toString().length != 8) {
            alert("Please enter valid index number.");
        }else if(index_num.toString()[3] != 2) {
            alert("Sorry , This service valid for only IS students.");
        }else{
            $http.post('/',index).then(
                function successCallback(response) {
                    if (response.data != "") {
                        $scope.result_1 = response.data[0];
                        $scope.result_2 = response.data[1];
                        $scope.result_3 = response.data[2];

                        $scope.isTableShow = true;
                        if($scope.result_1.enhancement === 1){
                            $scope.enhan_1 = "glyphicon glyphicon-ok";
                        }else if($scope.result_1.enhancement === 0){
                            $scope.enhan_1 ="glyphicon glyphicon-remove";
                        }else{
                            $scope.enhan_1 = "glyphicon glyphicon-question-sign";
                        }

                        if($scope.result_2.Enhancement === 1){
                            $scope.enhan_2 = "glyphicon glyphicon-ok";
                        }else if($scope.result_2.Enhancement === 0){
                            $scope.enhan_2 ="glyphicon glyphicon-remove";
                        }else{
                            $scope.enhan_2 = "glyphicon glyphicon-question-sign";
                        }
                        

                    }else{
                        alert("Please check your index number.");
                    }
                },
                function errorCallback(response) {
                    alert("error occurred during getting data.");
                }
            );
        }
    };
}