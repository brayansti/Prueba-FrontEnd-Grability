var app = angular.module("appGrability",[]);

app.controller("controlCarga", function ($scope, $http) {

	// ajax
	$.ajax({
		url : 'http://pruebagrability.comxa.com/recibe.php',
		type: 'GET',
		dataType : 'jsonp',
		jsonp: 'callback',
		success : function(respuesta) {
			var respuesta = jQuery.parseJSON( respuesta );
			$scope.dataJson = respuesta;
		},
	});
	// Ajax Fin

	$scope.custom = true;
	$scope.toggleCustom = function() {
		$scope.custom = $scope.custom === false ? true: false;
	};

});