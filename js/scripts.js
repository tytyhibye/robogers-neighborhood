// Logic Spec's
// Make sure input is a number (html input)
// take input integer and break into count leading up to input integer
// apply logic for number 1 (beep)
// apply logic for number 2 (boop)
// apply logic for number 3 (wont you be my neighbor)

// *Business Logic*



  

  
  
 
// *User Interface Logic*
$(document).ready(function() {
  var sounds =["*beep*","*boop*","won't you be my neighbor?"];
  let numHolder = []
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    
    var num = $("input#number").val();
    numHolder.push(parseInt(num))
    if(num > 5) num = 5
      for(let i = 0; i <= num; i++){
        console.log(i)
      }

  });
});