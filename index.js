function scuberGreetingForFeet(space){
  // Write your code here!
  if (space <= 400)
  return "This one is on me!"
  else if (space <= 2499)
  return "I will gladly take your thirty bucks."
  else if (space >= 2500)
  return "No can do."

}

function ternaryCheckCity(city){
  // Write your code here!
  return (city == 'NYC' ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
      default: return 'Bye.';

  }
}