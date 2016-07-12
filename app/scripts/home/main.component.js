(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('main', {
      templateUrl: 'scripts/home/main.component.html',
      $routeConfig: [
        {path: '/news', name: 'News', component: 'news'},
        {path: '/:type', name: 'Works', component: 'works'},
        {path: '/about', name: 'About', component: 'about'}
      ],
      controller: mainCtrl,
      require: {
        artistPortfolioCtrl: '^artistPortfolio'
      }
    });

  function mainCtrl() {
    var vm = this;

    vm.select = function(tab) {
      console.log(tab);
    };

    vm.$onInit = function() {
      vm.artist = vm.artistPortfolioCtrl.artist;
    };
  }
})();
