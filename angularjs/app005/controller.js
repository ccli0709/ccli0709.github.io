app.controller('myController', function($scope) {
  $scope.detailModels = [{
    userMail: 'ccli0709@gmail.com',
    userName: 'ccli0709',
  }, {
    userMail: 'ccli1234@gmail.com',
    userName: 'ccli1234',
  }, {
    userMail: 'ccli5678@gmail.com',
    userName: 'ccli5678',
  }, {
    userMail: 'ccli7890@gmail.com',
    userName: 'ccli7890',
  }, {
    userMail: 'ccliABCD@gmail.com',
    userName: 'ccliABCD',
  }];

  console.log($scope.detailModels);
});
