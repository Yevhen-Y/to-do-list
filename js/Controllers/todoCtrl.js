app.controller('todoCtrl', ['$scope', function($scope) {

    $scope.todoList = [];
//add a new card
    $scope.todoAdd = function() {
        $scope.todoList.push({
            title: $scope.todoInput
        });
        $scope.todoInput = "";
        console.log($scope.todoList)
    };
// remove current card
    $scope.delete = function() {
        $scope.todoList.splice(this.$index, 1);
        console.log($scope.todoList)
    }
// sort by title
    $scope.sortByName = function() {

        var elemSortedByIndex = document.querySelectorAll(".cardListByIndex")
        var elemSortedByTitle = document.querySelectorAll(".cardListByTitle")

        elemSortedByIndex.forEach(function(item, i, arr) {
            elemSortedByIndex[i].style.display = "none";
        });
        elemSortedByTitle.forEach(function(item, i, arr) {
            elemSortedByTitle[i].style.display = "block";
        });

        console.log($scope.todoList)
    }
//sort by number
    $scope.sortByNumber = function() {

        var elemSortedByIndex = document.querySelectorAll(".cardListByIndex")
        var elemSortedByTitle = document.querySelectorAll(".cardListByTitle")

        elemSortedByIndex.forEach(function(item, i, arr) {
            elemSortedByIndex[i].style.display = "block";
        });
        elemSortedByTitle.forEach(function(item, i, arr) {
            elemSortedByTitle[i].style.display = "none";
        });
        console.log($scope.todoList)

    }


}])