function alineacion ($scope,$http){
	var ENDPOINT = "./data/partido.json";
	$http.get(ENDPOINT).then(function(res){
		$scope.finales=res.data;
		$scope.title = "Selecciona la final";  
	});
};



(function(){

var app = angular.module('rmcf',['rmcf.directivas']);
app.controller('alineacion', alineacion);

})();