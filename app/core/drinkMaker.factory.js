(function(){
    'use strict';

    angular
        .module('app')
        .factory('drinkMakerFactory', drinkMakerFactory)

    drinkMakerFactory.$inject = ['$http'];

    function drinkMakerFactory($http) {
        var service = {
            searchForDrinks: searchForDrinks,
            getDrinkById: getDrinkById

        };

        return service;

            //drink by specific alcohol
        function searchForDrinks(term){
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + term)
                        .then(function(response){ 
                        return response.data.drinks;
                          });

        }
            //drink by name of cocktail
        function getDrinkById(id){
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
                        .then(function(response){ 
                        return response.data.drinks[0];
                        });

        }

    }
})();