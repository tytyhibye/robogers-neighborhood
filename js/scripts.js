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
  var num = $("input#number").val();
  // if(num > 50) num = 50
  let translate = function() {
    for(i = 0; i <= num; i++) {
      if(i.toString().includes(3)) {
        console.log(i)
        output = "Won't you be my neighbor";
        console.log(output)
      }else if(i.toString().includes(2)) {
        output = "*boop*";
      }else if(i.toString().includes(1)) {
        output = "*beep*";
      }else {
        output = i;
      }
    }
  }  
  

  $("#numbers").submit(function(event) {
    event.preventDefault();
    translate()
    $("#output").text(output);
  });
});