function prueba($scope){
	$scope.prueba="OK";
};

function alineacion ($scope,$http){
	var ENDPOINT = "./data/partido.json";
	$http.get(ENDPOINT).then(function(res){
		$scope.partido=res.data;
		console.log($scope.partido);
		
		var partido = $scope.partido;
		console.log(partido[0][0]);
		$scope.title = "Selecciona la final";
   $scope.primera=partido[0][0];
   $scope.segunda=partido[1][0];
   $scope.tercera=partido[2][0];
    $scope.biba="biba llo";
	});
};

function main($scope) {
  
};


(function(){

var app = angular.module('rmcf',[]);
app.controller('prueba',prueba);
app.controller('alineacion', alineacion);
app.controller('Main', ['$scope', main]);

})();