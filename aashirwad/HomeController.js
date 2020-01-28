aashirwad.controller('HomeController', function($scope, $http){
	var home = $scope;
	var holder;
	$http.get('https://api.github.com/users/aashirwadgupta')
	.then(function(response) {
		//this is the way to get the data,
		holder = response.data.homeDetails;
		home.content = holder.login;
		home.contact.email = holder.email;
	});
});