app.directive('deptAsyncValidator', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var depts = ['F3100', 'F3200', 'F3300', 'F3400', 'F3500'];

      ctrl.$asyncValidators.deptAsync = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          // 在input標籤裡自訂驗證之前放required,所以這裡為空白就讓它通過,以免出現兩道錯誤訊息.
          return $q.resolve();
        }

        var def = $q.defer();

        if (viewValue.length !== 5) {
          return $q.reject();
        }

        console.log("modelValue=" + modelValue);
        console.log("viewValue=" + viewValue);

        $timeout(function() {
          // 模擬一個檢查單位是否存在於資料庫的方法
          // 為什麼是用modelValue,而不是用viewValue?
          viewValue = viewValue.toUpperCase();
          if (depts.indexOf(viewValue) >= 0) {
            // 無法回寫viewValue
            console.log("XXXXX");
            ctrl.$setViewValue("XXXXX");
            def.resolve();
          } else {
            def.reject();
          }

        }, 500);

        return def.promise;
      };
    }
  };
});
