(function() {
  'use strict';

  angular
    .module('artistPortfolio')
    .component('news', {
      templateUrl: 'scripts/home/news.component.html',
      controller: newsCtrl,
    });

  function newsCtrl() {
    var vm = this;
  };

})();
