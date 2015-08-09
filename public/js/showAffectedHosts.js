function showAffectedHosts(serviceGroup){
	var scope = angular.element(
	    document.
	    getElementById("affectedHostsDetails")).
	    scope();
	    scope.$apply(function () {
	        scope.updateAffectedHostsDetails("HELLO");
	    });
	
	
}