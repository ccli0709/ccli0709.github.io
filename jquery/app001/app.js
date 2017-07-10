// 參考來源
// http://lova.logdown.com/posts/162837-html-javascript-3-the-after-school-exercise-calculator

var valueKeep = "";
var operator = "";
var temp = "";

//數字鍵與小數點
function numBtnClick(input) {

  //避免填入運算後的數字的後面

  if (operator === "") {
    $("#box").val(input);
    operator = "0";
    return;
  };

  if ($("#box").val() === "0") {
    $("#box").val(input);
  } else {
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

  switch (str) {
    case 'M+':
      valueM += parseFloat(document.getElementById("box").value);
      break;
    case 'M-':
      valueM -= parseFloat(document.getElementById("box").value);
      break;
    case 'MC':
      temp = 0;
      strOper = 0;
      valueM = 0;
      document.getElementById("box").value = '0';
      break;
    case 'MR':
      document.getElementById("box").value = parseFloat(valueM);
      //防呆用

      temp = null;
      strOper = null;
      break;
    default:
      break;
  }
}
