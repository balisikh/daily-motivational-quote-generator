// Daily Motivational Quote Generator

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrays of message components
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

// Function: Get a random item from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function: Build a complete motivational message with name
function createMotivationalMessage(name) {
  const greeting = getRandomElement(greetings);
  const quote = getRandomElement(quotes);
  const closing = getRandomElement(closings);
  return `${greeting}, ${name}! ${quote} ${closing}`;
}

// Ask user for their name and display the message
readline.question("What's your name? ", function(name) {
  console.log(createMotivationalMessage(name));
  readline.close();
});
