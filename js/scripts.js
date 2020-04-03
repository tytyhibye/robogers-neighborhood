// Logic Spec's
// Make sure input is a number (html input)
// take input integer and break into count leading up to input integer
// apply logic for number 1 (beep)
// apply logic for number 2 (boop)
// apply logic for number 3 (wont you be my neighbor)
// apply cascade so logic order is for number 3, then 2, then 1
// display results of logic in user interface

$(document).ready(function() {
  var output = ''
  let num
  let stringHolder = []
  // if(num > 50) num = 50
  let translate = function() {
    num = $("input#number").val();
    for(i = 0; i <= num; i++) {
      if(i.toString().includes(3)) {
       stringHolder.push("Won't you be my neighbor")
      }else if(i.toString().includes(2)) {
        stringHolder.push("*boop*")
      }else if(i.toString().includes(1)) {
        stringHolder.push("*beep*")
      }else {
        stringHolder.push(i);
      }
    }
    console.log(stringHolder)
  }  
  

  $("#numbers").submit(function(event) {
    event.preventDefault();
    translate()
    $("#output").text();
  });
});