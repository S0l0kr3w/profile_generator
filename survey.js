const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
rl.question("What's your name? Nicknames are also acceptable : ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);
              console.log(`${answers[0]} likes to ${answers[1]} while listening to some ${answers[2]}. For ${answers[3]}, ${answers[0]} has an absolute hankering for ${answers[4]} all the time.  ${answers[0]} also is a beast in ${answers[5]} and you better watch out this person is ${answers[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

        
  
// rl.question('What is an activity that you like doing? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('What do you listen to while doing that? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('Which sport is your absolute favourite?', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });



