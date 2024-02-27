function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 'That will be twenty bucks.';
} else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
} else if (distanceInFeet > 2500) {
    return 'No can do.';
}
}
//ternary condition/operator 
//condition ? what hapens if true : what happens if false
//short hand for if and else

function ternaryCheckCity(cityName){
  // Write your code here!
  cityName ==="NYC"
return cityName === "NYC" ? 'Ok, sounds good.' :"No go."
}



function switchOnCharmFromTip(tipValue){
  // Write your code here!
  switch(tipValue)
{case 'generous': return "Thank you so much."
case 'not as generous': return "Thank you."
default: return 'Bye.'
}

}