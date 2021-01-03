app.controller('myController', function($scope) {
  $scope.masterModel = {
    formId: '2017F3500001',
    userMail: 'ccli0709@gmail.com',
    userName: 'ccli0709',
    personalId: 'T122780933'
  };


  $scope.emulateUpdateData = function() {
    $scope.masterModel = {
      formId: '2017F3420001',
      userMail: 'shan5433@gmail.com',
      userName: 'shan5433',
      personalId: 'T122780933'
    };

    // 重置form的$dirty
    $scope.masterForm.$setUntouched();
    $scope.masterForm.$setPristine();
  }


});
