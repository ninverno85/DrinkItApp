(function () {
  'use strict';

  //The controller
  angular
    .module('app')
    .controller('DrinkMakerController', DrinkMakerController);

  DrinkMakerController.$inject = ['drinkMakerFactory'];

  /* @ngInject */
  function DrinkMakerController(drinkMakerFactory) {
    var vm = this;

    //high level overview
    vm.searchForDrinks = searchForDrinks;
    vm.getDrinkById = getDrinkById;
    ///////////
    // implementation details
    function searchForDrinks(searchTerm) {
      drinkMakerFactory
        .searchForDrinks(searchTerm)
        .then(function (data) {
        vm.results = data;
      });
    }
    function getDrinkById(id) {
      drinkMakerFactory
        .getDrinkById(id)
        .then(function (data){
        vm.selectedDrink = data;
      });
    }
  }
})();
