(function () {
    var app = angular.module('contoso', []);

    var title = '';

    app.controller('ContosoUniversity', function () {
        this.title = 'Contoso University';
    });
})();