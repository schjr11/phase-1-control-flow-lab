function scuberGreetingForFeet(height){
  if(height <= 400) {
    return 'This one is on me!';
  }
  else if(height > 2000 && height <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if(height > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return(city==='NYC'?"Ok, sounds good.":"No go.");
}

function switchOnCharmFromTip(generosity){
  switch(generosity) {
    case 'generous': return "Thank you so much.";
    case 'not as generous': return "Thank you.";
    default: return "Bye.";
  }
}