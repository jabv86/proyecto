function alineacion ($scope,$http){
	var ENDPOINT = "./data/partido.json";
	$http.get(ENDPOINT).then(function(res){
		$scope.finales=res.data;
		$scope.title = "Selecciona la final";    
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