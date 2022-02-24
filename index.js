function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue <= 400) {
    return `This one is on me!`
  }
  else if (someValue > 2500) {
    return `No can do.`
  }
  else if (someValue > 2000) {
    return `I will gladly take your thirty bucks.`
  }
}
scuberGreetingForFeet(199)

function ternaryCheckCity(city) {
  // Write your code here!
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
}

function switchOnCharmFromTip(feeling) {
  // Write your code here!
  switch (feeling) {
    case `generous`:
      return `Thank you so much.`
    case `not as generous`:
      return `Thank you.`
    default:
      return `Bye.`
  }
}

// what is a function parameter and what is its purpose, when do arguments get passed in?
// do i need to invoke in the test driven environment?