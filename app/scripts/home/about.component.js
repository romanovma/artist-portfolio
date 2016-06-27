(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('about', {
      templateUrl: 'scripts/home/about.component.html',
      controller: aboutCtrl,
      require: {
        artistPortfolioCtrl: '^artistPortfolio'
      }
    });

  function aboutCtrl() {
    var vm = this;

    vm.$onInit = function() {
      vm.artist = vm.artistPortfolioCtrl.artist;
    };
  }
})();
