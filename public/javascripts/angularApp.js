var app=angular.module('app',[]);

app.controller('appController',['$scope','$http',appController]);
               
function appController($scope,$http){
    
    //--- Essential variables
	$scope.index_number = "";
    $scope.isTableShow = false;

    $scope.searchResult=function(){
        var index ={ index:$scope.index_number };
        $http.post('/',index).then(
            function successCallback(response) {


                alert(response[0]);

                $scope.isTableShow = true;
                if(value.enhancement === 1){
                    $scope.enhan_1 = "glyphicon glyphicon-ok";
                }else if(value.enhancement === 0){
                    $scope.enhan_1 ="glyphicon glyphicon-remove";
                }else{
                    $scope.enhan_1 = "glyphicon glyphicon-question-sign";
                }
            },
            function errorCallback(response) {
                alert("Erro ..");
            }
        );

    };
}

/*var app = angular.module('app', []);

app.controller('appController', ['$scope', '$http', appController]);
	
function appController($scope, $http) {
	
    //--- Essential variables
	$scope.index_number = "";
    $scope.isTableShow = false;
	
	$scope.searchResult = function(index_number,semester_1,semester_2){
            if(index_number !==""){
                angular.forEach($scope.semester_1, function(value, key) {
                    if (value.Index_num === index_number) {
                        $scope.result_1 = value;
                        $scope.isTableShow = true;
                        if(value.enhancement === 1){
                            $scope.enhan_1 = "glyphicon glyphicon-ok";
                        }else if(value.enhancement === 0){
                            $scope.enhan_1 ="glyphicon glyphicon-remove";
                        }else{
                            $scope.enhan_1 = "glyphicon glyphicon-question-sign";
                        }
                    }
                });
                
                angular.forEach($scope.semester_2, function(value,key){
                    if (value.Index_num === index_number) {
                        $scope.result_2 = value;
                        $scope.isTableShow = true;
                        if(value.enhancement === 1){
                            $scope.enhan_2 = "glyphicon glyphicon-ok";
                        }else if(value.enhancement === 0){
                            $scope.enhan_2 ="glyphicon glyphicon-remove";
                        }else{
                            $scope.enhan_2 ="glyphicon glyphicon-question-sign";
                        }
                    }
                });
            }
    };
}*/