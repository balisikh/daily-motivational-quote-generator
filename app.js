const greetings = [
  "Good morning", 
  "Hello", 
  "Hey there", 
  "Hi",
  "Greetings", 
  "Welcome", 
  "Howdy"
];

const quotes = [
  "Believe in yourself.",
  "Every day is a new beginning.",
  "Small steps lead to big changes.",
  "You are capable of amazing things.",
  "Your journey is just beginning.",
  "One step at a time leads to success."
];

const closings = [
  "Make today count!", 
  "You’ve got this!", 
  "Keep pushing forward!"
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createMotivationalMessage() {
  const greeting = getRandomElement(greetings);
  const quote = getRandomElement(quotes);
  const closing = getRandomElement(closings);
  return `${greeting}! ${quote} ${closing}`;
}

console.log(createMotivationalMessage());
