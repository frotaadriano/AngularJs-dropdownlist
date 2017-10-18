var app = angular.module('MyApp', ['angularjs-dropdown-multiselect']);
app.controller('multiselectdropdown', ['$scope', '$http', function ($scope, $http) {
    //define object 
    $scope.CategoriesSelected = [];
    $scope.Categories = [];
    $scope.dropdownSetting = {
        scrollable: true,
        scrollableHeight : '200px',
		displayProp: 'label'
    }
    //fetch data from database for show in multiselect dropdown
    /*$http.get('/home/getcategories').then(function (data) {
        angular.forEach(data.data, function (value, index) {
            $scope.Categories.push({ id: value.CategoryID, label: value.CategoryName });
        });
    })*/
	
	// $scope.Categories = [{id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
	$scope.Categories.push({id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"});
    //post or submit selected items from multiselect dropdown to server
    $scope.SubmittedCategories = [];
    
	$scope.EnviarSelecionados = function(){
		var result = $scope.CategoriesSelected;
	}
	
	
	$scope.SubmitData = function () {
        var categoryIds = [];
        angular.forEach($scope.CategoriesSelected, function (value, index) {
            categoryIds.push(value.id);
        });
 
        var data = {
            categoryIds: categoryIds
        };
 
        /*$http({
            method: "POST",
            url: "/home/savedata",
            data:JSON.stringify(data)
        }).then(function (data) {
            $scope.SubmittedCategories = data.data;
        }, function (error) {
            alert('Error');
        })*/
    }
}])