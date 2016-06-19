(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('main', {
      templateUrl: 'scripts/home/main.component.html',
      controller: mainCtrl,
      require: {
        artistPortfolioCtrl: '^artistPortfolio'
      }
    });

  function mainCtrl() {
    var vm = this;

    vm.$onInit = function() {
      vm.artist = vm.artistPortfolioCtrl.artist;
    };
  };

})();
