(function(){
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

function marcador(){
	return{
		restrict:"A",
		templateUrl:"./templates/marcador.html"
	}

};

function enmax(){
	return{
		restrict:"A",
		templateUrl:"./templates/entrenmax.html"
	}
};

function estadistica(){
	return{
		restrict:"A",
		templateUrl:"./templates/estadisticas.html"
	}
};

function info(){
	return{
		restrict:"E",
		templateUrl:"./templates/info.html"
	}
};

function select(){
	return{
		restrict:"E",
		templateUrl:"./templates/tilec.html"
	}
};

function title(){
	return{
		restrict:"E",
		template:"<h1 class='biba titulo col-md-4 col-md-offset-4'>{{title}}</h1>"
	}
};

var app = angular.module('rmcf.directivas',[]);
app.directive('alineacion1',alineacion1);
app.directive('alineacion2',alineacion2);
app.directive('marcador',marcador);
app.directive('entrenmax',enmax);
app.directive('estadisticas',estadistica);
app.directive('info',info);
app.directive('selectI',select);
app.directive('titleD',title);
})();
