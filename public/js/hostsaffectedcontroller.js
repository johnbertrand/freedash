var app = angular.module('myApp', []);
app.controller('hostsAffectedController', function($scope) {
    
	$scope.updateAffectedHostsDetails = function(){
			  $array = [{"ip":"10.10.10.1", "host":"tewaxas", "status_text_long":"SOMETHING BROKE", "last_hard_state_change":"2015-07-13 21:23:31","duration":"0" },
			  {"ip":"10.10.10.2", "host":"tewaxas", "status_text_long":"SOMETHING BROKE", "last_hard_state_change":"2015-07-13 21:23:31","duration":"0" },
			  {"ip":"10.10.10.2", "host":"tewaxas", "status_text_long":"SOMETHING BROKE", "last_hard_state_change":"2015-07-13 21:23:31","duration":"0" }];
			  $scope.statuses = $array;
    }
	
});