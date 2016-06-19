(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('enter', {
      templateUrl: 'scripts/home/enter.component.html',
      controller: enterCtrl,
      require: {
        artistPortfolioCtrl: '^artistPortfolio'
      }
    });

  function enterCtrl() {
    var vm = this;

    vm.$onInit = function() {
      vm.artist = vm.artistPortfolioCtrl.artist;
    };
  };

})();
