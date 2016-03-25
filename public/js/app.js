var app = angular.module('HateSite',[])

app.controller('MainController', ['$http', function($http){
	this.people = [];
	var controller = this;
		$http.get('/people').then(
			function(response){
				controller.people = response.data
				// gets the data from the form.
			},
			function(){
				console.log(err)
			});
			this.create = function(){
		$http({	
			method: 'Post',
			url:'/people',
			data: this
		}).then(
				function(response){
					// console.log(response);
					 console.log(response);
           controller.people.push(response.data);
           controller.name = undefined;
          
				},
				function(){

					console.log(err)
				}
		);//  http request
	}//ends create funcion 
}]);
