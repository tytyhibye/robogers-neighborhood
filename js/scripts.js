// Logic Spec's
// Make sure input is a number (html input)
// accomodate multiple numbers (split into array by spaces and punctuation)
// apply logic for number 1 (beep)
// apply logic for number 2 (boop)
// apply logic for number 3 (wont you be my neighbor)

// *Business Logic*
var array = num.split(' ',',','.',':','?');
var sounds =["*beep*","*boop*","won't you be my neighbor?"];
  function translate(num) {
    if(num === 0) {
      return ""
    }
    for(i=0; i < array.length; i ++) {
      if(num <=[i][0]) {
        return sounds[i][0];
      }
    }
  }
  console.log()
  // array.map(function(num) {
  //   if (num >= 1){
  //     replace("*beep*")
  //   } else if (num === 2){
  //     replace("*boop*")
  //   } else if (num === 3){
  //     replace("won't you be my neighbor?")
  //   }

// *User Interface Logic*
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
  
      var num = $("input#number").val();
  });
});