(function () {
  "use strict"
})()

var controllers = angular.module("controllers", [

])

controllers.controller("LoginCtrl", ["$scope",
  function ($scope) {
    $scope.mouse = 1
    $scope.submit = function () {
      console.log($scope.data)
    }
    $scope.style = {
      "background-color" : "black"
    }
    $scope.test = "hoo hoo nice"
    /*$scope.$on("key event", function (e) {
      console.log(arguments)
    })*/
  }])

controllers.controller("ChatCtrl", ["$scope",
  function ($scope) {
    $scope.test = "On chat controller"
    $scope.contactContainer = {

    }
    $scope.contact = {

    }
  }])
