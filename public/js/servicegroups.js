
app.factory('ServiceGroupsService', function ($http, $q ){

	function ServiceGroupsService(){
		var self = this;
		self.groups = null;
		
		self.getGroups = function(){
			var deferred = $q.defer();
			if (self.groups != null ){
				deferred.resolve(self.groups);
			}else{
				$http.get('/servicegroups.json')
				.success(function(groups){
					self.groups = groups;
					deferred.resolve(groups);
				})
				.error(function(response){
					deferred.reject(response);
				})
			}
			return deferred.promise;
		} 
	}
	return new ServiceGroupsService();
});




app.controller('serviceGroupsController', 
		function serviceGroupsController($scope, ServiceGroupsService) {
			
			$scope.serviceGroups = [];     //[{"name":"POS", "id":"01"},{"name":"TEW","id":"02"}];
			$scope.updateGroups = function(){
					ServiceGroupsService.getGroups()
					.then(
					  function(groups){
						  $scope.serviceGroups = groups;
						console.log("Got groups");
						console.log(groups);
		 			  },
					function(result){
						console.log("Failed with: "+result);
					});
			};
			
			$scope.updateGroups();	
		
		});
		