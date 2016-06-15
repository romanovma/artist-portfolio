(function() {
  'use strict';

  angular.module('artistPortfolio')
    .controller('mainCtrl', mainCtrl);

  function mainCtrl() {
    var vm = this;
    vm.artist = {
      name: 'Stina Persson'
    };
  };

})();
