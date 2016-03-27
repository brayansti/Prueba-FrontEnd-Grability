var app = angular.module("appGrability",[]);

app.controller("controlCarga", function ($scope, $http) {
	$http.get('js/news_mock.json').
		success(function(respuesta, status, headers, config) {
			$scope.dataJson = respuesta;
		}).
		error(function(data, status, headers, config) {
	});
});

app.controller("showNoti", function ($scope) {
	$scope.custom = true;
	$scope.toggleNotis = function() {
		$scope.custom = $scope.custom === false ? true: false;
	};

});