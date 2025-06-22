// Daily Motivational Quote Generator (loop + switch version)

const messageParts = {
  greetings: [
    "Good morning",
    "Hello",
    "Hey there",
    "Hi",
    "Greetings",
    "Welcome",
    "Howdy"
  ],
  quotes: [
    "Believe in yourself.",
    "Every day is a new beginning.",
    "Small steps lead to big changes.",
    "You are capable of amazing things.",
    "Your journey is just beginning.",
    "One step at a time leads to success."
  ],
  closings: [
    "Make today count!",
    "You’ve got this!",
    "Keep pushing forward!"
  ]
};

// Function: Get a random item from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createMotivationalMessage() {
  let message = "";

  for (const part in messageParts) {
    switch (part) {
      case "greetings":
        message += getRandomElement(messageParts[part]) + "! ";
        break;
      case "quotes":
        message += getRandomElement(messageParts[part]) + " ";
        break;
      case "closings":
        message += getRandomElement(messageParts[part]);
        break;
    }
  }

  return message;
}

console.log(createMotivationalMessage());
