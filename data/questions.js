export const QUESTIONS = [
  {
    // =================================================
    //                     INTRODUCTION
    // =================================================
    name: "Introduction",
    questions: [
      {
        id: "q1",
        text: "What can you do with JavaScript?",
        answers: [
          "Create dynamic and interactive websites, mobile apps, games, process data, etc.",
          "Only design website layouts",
        ],
      },
      {
        id: "q2",
        text: "What is the role of the console in JavaScript?",
        answers: [
          "A part of the web browser that allows you to log messages, run JavaScript code, and see errors and warnings.",
          "A function used to style text on a webpage.",
        ],
      },
      {
        id: "q3",
        text: "Which of the following correctly logs the text 'Hello JavaScript!' to the console?",
        answers: [
          "console.log('Hello JavaScript!');",
          "log.console('Hello JavaScript!');",
          "console.log{'Hello JavaScript!'};",
        ],
      },
      {
        id: "q4",
        text: "How would you output the text 'Success!' using the console.log function?",
        answers: [
          "console.log('Success!');",
          "console.log{Success!};",
          "console.log(Success!);",
        ],
      },
      {
        id: "q5",
        text: "True or False: You need to use quotes when logging numbers to the console.",
        answers: ["False", "True"],
      },
      {
        id: "q6",
        text: "How do you write multiple console.log statements?",
        answers: [
          "Write each statement on a new line.",
          "Combine them into one log statement using commas.",
        ],
      },
      {
        id: "q7",
        text: "What function is used to generate output to the console?",
        answers: ["console.log()", "output.console()", "print()", "write()"],
      },
      {
        id: "q8",
        text: "How many times can you use console.log() in your program?",
        answers: [
          "As many times as you want.",
          "Only once per program.",
          "Three times per program.",
          "It depends on the browser.",
        ],
      },
      {
        id: "q9",
        text: "What do you wrap around text so that it is displayed in the console?",
        answers: [
          `Quotes ""`,
          "Brackets []",
          "Parentheses ()",
          "Curly braces {}",
        ],
      },
      {
        id: "q10",
        text: "What do you wrap around numbers to be displayed in the console?",
        answers: ["Nothing", `Quotes ""`, "Brackets []", "Parentheses ()"],
      },
    ],
  },
  // =================================================
  //                     COMMENTS
  // =================================================
  {
    name: "Comments",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a valid JavaScript comment?",
        answers: [
          "// Am I a comment?",
          "# This is correct",
          "<>This is a comment<>",
          "/ What about this? /",
        ],
      },
      {
        id: "q2",
        text: "What syntax do you use to make a multi-line comment?",
        answers: [
          "/* Think carefully.... */",
          "// Does this work? //",
          "# Maybe me? #",
          "/ Pick me! /",
        ],
      },
      {
        id: "q3",
        text: "How do you write a single-line comment in JavaScript?",
        answers: [
          "// This is a comment",
          "/* This is a comment */",
          "# This is a comment",
          "<> This is a comment <>",
        ],
      },
      {
        id: "q4",
        text: "How do you write a multi-line comment in JavaScript?",
        answers: [
          "/* This is a multi-line comment */",
          "// This is a multi-line comment //",
          "# This is a multi-line comment #",
          "<> This is a multi-line comment <>",
        ],
      },
      {
        id: "q5",
        text: "What do comments do in a JavaScript program?",
        answers: [
          "They explain the code to other developers and are ignored by the compiler.",
          "They are displayed in the console.",
          "They are required to run the program.",
          "They change the output of the code.",
        ],
      },
      {
        id: "q6",
        text: "What is the output of this code?",
        code: `console.log(5);\n// console.log("Hello");`,
        answers: ["5", "Hello", "5\nHello", "No output"],
      },
    ],
  },
  // =================================================
  //               SIMPLE OPERATIONS
  // =================================================
  {
    name: "Simple Operations",
    questions: [
      {
        id: "q1",
        text: "What does console.log(3+4) output?",
        answers: ["7", "34", "3+4", "1"],
        code: `console.log(3+4);`,
      },
      {
        id: "q2",
        text: "Which of the following code snippets correctly multiplies 3 by 4?",
        answers: [
          "console.log(3*4);",
          "console.log(3x4);",
          "console.log('3*4');",
          "console.log(34);",
        ],
      },
      {
        id: "q3",
        text: "What is the output of console.log(6+5-1)?",
        answers: ["10", "11", "12", "9"],
        code: `console.log(6+5-1);`,
      },
      {
        id: "q4",
        text: "How do you perform division in JavaScript?",
        answers: [
          "Using the slash symbol (/)",
          "Using the backslash symbol (\\)",
          "Using the asterisk symbol (*)",
          "Using the percent symbol (%)",
        ],
      },
      {
        id: "q5",
        text: "What is the output of console.log(4+2*5)?",
        answers: ["14", "30", "20", "6"],
        code: `console.log(4+2*5);`,
      },
      {
        id: "q6",
        text: "Which code would give you the result of 7?",
        answers: [
          "console.log((1+1)+(10/2));",
          "console.log(2*(9/3));",
          "console.log((3+4)*2);",
          "console.log(6/3-1);",
        ],
      },
      {
        id: "q7",
        text: "What is the output of console.log(1+2*3)?",
        answers: ["7", "6", "3", "9"],
        code: `console.log(1+2*3);`,
      },
      {
        id: "q8",
        text: "How can you control the order of operations in a calculation?",
        answers: [
          "By using parentheses",
          "By using brackets",
          "By using slashes",
          "By using asterisks",
        ],
      },
      {
        id: "q9",
        text: "Which operation is performed first in console.log(8+2*3)?",
        answers: ["Multiplication", "Addition", "Subtraction", "Division"],
        code: `console.log(8+2*3);`,
      },
      {
        id: "q10",
        text: "What will be the output of the following code: console.log((8+2)*3)?",
        answers: ["30", "24", "14", "10"],
        code: `console.log((8+2)*3);`,
      },
    ],
  },
  // =================================================
  //                     VARIABLES
  // =================================================
  {
    name: "Variables",
    questions: [
      {
        id: "q1",
        text: "What are variables in JavaScript?",
        answers: ["containers for storing values", "values", "functions"],
      },
      {
        id: "q2",
        text: "What is the correct way to create a variable and assign it a value?",
        answers: [
          "let action = 'Attack';",
          "let = 'Guard';",
          "variable = 'Cast Spell';",
          "let action = Use Item;",
        ],
      },
      {
        id: "q3",
        text: "How do you assign a value to a variable after creating it?",
        answers: [
          "Using an equal sign (=)",
          "Using a colon (:)",
          "Using a period (.)",
          "Using a semicolon (;)",
        ],
        code: `let spell;\nspell = "Firebolt";`,
      },
      {
        id: "q4",
        text: "Which of the following outputs the value of a variable?",
        answers: [
          "console.log(damage);",
          "console.log('damage');",
          "console.log(let damage = 12);",
          "console.log(9);",
        ],
      },
      {
        id: "q5",
        text: "What will be the output of the following code?",
        answers: ["8", "7", "5", "error"],
        code: `let level = 7;\nlevel = 8;\nconsole.log(level);`,
      },
      {
        id: "q6",
        text: "How do you declare a constant in JavaScript?",
        answers: [
          "Using the const keyword",
          "Using the let keyword",
          "Using the var keyword",
          "Using the constant keyword",
        ],
      },
      {
        id: "q7",
        text: "What will happen if you try to change the value of a constant?",
        answers: [
          "An error will occur",
          "The value will change",
          "The program will ignore the change",
          "The program will reset the value",
        ],
        code: `const spell = "Firebolt";\nspell = "Frostbite";`,
      },
      {
        id: "q8",
        text: "Which of the following is a correctly named variable?",
        answers: [
          "let _Evocation = 'School';",
          "let 1enemy = 'Skeleton';",
          "let new item = 'Potion';",
          "let +spell = 'Bark Skin';",
        ],
      },
      {
        id: "q9",
        text: "Which keyword do you use to create a variable that can change its value?",
        answers: ["let", "const", "var", "new"],
      },
      {
        id: "q10",
        text: "Which of the following statements about variable names is true?",
        answers: [
          "Variable names can start with a letter, underscore, or dollar sign.",
          "Variable names can start with a number.",
          "Variable names can contain spaces.",
          "Variable names are not case-sensitive.",
        ],
      },
    ],
  },
  // =================================================
  //                   DATA TYPES
  // =================================================
  {
    name: "Data Types",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a string?",
        answers: [`"Twenty Nine"`, `"Warrior`, `Dungeon`, `14`],
        code: `console.log("Twenty Nine");`,
      },
      {
        id: "q2",
        text: "What is the data type of the value '3' in the code below?",
        code: `let number = "3";`,
        answers: [`String`, `Number`],
      },
      {
        id: "q3",
        text: "What will be the output of the following code?",
        answers: [`"15"`, `15`, `"1" + "5"`, `"1 5"`],
        code: `console.log("15");`,
      },
      {
        id: "q4",
        text: "Which code correctly defines a number variable with a decimal value?",
        answers: [
          `let y = 8.4;`,
          `let y = "8.4";`,
          `let y = 8;`,
          `let y = '8.4';`,
        ],
      },
      {
        id: "q5",
        text: "What is the result of the following code?",
        answers: [`324`, `60`, `18`, `30`],
        code: `console.log(54 * 6);`,
      },
      {
        id: "q6",
        text: "What will the following code output?",
        answers: [`12`, `4`, `8`, `10`],
        code: `let x = 4;\nlet y = 8;\nconsole.log(x + y);`,
      },
      {
        id: "q7",
        text: "Which of the following is a Boolean value?",
        answers: [`false`, `4`, `spellbook`, `"true"`],
      },
      {
        id: "q8",
        text: "How are strings represented in JavaScript?",
        answers: [
          "By enclosing text in quotes",
          "By using square brackets",
          "By using curly braces",
          "By using parentheses",
        ],
      },
      {
        id: "q9",
        text: "What is the result of this code?",
        answers: [`2`, `4`, `8`, `16`],
        code: `console.log(8 / 4);`,
      },
      {
        id: "q10",
        text: "Which of the following statements is true about the Boolean data type?",
        answers: [
          "It can only be true or false",
          "It can be any number",
          "It can be any string",
          "It can have multiple values like 'yes' or 'no'",
        ],
      },
    ],
  },
  // =================================================
  //               ARITHMETIC OPERATORS
  // =================================================
  {
    name: "Operators",
    questions: [
      {
        id: "q1",
        text: "What is the output of the following code?",
        code: `let x = 5;\nlet y = 3;\nconsole.log(x + y);`,
        answers: ["8", "12", "4", "10"],
      },
      {
        id: "q2",
        text: "How would you raise 5 to the 3rd power?",
        answers: ["console.log(5**3)", "console.log(5*3)", "console.log(5(3))"],
      },
      {
        id: "q3",
        text: "What is the output of the following code?",
        code: `let x = 9;\nlet y = 0.5;\nconsole.log(x**y);`,
        answers: ["3", "9", "4.5", "81"],
      },
      {
        id: "q4",
        text: "What is the remainder when 100 is divided by 3?",
        code: `let balls = 100;\nlet boxes = 3;\nconsole.log(balls % boxes);`,
        answers: ["1", "33", "3", "0"],
      },
      {
        id: "q5",
        text: "What does incrementing a value using the ++ operator do?",
        answers: [
          "It adds 1 to the value.",
          "It does not change the value.",
          "It subtracts 1 from the value.",
          "It assigns 1 to the value.",
        ],
      },
      {
        id: "q6",
        text: "What is the output of this code?",
        code: `let attempts = 10;\nattempts--;\nattempts++;\nconsole.log(attempts);`,
        answers: ["10", "9", "11"],
      },
      {
        id: "q7",
        text: "What is the output of this code?",
        code: `let x = 10;\nconsole.log(x--);`,
        answers: ["10", "9", "8"],
      },
      {
        id: "q8",
        text: "What is the output of this code?",
        code: `let x = 5;\nconsole.log(++x);`,
        answers: ["6", "5", "4", "7"],
      },
      {
        id: "q9",
        text: "What is the output of this code?",
        code: `let x = 10;\nconsole.log(--x);`,
        answers: ["9", "10", "8"],
      },
      {
        id: "q10",
        text: "Which operator is used to calculate the remainder of a division?",
        answers: ["%", "/", "**", "//"],
      },
    ],
  },
  // =================================================
  //               ASSIGNMENT OPERATORS
  // =================================================
  {
    name: "Assignment Operators",
    questions: [
      {
        id: "q1",
        text: "Which one is an assignment operator?",
        answers: ["=", "-", "*", "@"],
      },
      {
        id: "q2",
        text: "What does the following code do?",
        code: `let score = 100;\nscore += 10;\nconsole.log(score);`,
        answers: [
          "Increases the score by 10 and prints 110",
          "Decreases the score by 10 and prints 90",
          "Prints the original score of 100",
          "Prints an error message",
        ],
      },
      {
        id: "q3",
        text: "Which assignment operator would you use to decrease the value of a variable by 5?",
        answers: ["-=", "+=", "/=", "*="],
      },
      {
        id: "q4",
        text: "What is the output of the following code?",
        code: `let x = 8;\nx++;\nx /= 3;\nconsole.log(x);`,
        answers: ["3", "2", "6", "12"],
      },
      {
        id: "q5",
        text: "Fill in the blank to increase the value of variable 'damage' by using the addition assignment operator.",
        code: `let damage = 5;\ndamage __ 3;`,
        answers: ["+=", "-=", "++", "="],
      },
      {
        id: "q6",
        text: "What does the following code do?",
        code: `let price = 50;\nlet rate = 1.2;\nprice *= rate;\nconsole.log(price);`,
        answers: [
          "Multiplies price by rate and prints the result",
          "Divides price by rate and prints the result",
          "Adds rate to price and prints the result",
          "Subtracts rate from price and prints the result",
        ],
      },
      {
        id: "q7",
        text: "What is the shorthand for the following code?",
        code: `x = x * y;`,
        answers: ["x *= y;", "x =* y;", "x * y;", "x *=* y;"],
      },
      {
        id: "q8",
        text: "What assignment operator would you use to divide a variable by 2?",
        answers: ["/=", "+=", "-=", "*="],
      },
      {
        id: "q9",
        text: "Which code would you use to increment the value of a variable 'health' by 1?",
        code: `let health = 10;\nhealth __ 1;`,
        answers: ["++", "+=", "*=", "/="],
      },
      {
        id: "q10",
        text: "What is the output of the following code?",
        code: `let x = 15;\nx -= 5;\nconsole.log(x);`,
        answers: ["10", "5", "20", "15"],
      },
    ],
  },
  // =================================================
  //                     STRINGS
  // =================================================
  {
    name: "Strings",
    questions: [
      {
        id: "q1",
        text: "Which of the following represents a string?",
        answers: [
          `"Health Potion"`,
          `"Mana Potion'`,
          `'Cryptbread"`,
          `*Marrowstone Cheese*`,
        ],
      },
      {
        id: "q2",
        text: "Fill in the blank to output text with quotations surrounding it.",
        code: `"That's easy!_`,
        answers: [`"`, `'`, `*`],
      },
      {
        id: "q3",
        text: "Which of the following is the escape character in JavaScript?",
        answers: [`\\`, `/`, `{`, `%`],
      },
      {
        id: "q4",
        text: "How do you include a single quote in a string enclosed by single quotes?",
        code: `console.log('Dont_t give up!')`,
        answers: [`\\'`, `/'`, `|'`],
      },
      {
        id: "q5",
        text: "Which escape sequence is used to insert a new line in a string?",
        answers: [`\\n`, `\\t`, `\\b`, `\\r`],
      },
      {
        id: "q6",
        text: "How would you print the following text using a string?\nOne\nTwo\nThree",
        code: `console.log("One _ Two _ Three");`,
        answers: [`\\n`, `\\t`, `\\b`, `\\r`],
      },
      {
        id: "q7",
        text: "What will the following code output?",
        code: `console.log("I'm Casting Blizzard");`,
        answers: [
          `I'm Casting Blizzard`,
          `I\\'m Casting Blizzard`,
          `Error: Unexpected token 'm'`,
          `"I'm Casting Blizzard"`,
        ],
      },
      {
        id: "q8",
        text: "Which of the following is valid JavaScript syntax for a string?",
        answers: [
          `"The sword of a thousand truths"`,
          `'The sword of a thousand truths'`,
          `"The sword of a thousand truths'`,
          `*The sword of a thousand truths*`,
        ],
      },
      {
        id: "q9",
        text: "What is the purpose of the escape character in JavaScript?",
        answers: [
          `To represent special characters in a string.`,
          `To add a comment in the code.`,
          `To declare a variable.`,
          `To perform division operations.`,
        ],
      },
      {
        id: "q10",
        text: "Interpretation: What is the output?",
        code: `console.log("Spell\\nCast");`,
        answers: [
          `Spell\nCast`,
          `Spell Cast`,
          `Spell\\nCast`,
          `Error: Unexpected token '\\n'`,
        ],
      },
    ],
  },
  // =================================================
  //               TEMPLATE LITERALS
  // =================================================
  {
    name: "Template Literals",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a template literal?",
        answers: ["`Evocation`", `"Abjuration"`, "'Conjuration'"],
      },
      {
        id: "q2",
        text: "What character is used to define a template literal in JavaScript?",
        answers: ["`", "'", '"', "#"],
      },
      {
        id: "q3",
        text: "How do you include variables inside a template literal?",
        answers: [
          "Use ${variableName}",
          "Use (variableName)",
          "Use [variableName]",
          "Use &{variableName}",
        ],
        code: `let hero = "Siggurd";\nlet text = \`Welcome, \${hero}\`;\nconsole.log(text);`,
      },
      {
        id: "q4",
        text: "How do you write a template literal with both single and double quotes inside it?",
        answers: [
          '``I\'m happy, she said "Yes"!``',
          "'I'm happy, she said \"Yes\"!'",
          "\"I'm happy, she said 'Yes'!\"",
          '"I\'m happy, she said \\"Yes\\"!"',
        ],
        code: `console.log(\`I'm happy, she said "Yes"!\`);`,
      },
      {
        id: "q5",
        text: "Which of the following allows multiline strings without using \\n?",
        answers: [
          "Template literals",
          "Single quotes",
          "Double quotes",
          "Comment blocks",
        ],
        code: `let msg = \`Hey! Are you going to a dungeon?\nIsn't it spooky?\`;\n\nconsole.log(msg);`,
      },
      {
        id: "q6",
        text: "What will the following code output?\n\nlet name = 'Aldric';\nconsole.log(`Greetings, ${name}`);",
        answers: [
          "Greetings, Aldric",
          "Greetings, ${name}",
          "Greetings, name",
          "Greetings, Aldric}",
        ],
      },
      {
        id: "q7",
        text: "How do template literals differ from regular strings in terms of escaping quotes?",
        answers: [
          "You don't need to escape quotes inside template literals.",
          "You must escape all quotes inside template literals.",
          "You can only use single quotes inside template literals.",
          "You can only use double quotes inside template literals.",
        ],
      },
      {
        id: "q8",
        text: "What will the following code output?\n\nlet hero = 'Siggurd';\nlet text = `Welcome, ${hero}`;\nconsole.log(text);",
        answers: [
          "Welcome, Siggurd",
          "Welcome, ${hero}",
          "Welcome, hero",
          "Welcome, Siggurd}",
        ],
      },
      {
        id: "q9",
        text: "True or False: Template literals can be used to create strings that span multiple lines without special syntax.",
        answers: ["True", "False"],
      },
      {
        id: "q10",
        text: "Which of the following statements about template literals is correct?",
        answers: [
          "Template literals use back-ticks to define a string.",
          "Template literals use single quotes to define a string.",
          "Template literals use double quotes to define a string.",
          "Template literals use square brackets to define a string.",
        ],
      },
    ],
  },
  // =================================================
  //              STRING CONCATENATION
  // =================================================
  {
    name: "String Concatenation",
    questions: [
      {
        id: "q1",
        text: "What is the output of the following code?",
        code: `console.log("Fire" + "ball");`,
        answers: ["Fireball", "Fire+ball", "error"],
      },
      {
        id: "q2",
        text: "What is the output of the following code?",
        code: `console.log("2" + "5");`,
        answers: ["25", "2+5", "7", "error"],
      },
      {
        id: "q3",
        text: "What is the result of concatenating the strings 'Hello' and 'World'?",
        answers: [
          "'HelloWorld'",
          "'Hello' + 'World'",
          "'Hello World'",
          "error",
        ],
      },
      {
        id: "q4",
        text: "Given the code below, what is the output?",
        code: `let part1 = "Concatenation";\nlet part2 = "Example";\nconsole.log(part1 + " " + part2);`,
        answers: [
          "Concatenation Example",
          "ConcatenationExample",
          "Concatenation + Example",
          "error",
        ],
      },
      {
        id: "q5",
        text: "What will be the result of this code?",
        code: `let num1 = "10";\nlet num2 = "20";\nconsole.log(num1 + num2);`,
        answers: ["1020", "30", "error", "10 20"],
      },
      {
        id: "q6",
        text: "How can you concatenate the strings 'Game' and 'On' with a space in between?",
        answers: ["'Game' + ' ' + 'On'", "'Game' + 'On'", "'Game On'", "error"],
      },
      {
        id: "q7",
        text: "What will the following code output?",
        code: `let a = "JavaScript";\nlet b = "Rules!";\nconsole.log(a + " " + b);`,
        answers: [
          "JavaScript Rules!",
          "JavaScriptRules!",
          "JavaScript + Rules!",
          "error",
        ],
      },
      {
        id: "q8",
        text: "Which of the following correctly concatenates the strings 'Hello' and 'World'?",
        answers: [
          "'Hello' + 'World'",
          "'Hello' & 'World'",
          "'Hello'.concat('World')",
          "Both A and C",
        ],
      },
      {
        id: "q9",
        text: "Given the following code, what is the output?",
        code: `let firstName = "John";\nlet lastName = "Doe";\nconsole.log(firstName + " " + lastName);`,
        answers: ["John Doe", "JohnDoe", "John + Doe", "error"],
      },
      {
        id: "q10",
        text: "What is the result of concatenating '1' and '2' in JavaScript?",
        answers: ["'12'", "3", "'1' + '2'", "error"],
      },
    ],
  },
];
