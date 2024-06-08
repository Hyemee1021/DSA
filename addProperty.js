//add a new property usersAnswer- to every object in the array
//usersAnswer should set to null

//loop to iterate over each object in the questions array, add the userAnser property.

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
  },
];
for (let ele of questions) {
  ele.usersAnswer = null;
}
