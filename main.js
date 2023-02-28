/* This function adds all the values of button we click into the the input feild */
function add(value) {
  var t = calstr.value + value;
  calstr.value = t;
}
//  this function deletes the last character of the input feild
function backspace(value) {
  var t = value.slice(0, -1);
  calstr.value = t;
}
// this is the power function
function power(value) {
  if (value.length <= 14) {
    result = eval(value * value);
    calstr.value = result;
    val = value + "*" + value;
    // calling another function to add the the operation in the history list
    addingListInHistory(val, result);
  } else {
    calstr.value = "Limit Exceed";
  }
}
//  function to add the the operation in the history list
function addingListInHistory(value, result) {
  var list = document.getElementById("list");
  li = document.createElement("li");
  li.innerHTML = value + "=" + result;
  list.appendChild(li);
}
// function to perform all the matehmetcal operation
function operation(value) {
  result = eval(value);
  calstr.value = result;
  calstr.value = 0;
  addingListInHistory(value, result);
}
// function to delete  the history list , Double click on AC to delete history
function clea() {
  list.innerHTML = "";
}
