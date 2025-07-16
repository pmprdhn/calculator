const screen = document.getElementById("display");




function display(element){
  screen.value+=element;
}

function clearDisplay(){
  screen.value = "";
}

function calculate(){
  try{
    screen.value= eval(screen.value);
  }
  catch(err){
    screen.value = "Error";
  }
  
}