// js/services/dbServices.js

angular.module('dbServices', [])

	//super simple service
	.factory('dbService', function($http){
		return {
			translate : function(to, from, data){
				return $http.post('/api/translate/'+ to + '/'+ from , data);
			},
			send: function(email, email2, contract){

				return $http.post('/api/send/' + email +'/'+email2, contract);
			}
		}
	});