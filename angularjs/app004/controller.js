app.controller('myController', function($scope) {
  $scope.masterModel = {
    formId: '20170101A01',
    userMail: 'ccli0709@gmail.com',
    userName: 'ccli0709',
    personalId: 'T122780933'
  };


  $scope.emulateUpdateData = function() {
    $scope.masterModel = {
      formId: '20170101A02',
      userMail: 'shan5433@gmail.com',
      userName: 'shan5433',
      personalId: 'T122780933'
    };

    // 重置form的$dirty
    $scope.masterForm.$setUntouched();
    $scope.masterForm.$setPristine();
  }


});
