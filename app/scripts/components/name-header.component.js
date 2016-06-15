(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('nameHeader', {
      templateUrl: 'scripts/components/name-header.component.html',
      controller: NameHeaderController,
      bindings: {
        artist: '<'
      }
    });

  function NameHeaderController() {

  }

})();
