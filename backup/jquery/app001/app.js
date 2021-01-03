// 參考來源
// http://lova.logdown.com/posts/162837-html-javascript-3-the-after-school-exercise-calculator

// 暫存運算用的變數
var valueKeep = "";
// 暫存運算用的待號
var operator = "";
// 暫存M+/M-/MR/MC
var valueM = "";



//數字鍵與小數點
function numBtnClick(input) {

  if (operator === "") {
    if (input === ".") {
      return;
    }
    
    $("#box").val(input);
    operator = "0";
    return;
  };

  if ($("#box").val() === "0") {
    // 第一個數字不得輸入小數點
    if (input === ".") {
      return;
    }
    $("#box").val(input);
  } else {

    // 不得輸入兩個以上的小數點
    if (input === "." && $("#box").val().indexOf(".") >= 0) {
      return;
    }

    $("#box").val($("#box").val() + input);
  }

}

//運算符號
function operBtnClick(input) {

  //不按等號的連續運算
  equal();

  valueKeep = $("#box").val();
  operator = input;

  $("#box").val("0");
}

function equal() {

  switch (operator) {
    case '+':
      $("#box").val(parseFloat(valueKeep) + parseFloat($("#box").val()));
      break;
    case '-':
      $("#box").val(parseFloat(valueKeep) - parseFloat($("#box").val()));
      break;
    case '*':
      $("#box").val(parseFloat(valueKeep) * parseFloat($("#box").val()));
      break;
    case '/':
      $("#box").val(parseFloat(valueKeep) / parseFloat($("#box").val()));
      break;
    default:
      break;
  }


  //防呆用
  temp = "";
  operator = "";
}

function funcBtnClick(input) {

  switch (input) {
    case 'M+':
      valueKeep += parseFloat($("#box").val());
      break;
    case 'M-':
      valueKeep -= parseFloat($("#box").val());
      break;
    case 'MC':
      temp = 0;
      strOper = 0;
      valueM = 0;
      $("#box").val('0');
      break;
    case 'MR':
      $("#box").val(parseFloat(valueKeep));

      //防呆用
      temp = null;
      strOper = null;
      break;
    default:
      break;
  }
}
