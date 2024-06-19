// app/app.controller.js
angular.module("taskManagerApp").controller("TaskController", [
  "$scope",
  function ($scope) {
    $scope.tasks = [];
    $scope.newTask = "";

    $scope.addTask = function () {
      if ($scope.newTask.trim() !== "") {
        $scope.tasks.push({ name: $scope.newTask, completed: false });
        $scope.newTask = "";
      }
    };

    $scope.toggleCompletion = function (task) {
      task.completed = !task.completed;
    };

    $scope.removeTask = function (index) {
      $scope.tasks.splice(index, 1);
    };
  },
]);
