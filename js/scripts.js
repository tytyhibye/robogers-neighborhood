// Logic Spec's
// Make sure input is a number (html input)
// accomodate multiple numbers (split into array by spaces and punctuation)
// apply logic for number 1 (beep)
// apply logic for number 2 (boop)
// apply logic for number 3 (wont you be my neighbor)

// *Business Logic*
var array = num.split(' ',',','.',':','?');
  var beep = array.indexOf(1);
  var boop = array.indexOf(2);
  var neighbor = array.indexOf(3);
  if (beep !== -1) {
    array[beep] = "*beep*";
  } else if (boop !== -1) {
    array[boop] = "*boop*";
  } else if (neighbor !== -1) {
    array[neighbor] = "Won't you be my neighbor?"
  }


// *User Interface Logic*
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
  
      var num = $("input#number").val();
  });
});