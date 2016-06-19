(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('artistName', {
      templateUrl: 'scripts/common/artistName.component.html',
      controller: artistNameController,
      bindings: {
        artist: '<'
      }
    });

  function artistNameController() {

  }

})();
