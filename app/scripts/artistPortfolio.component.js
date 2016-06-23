(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .value('$routerRootComponent', 'artistPortfolio')
    .component('artistPortfolio', {
      template: '<ng-outlet id="main-outlet" artist="$ctrl.artist"></ng-outlet>',
      controller: artistPortfolioCtrl,
      $routeConfig: [
        {path: '/', name: 'Enter', component: 'enter'},
        {path: '/forgiveness/...', name: 'Main', component: 'main'}
      ]
    });

  function artistPortfolioCtrl() {
    var vm = this;
    vm.artist = {
      name: 'Elya Romanov'
    };
  };

})();
