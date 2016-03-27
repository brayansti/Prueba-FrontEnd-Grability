var app = angular.module("appGrability",[]);

app.controller("controlCarga", function ($scope) {

	// ajax consulta
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

});

app.controller("showNoti", function ($scope) {
	$scope.custom = true;
	$scope.toggleNotis = function() {
		$scope.custom = $scope.custom === false ? true: false;
	};

});