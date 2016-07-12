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

    this.$routerOnActivate = function(next) {
      vm.type = next.params.type;
    };

    vm.path = 'images/';

    vm.works = {
      collage: [
        '1911132-FTOYMZBW-7.jpg',
        '1911137-GJERXNMI-7.jpg',
        '2239903-LCDGFRTY-7.jpg',
        '2239911-TZYZXJQA-7.jpg'
      ],
      drawing: [
        '1713180-FYPDJCIK-7.jpg',
        '1713268-RUOXQWXO-7.jpg',
        '1713306-QXXBLMWM-7.jpg',
        '1714219-XIMFGPJA-7.jpg',
        '2239941-EPWPMDPI-7.jpg',
        '2239864-EOMSTEDK-7.jpg',
        '2239950-SWNUBDMV-7.jpg',
        '2239955-MOUWSNEV-7.jpg',
        '2239960-CRAUAWQO-7.jpg',
        '2239990-PGZLAKCJ-7.jpg'
      ],
      painting: [
        '1868330-SDTWMKSP-7.jpg',
        '1868335-JCHSCAIY-7.jpg',
        '1868344-FTRRKLHQ-7.jpg',
        '2239880-TIOGCPRA-7.jpg'
      ]
    };
  }
})();
