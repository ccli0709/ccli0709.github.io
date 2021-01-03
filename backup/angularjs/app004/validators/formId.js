// 模擬一個必須寫程式的驗證方法，每個方法獨立成一個js檔，就可以重複利用了
// 這是官方教案的寫法
app.directive('formIdValidator', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.formId = function(modelValue, viewValue) {
        console.log("modelValue:" + modelValue);
        console.log("ctrl.$isEmpty(modelValue):" + ctrl.$isEmpty(modelValue));
        if (ctrl.$isEmpty(modelValue)) {
          // 在input標籤裡自訂驗證之前放required,所以這裡為空白就讓它通過,以免出現兩道錯誤訊息.
          return true;
        }

        // 假設有一個不容易用ngPattern做出來的驗證方法
        // 假設表單編號格式,1-4碼西元年,5-9碼是單位別,10-12是流水號
        if (viewValue.length == 12) {
          var year = viewValue.substring(0, 4);
          var dept = viewValue.substring(4, 9);
          var sn = viewValue.substring(9, 12);
          console.log(year);
          console.log(dept);
          console.log(sn);

          if (dept == 'F3500') {
            return true;
          }
        }

        // it is invalid
        return false;
      };
    }
  };
});

// 模擬一個必須寫程式的驗證方法，每個方法獨立成一個js檔，就可以重複利用了
// 這是臺灣網路教學的寫法
//app.directive('formIdValidator', function() {
//  return {
//    require: 'ngModel',
//    link: function(scope, elm, attrs, ctrl) {
//
//      var validator = function(viewValue) {
//        if (viewValue == null) viewValue = "";
//        var validateResult = false;
//        var validateKey = 'formId';
//
//        // 假設有一個不容易用ngPattern做出來的驗證方法
//        // 假設表單編號格式,1-4碼西元年,5-9碼是單位別,10-12是流水號
//        if (viewValue.length == 12) {
//          var year = viewValue.substring(0, 4);
//          var dept = viewValue.substring(4, 9);
//          var sn = viewValue.substring(9, 12);
//          console.log(year);
//          console.log(dept);
//          console.log(sn);
//
//          if (dept == 'F3500') {
//            validateResult = true;
//          }
//        }
//
//        ctrl.$setValidity(validateKey, validateResult);
//        return viewValue;
//      }
//      // unshift vs. push
//      // 如果希望float在required之後驗證，那就用$parsers.push()和$formatters.push()
//      ctrl.$parsers.unshift(validator);
//      ctrl.$formatters.unshift(validator);
//    }
//  }
//});
