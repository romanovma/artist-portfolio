(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('works', {
      templateUrl: 'scripts/home/works.component.html',
      controller: worksCtrl
    });

  function worksCtrl() {
    var vm = this;
    vm.baguetteInit = false;
    vm.path = 'images/';
    vm.works = {
      collage: [
        '12118925_546390765510702_1850986385131892015_n.jpg',
        '1911137-GJERXNMI-7.jpg',
        '2239903-LCDGFRTY-7.jpg',
        '2239911-TZYZXJQA-7.jpg'
      ],
      drawing: [
        '2239941-EPWPMDPI-7.jpg',
        '2239950-SWNUBDMV-7.jpg',
        '2239955-MOUWSNEV-7.jpg',
        '2239960-CRAUAWQO-7.jpg',
        '13438867_647221675427610_8008859344759469478_n.jpg'
      ],
      painting: [
        '1868330-SDTWMKSP-7.jpg',
        '1868335-JCHSCAIY-7.jpg',
        '1868344-FTRRKLHQ-7.jpg',
        '2239880-TIOGCPRA-7.jpg'
      ]
    };

    this.$routerOnActivate = function(next) {
      vm.type = next.params.type;
    };

    angular.element(document).ready(function() {
      baguetteBox.run('.works', {
        animation: 'slideIn',
        overlayBackgroundColor: '#000',
        afterShow: swipeOnClick
      });
    });

    function swipeOnClick() {
      var elems = document.querySelectorAll('#baguetteBox-slider .full-image');

      if (!vm.baguetteInit) {
        for (var i = 0, length = elems.length; i < length; i++) {
          elems[i].onclick = clickHandler;
          elems[i].touchend = clickHandler;
        }
        vm.baguetteInit = true;
      }
    }

    function clickHandler(e) {
      if (e.pageX > window.innerWidth / 2) {
        baguetteBox.showNext();
      } else {
        baguetteBox.showPrevious();
      }
    }
  }
})();
