(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('carousel', {
      templateUrl: 'scripts/common/carousel.component.html',
      controller: carouselController
    });

  function carouselController() {
    var vm = this;

    vm.path = 'images/enter/';
    vm.images = [
      '1868344-FTRRKLHQ-7.jpg',
      '2239880-TIOGCPRA-7.jpg',
      '2239911-TZYZXJQA-7.jpg',
      '2239979-BFKYEHCJ-7.jpg',
      '2239990-PGZLAKCJ-7.jpg'
    ];
  }
})();
