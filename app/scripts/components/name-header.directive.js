angular
  .module('artistPortfolio')
  .component('nameHeader', {
    template: '{{::$ctrl.artistName}}',
    controller: function() {
      this.artistName = 'Stina Persson';
    }
  });
