angular.module('Axle.directives', [])
.directive('navBar', function() {
    return {
        templateUrl: 'directives/navbar.html',
        restrict: 'E'
        // scope: {
        //     nav: '=navData'
        // }
    }
})
.directive('footer', function() {
    return {
        templateUrl: 'directives/footer.html',
        restrict: 'E'
        // scope: {
        //     footer: '=footData'
        // }
    }
});
// .directive('slider', function() {
//     return {
//         templateUrl: 'directives/slider.html',
//         restrict: 'E'
//     }
// })