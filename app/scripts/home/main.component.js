(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('main', {
      templateUrl: 'scripts/home/main.component.html',
      $routeConfig: [
        {path:'/news', name: 'News', component: 'news'},
        {path:'/', name: 'Collage', component: 'collage'},
        {path:'/drawing', name: 'Drawing', component: 'drawing'},
        {path:'/about', name: 'About', component: 'about'}
      ],
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
