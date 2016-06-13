function alineacion ($scope,$http){
	var ENDPOINT = "./data/partido.json";
	$http.get(ENDPOINT).then(function(res){
		$scope.finales=res.data;
		console.log($scope.finales);
		
		var finales = $scope.finales;
		console.log(finales[0].copa);
		$scope.title = "Selecciona la final";
   $scope.primera=finales[0].copa;
   $scope.segunda=finales[1].copa;
   $scope.tercera=finales[2].copa;
   		

   	$scope.equipos=finales.forEach(function(copa){
   		console.log(copa.equipos);
   	});
   
    
	});
};

function alineacion1(){
	return{
		restrict:"E",
		templateUrl:"./templates/alineacion1.html"
	}
};

function alineacion2(){
	return{
		restrict:"E",
		templateUrl:"./templates/alineacion2.html"
	}
};

(function(){

var app = angular.module('rmcf',[]);
app.controller('alineacion', alineacion);
app.directive('alineacion1',alineacion1);
app.directive('alineacion2',alineacion2);

})();