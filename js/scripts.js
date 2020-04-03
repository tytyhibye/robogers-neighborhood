// Logic Spec's
// Make sure input is a number (html input)
// take input integer and break into count leading up to input integer
// apply logic for number 1 (beep)
// apply logic for number 2 (boop)
// apply logic for number 3 (wont you be my neighbor)

// *Business Logic*



  

  
  
 
// *User Interface Logic*
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    
    var num = $("input#number").val();
    // if(num > 50) num = 50
    var result = ""
    
    
    for(let i = 0; i <= num; i++){
      
      if(i.toString().includes(3)){
        return "Won't you be my neighbor";
      }else if(i.toString().includes(2)){
        return"*boop*";
      }else if(i.toString().includes(1)){
        return "*beep*";
      }else{
        return i;
      }
    }

  });
});