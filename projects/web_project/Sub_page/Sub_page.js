function myfunction(s){
  if(s == 1){
    var val = window.prompt("You have picked our Bronze package ! , Would you be intrested to add more to it ?(press 1 for yes, 0 for no)",0);
    if(val == 1){
      var pack1 = window.prompt("Would you like to add parking space to your package ?(press 1 for yes, 0 for no)",0);
      if(pack1 == 1){
        alert("Done!! your total is 90$");
      }else{
        alert("Done!! your total is 70$");
      }
    }else{
      alert("Done!! your total is 70$");
    }
  }else if(s == 2){
    var val = window.prompt("You have picked our Silver package ! , Would you be intrested to add more to it ?(press 1 for yes, 0 for no)",0);
    if(val == 1){
      var pack1 = window.prompt("Would you like to add personal coach to your package ?(press 1 for yes, 0 for no)",0);
      if(pack1 == 1){
        alert("Done!! your total is 200$");
      }else{
        alert("Done!! your total is 120$");
      }
    }else{
      alert("Done!! your total is 120$");
    }
  }else if(s == 3){
    var val = window.prompt("You have picked our Gold package ! , Would you be intrested to add more to it ?(press 1 for yes, 0 for no)",0);
    if(val == 1){
      var pack1 = window.prompt("Would you like to add personal Classes to your package ?(press 1 for yes, 0 for no)",0);
      if(pack1 == 1){
        alert("Done!! your total is 300$");
      }else{
        alert("Done!! your total is 200$");
      }
    }else{
      alert("Done!! your total is 200$");
    }
  }
}
