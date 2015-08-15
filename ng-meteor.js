if (Meteor.isClient) {
    (function (ng) {
        var ngMeteorApp = ng.module('ng-meteor', ['angular-meteor']);
        ngMeteorApp.controller('NgMeteorController', [function () {
            var ngMeteor = this;
            ngMeteor.tasks = [
                {text: 'This is task 1'},
                {text: 'This is task 2'},
                {text: 'This is task 3'}
            ];
        }]);
    })(angular);
}
if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}