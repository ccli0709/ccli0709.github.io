// 模擬一個必須寫程式的驗證方法，每個方法獨立成一個js檔，就可以重複利用了
app.directive('formIdValidator', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

      var validator = function(viewValue) {
        console.log(viewValue);
        // 假設有一個不容易用ngPattern做出來的驗證方法
        // 假設表單編號格式,1-4碼西元年,5-9碼是單位別,10-12是流水號
        // 下一步再來測試必須回後端驗證的方法
        if (viewValue.length != 12) {
          ctrl.$setValidity('formId', false);

        } else {
          ctrl.$setValidity('formId', true);

        }
        // 希望預設值帶入時,若有錯誤時不要被清掉
        return viewValue;
      }


      // unshift vs. push
      // 如果希望float在required之後驗證，那就用$parsers.push()和$formatters.push()
      ctrl.$parsers.unshift(validator);
      ctrl.$formatters.unshift(validator);


    }
  }
});
