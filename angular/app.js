var app = angular.module("appGrability",[]);

// Conttolador ↓↓
app.controller('controlCarga', function ($scope , $http){
	$http.jsonp('http://pruebagrability.comxa.com/recibe.php/?callback=').success(function (respuesta) {
	// $http.jsonp('http://pruebagrability.comxa.com/news_mock.json').success(function (respuesta) {
		console.log(respuesta);
		$scope.datosExternos = respuesta;
	})
});