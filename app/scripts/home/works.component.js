(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('works', {
      templateUrl: 'scripts/home/works.component.html',
      controller: worksCtrl,
    });

  function worksCtrl() {
    var vm = this;

    vm.works = {
      collage: [
        '1911132-FTOYMZBW-7.jpg',
        '1911137-GJERXNMI-7.jpg',
        '2239903-LCDGFRTY-7.jpg',
        '2239911-TZYZXJQA-7.jpg'
      ],
      drawing: [
        
      ]
    }
  };

})();
