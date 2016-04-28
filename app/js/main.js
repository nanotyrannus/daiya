(function () {
  "use strict"
})()

var main = angular.module("main", [
  "ngMaterial",
  "ngMessages",
  "ngRoute",
  "controllers"
])

main.run(function ($rootScope) {
  document.addEventListener("keypress", function (e) {
    $rootScope.$broadcast("key event", e)
  })
})

main.controller("mainCtrl", ["$scope",
  function ($scope) {
    $scope.style = {
      "background-color" : "white"
    }
  }])

main.config(["$routeProvider", "$mdThemingProvider",
  function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when("/login", {
        "templateUrl" : "partials/login.html",
        "controller" : "LoginCtrl"
      })
      .when("/chat", {
        "templateUrl" : "partials/chat.html",
        "controller" : "ChatCtrl"
      })
      .otherwise({
        "redirectTo" : "/"
      })

    $mdThemingProvider.theme("main", "default")
      .primaryPalette("cyan")
  }])

main.directive("daiyaMessage", function () {
  return {
    "restrict:" : "A",
    "template" : `<div class=""></div>`
  }
})
