// ALERT!
// tomes.js & tome-slice must contain the same number of indices

export const TOMES = [
  // =================================================
  //                     INTRODUCTION
  // =================================================

  {
    name: "Introduction",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Welcome to JavaScript!",
        text: [
          `In this course, we'll learn the basic concepts of JavaScript - one of the most popular programming languages that makes websites dynamic and interactive. With JavaScript, you can also create mobile apps and games, process data, and much more!`,
        ],
        code: `// Your journey starts here.`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: "What is JavaScript?",
        answers: [
          "One of the most popular programming languages in the world.",
          "A web browser",
        ],
      },
      {
        page: 3,
        type: "INFO",
        title: "Output",
        text: [
          `The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings. Let's kick things off by creating a program that displays "Hello World!" to the console using the console.log() function.`,
          "Try it out below!",
        ],
        code: `console.log("Hello World!")\n\n\n\n\n\n\n\n/*Click the double arrows\nto enlarge the Code Editor!*/`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: "Which function is used to generate output to the console?",
        answers: ["console.log()", "output.console()", "print()", "write()"],
      },
      {
        page: 5,
        type: "INFO",
        title: "Text",
        text: [
          "To use text in JavaScript, we need to enclose it in quotes.",
          `Tap the "Run Code" button in the Code Editor to see output! Try and change the text yourself!`,
        ],
        code: `console.log("Change me!")`,
      },
      {
        page: 6,
        type: "QUESTION",
        question: `How do you output "Game Over" to the console?`,
        answers: [
          `console.log("Game Over");`,
          `console.log{"Game Over"};`,
          `console.log(Game Over);`,
          `console."Game Over";`,
        ],
      },
      {
        page: 7,
        type: "INFO",
        title: "Output",
        text: [
          "You can use the console.log() function as many times as you want. Each statement outputs text from a new line.",
          `A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.`,
        ],
        code: `console.log("I'm a statement!")\nconsole.log("So am I!")`,
      },
      {
        page: 8,
        type: "INFO",
        title: "Numbers",
        text: [
          `When working with numbers, quotes are not needed.`,
          "How old are you? Try to change the code below to output your age!",
        ],
        code: `console.log(19)`,
      },
      {
        page: 9,
        type: "QUESTION",
        question: `How do you output the number 19 to the console?`,
        answers: [
          `console.log(19);`,
          `console.log{"19"};`,
          `console.log("19");`,
          `console.19;`,
        ],
      },
      {
        page: 10,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `the console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings`,
          `console.log() is used to display a text to the console`,
        ],
      },
    ],
  },
  // =================================================
  //                     COMMENTS
  // =================================================
  {
    name: "Comments",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Single-line Comments",
        text: [
          `Comments are explanatory statements that you can include in a program to benefit the person reading your code.`,
          `A single-line comment starts with //`,
          `The compiler ignores everything that appears in the comment, so none of that information affects the result.`,
        ],
        code: `// I'm a comment! So i'll be ignored!\nconsole.log("I'm not a comment!")`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following is a valid JavaScript comment?`,
        answers: [
          `// Am I a comment?`,
          `# This is correct`,
          `<>This is a comment<>`,
          `/ What about this? /`,
        ],
      },
      {
        page: 3,
        type: "INFO",
        title: "Multi-line Comments",
        text: [
          `You can also create multi-line comments.`,
          `They start with /* and end with */, making everything in between a comment.`,
        ],
        code: `/* Using this syntax\nyou can write longer\ncomments across as many\nlines as you need!*/`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `What syntax do you use to make a multi-line comment?`,
        answers: [
          `/* Think carefully.... */`,
          `// Does this work? //`,
          `# Maybe me? #`,
          `/ Pick me! /`,
        ],
      },
      {
        page: 5,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `comments are used to explain the code to other developers.`,
          `single-line comments start with //`,
          `multi-line comments start with /* and end with */`,
        ],
      },
    ],
  },
  // =================================================
  //                SIMPLE OPERATIONS
  // =================================================
  {
    name: "Simple Operations",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Calculations",
        text: [
          `Let's talk about calculations! They are everywhere, including in programming. So, they will be in your future programs too!`,
          `Performing a calculation in JavaScript is simple, just enter it into the console.log() function`,
        ],
        code: `console.log(1+2);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What does console.log(3+4) output?`,
        answers: [`7`, `34`, `3+4`, `1`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Multiple Calculations",
        text: [`You can perform multiple calculations within one statement`],
        code: `console.log(6+5-1);`,
      },
      {
        page: 4,
        type: "INFO",
        title: "Multiplication",
        text: [`Multiplication is done using an asterisk symbol (*).`],
        code: `console.log(5*3);`,
      },
      {
        page: 5,
        type: "QUESTION",
        question: `Which code will output the result of multiplying 3 by 4?`,
        answers: [
          `console.log(3*4)`,
          `console.log(3x4)`,
          `console.log("3*4")`,
          `console.log(34)`,
        ],
      },
      {
        page: 6,
        type: "INFO",
        title: "Division",
        text: [`Division is done using a slash.`],
        code: `console.log(16/4);`,
      },
      {
        page: 7,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `Just like in regular math, multiplication and division is calculated before addition and subtraction.`,
        ],
        code: `console.log(4+2*5);`,
      },
      {
        page: 8,
        type: "QUESTION",
        question: `What is the output of console.log(1+2*3)?`,
        answers: [`7`, `6`, `3`, `9`],
      },
      {
        page: 9,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `To control precedence, use parentheses to indicate the order in which you want to perform operations.`,
        ],
        code: `console.log((8+2)*3);`,
      },
      {
        page: 10,
        type: "QUESTION",
        question: `Which of the following would output 7?`,
        answers: [
          `console.log((1+1)+(10/2));`,
          `console.log(2*(9/3));`,
          `console.log((3+4)*2);`,
          `console.log(6/3-1);`,
        ],
      },
      {
        page: 11,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `Calculations can be done directly in the console.log() function`,
          `Multiplication and division have higher precedence than addition and subtraction have`,
          `You can control the precedence using parentheses`,
        ],
      },
    ],
  },
  // =================================================
  //                  VARIABLES
  // =================================================
  {
    name: "Variables",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Creating Variables",
        text: [
          `In apps, we usually need to store some values and work with them throughout the program to make accessing them much more convenient. We do this by using variables, which are containers for storing values.`,
          `One way a variable can be created is by using the let keyword.`,
        ],
        code: `let spell;\n//"let" is the keyword used to create a variable\n//"spell" is the name of this variable`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What are variables?`,
        answers: [`containers for storing values`, `values`, `functions`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Initialization",
        text: [
          `After creating the variable we can give it a value. This is called initialization.`,
          `You can assign a value to a variable by using an equal sign (=).`,
        ],
        code: `let spell;\nspell = "Firebolt"\n//Now the spell variable has the value "Firebolt";`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `Which of the following correctly create a variable and assign it a value?`,
        answers: [
          `let action = "Attack";`,
          `let = "Guard";`,
          `variable = "Cast Spell";`,
          `let action = Use Item;`,
        ],
      },
      {
        page: 5,
        type: "INFO",
        title: "Initialize & Assign",
        text: [`You can also assign your variable a value during creation.`],
        code: `let game = "Spell Scripter";\n//Remember, we must enclose text values in quotes.`,
      },
      {
        page: 6,
        type: "INFO",
        title: "Output",
        text: [
          `After initializing a variable, we can output its value using console.log().`,
          `Use the Code Editor to modify the code, assign your name to the variable and output it.`,
        ],
        code: `let hero = "Siggurd";\nconsole.log(hero);`,
      },
      {
        page: 7,
        type: "QUESTION",
        question: `Which of the following output a variable?`,
        answers: [
          `console.log(damage);`,
          `console.log("damage");`,
          `console.log(let damage = 12);`,
          `console.log(9);`,
        ],
      },
      {
        page: 8,
        type: "INFO",
        title: "Changing Values",
        text: [
          `Variables can change their value during the program. That's why they are called variables.`,
          `What do you think the output of the code below will be?`,
        ],
        code: `let level = 7;\nlevel = 8\n\nconsole.log(level);`,
      },
      {
        page: 9,
        type: "QUESTION",
        question: `What is the output of this code?`,
        js: [
          `let health = 20;`,
          `health = 8;`,
          `health = 12`,
          `console.log(health)`,
        ],
        answers: [`12`, `20`, `8`, `40`],
      },
      {
        page: 10,
        type: "INFO",
        title: "Constants",
        text: [
          `There can be cases when you need to tell the program that the variable can't change its value throughout the program. Constants are variables declared using the const keyword.`,
          `Constants must have a value when declared and they cannot change their value.`,
        ],
        code: `const spell = "Firebolt";\nconsole.log(spell);\nspell = "Frostbite"; // this will result in an error`,
      },
      {
        page: 11,
        type: "INFO",
        title: "Rules of Naming Variables",
        text: [
          `variable names must begin with a letter, an underscore _ or a dollar sign $. They cannot contain spaces and can only contain letters, numbers, underscores, or dollar signs.`,
          `Variable names are case-sensitive, which means that, for example, "Name" and "name" variables would be different`,
        ],
        code: `let enemy* = "Skeleton" // this will result in an error`,
      },
      {
        page: 12,
        type: "QUESTION",
        question: `Which of the following variables are named correctly?`,
        answers: [
          `let _Evocation = "School";`,
          `let 1enemy = "Skeleton";`,
          `let new item = "Potion";`,
          `let +spell = "Bark Skin"`,
        ],
      },
      {
        page: 13,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `variables are containers for storing values`,
          `variables can be created with the let keyword and can change their values`,
          `constants are created with the const keyword. They are similar to variables, but can't change their values after initialization`,
        ],
      },
    ],
  },
  // =================================================
  //                     DATA TYPES
  // =================================================
  {
    name: "Data Types",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Strings",
        text: [
          `The term 'data type' refers to the types of values a program can work with. We've already gotten familiar with two types of data: text and number.`,
          `Text in quotes, like "Hello World" is called a string.`,
        ],
        code: `let msg = "I am a string";\nlet msg2 = 'I am a string as well';\nconsole.log(msg);\nconsole.log(msg2);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following is a string?`,
        answers: [`"Twenty Nine"`, `"Warrior`, `Dungeon`, `14`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Strings",
        text: [
          `Everything in quotes is a string, even numbers.`,
          `In the code below, 15 is a string, not a number, which means that the program will treat it as a text consisting of two symbols: "1" and "5".`,
        ],
        code: `console.log("15");`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `What is the data type of the given value?`,
        js: [`let number = "3"`],
        answers: [`String`, `Number`],
      },
      {
        page: 5,
        type: "INFO",
        title: "Numbers",
        text: [`Numbers can be written with or without decimals.`],
        code: `let x = 5; //whole number\nlet y = 8.4; //decimal\nconsole.log(x);\nconsole.log(y);`,
      },
      {
        page: 6,
        type: "INFO",
        title: "Numbers",
        text: [
          `You can add, subtract and multiply numbers, producing another number as a result.`,
        ],
        code: `let x = 54;\nlet y = 6;\nconsole.log(x*y);\nconsole.log(x/y);`,
      },
      {
        page: 7,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: [`let x = 4`, `let y = 8`, `console.log(x + y)`],
        answers: [`12`, `4`, `8`, `10`],
      },
      {
        page: 8,
        type: "INFO",
        title: "Booleans",
        text: [
          `Very often, in programming, you will need a data type that can only have one of two values. For example, a yes or no.`,
          `For this, JavaScript has the Boolean data type which can only take the values true or false.`,
        ],
        code: `let isEnemy = true;\nlet isHero = false;\nconsole.log(isEnemy);\nconsole.log(isHero);`,
      },
      {
        page: 9,
        type: "QUESTION",
        question: `Which of the following values is a Boolean?`,
        answers: [`false`, `4`, `spellbook`, `"true"`],
      },
      {
        page: 10,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `the term data type refers to the types of values a program can work with`,
          `everything in quotes is a string, even numbers`,
          `both whole numbers and decimals in JavaScript belong to the one number data type`,
          `boolean data type is used to only have one of two values: true or false`,
        ],
      },
    ],
  },
  // =================================================
  //                ARITHMETIC OPERATORS
  // =================================================
  {
    name: "Arithmetic Operators",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Arithmetic Operations",
        text: [
          `Let's review some simple mathematical operations from previous tomes.`,
        ],
        code: `let x = 8;\nlet y = 3;\nconsole.log(x+y); //addition\nconsole.log(x-y); //subtraction\nconsole.log(x*y); //multiplication\nconsole.log(x/y); //division`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: [`let x = 5`, `let y = 3`, `console.log(x + y)`],
        answers: [`8`, `12`, `4`, `10`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Exponentiation",
        text: [
          `Two asterisks ** are used to raise a number to the power of another, which is called exponentiation.`,
        ],
        code: `let x = 2;\nlet y = 5\nconsole.log(x**y);`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `How would you raise 5 to the 3rd power?`,
        answers: [`console.log(5**3)`, `console.log(5*3)`, `console.log(5(3))`],
      },
      {
        page: 5,
        type: "INFO",
        title: "Exponentiation",
        text: [
          `You can also use decimals in exponentiation.`,
          `The following code will result in the square root (√) of 9:`,
        ],
        code: `let x = 9;\nlet y = 0.5;\nconsole.log(x**y);`,
      },
      {
        page: 6,
        type: "INFO",
        title: "Remainder",
        text: [
          `Let's imagine you want to equally distribute 100 balls in boxes. Each box contains only 3 balls. How many balls will be left over?`,
          `In other words, we need to calculate the remainder of 100 divided by 3, which is done using the modulo operator %.`,
        ],
        code: `let balls = 100;\nlet boxes = 3;\nconsole.log(balls % boxes);`,
      },
      {
        page: 7,
        type: "INFO",
        title: "Increment",
        text: [
          `Sometimes we need to repeatedly add 1 to a variable. For example, when counting attempts in a game, or the number of clicks on a web page.`,
          `This can be done using the increment operator ++.`,
        ],
        code: `let count = 0;\ncount++;\nconsole.log(count);`,
      },
      {
        page: 8,
        type: "QUESTION",
        question: `What does incrementing a value using the ++ operator do?`,
        answers: [
          `It adds 1 to the value.`,
          `It does not change the value.`,
          `It subtracts 1 from the value.`,
          `It assigns 1 to the value.`,
        ],
      },
      {
        page: 9,
        type: "INFO",
        title: "Decrement",
        text: [
          `Similarly, the decrement operator -- can be used to subtract 1 from a variable.`,
          `Remember that these operations can only be applied to variables, and applying this operation to numerical values will return an error.`,
        ],
        code: `let score = 100;\nscore--;\nscore--;\nconsole.log(score);\n\n50-- // This will result in an error because it is not a variable.;`,
      },
      {
        page: 10,
        type: "QUESTION",
        question: `What is the output of this code?`,
        js: [
          `let attempts = 10;`,
          `attempts--;`,
          `attempts++;`,
          `console.log(attempts);`,
        ],
        answers: [`10`, `9`, `11`],
      },
      {
        page: 11,
        type: "INFO",
        title: "Postfix & Prefix",
        text: [
          `The ++ or -- can be applied both before and after the variable. However, they are not the same.`,
          `The postfix form returns the original value of the variable, and only then increments/decrements it.`,
        ],
        code: `let x = 5;\nconsole.log(x++);\nconsole.log(x);\n`,
      },
      {
        page: 12,
        type: "QUESTION",
        question: `What is the output of this code?`,
        js: [`let x = 10;`, `console.log(x--);`],
        answers: [`10`, `9`, `8`],
      },
      {
        page: 13,
        type: "INFO",
        title: "Postfix & Prefix",
        text: [
          `The prefix form increments/decrements the value, and only then returns it.`,
          `So, the incremented value will be outputted.`,
        ],
        code: `let x = 5;\nconsole.log(++x);`,
      },
      {
        page: 14,
        type: "QUESTION",
        question: `What is the output of this code?`,
        js: [`let x = 10;`, `console.log(--x);`],
        answers: [`9`, `10`, `8`],
      },
      {
        page: 15,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `two asterisks ** are used for exponentiation`,
          `modulo operator % is used to calculate the remainder of a division`,
          `you can use ++/-- operators to increment/decrement the value of a variable`,
          `increment and decrement operators can be used only with variables`,
        ],
      },
    ],
  },
  // =================================================
  //              ASSIGNMENT OPERATORS
  // =================================================
  {
    name: "Assignment Operators",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Assigning Values",
        text: [
          `Assignment operators assign values to variables.`,
          `You already know one of them: when initializing a variable we use the = assignment operator to assign a value to it.`,
        ],
        code: `let health = 5;`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which one is an assignment operator?`,
        answers: [`=`, `-`, `*`, `@`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Commas & Variables",
        text: [
          `You can create different variables on the same line, separating them with commas.`,
        ],
        code: `let x = 5, y = 6, z = 8;\nconsole.log(x);\nconsole.log(y);\nconsole.log(z);`,
      },
      {
        page: 4,
        type: "INFO",
        title: "Example",
        text: [
          `Let's imagine you are creating a coin collector game. The game starts with a score of 100, and when the player collects a coin the score increases by 10.`,
          `In this case, you will write the following code.`,
        ],
        code: `let score = 100;\nscore = score + 10;`,
      },
      {
        page: 5,
        type: "INFO",
        title: "Addition Assignment",
        text: [
          `But there is an easier way.`,
          `JavaScript lets you write the code score = score + 10 more concisely, using the += operator.`,
          `This operator is called addition assignment operator.`,
        ],
        code: `let score = 100;\nscore+=10;\nconsole.log(score);`,
      },
      {
        page: 6,
        type: "QUESTION",
        question: `Fill in the blank to increase the value of variable "damage" by using the addition assignment operator.`,
        js: [`let damage = 5;`, `damage __ 3;`],
        answers: [`+=`, `-=`, `++`, `=`],
      },
      {
        page: 7,
        type: "INFO",
        title: "Assignment Operators",
        text: [`This pattern can be followed for other arithmetic operators.`],
        code: `let x = 15;\n\nx+=5; // x = x+5;\nconsole.log(x);\nx-=5; // x = x-5;\nconsole.log(x);\n\nx*=5; // x = x*5;\nconsole.log(x);\n\nx/=5; // x = x/5;\nconsole.log(x);\n\nx%=5; // x = x%5;\nconsole.log(x);`,
      },
      {
        page: 8,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: [`let x = 8;`, `x++;`, `x /= 3;`, `console.log(x);`],
        answers: [`3`, `2`, `6`, `12`],
      },
      {
        page: 9,
        type: "INFO",
        title: "Assignment Operators & Variables",
        text: [`You can perform the same operations with two variables.`],
        code: `let price = 50;\nlet rate = 1.2;\nprice*=rate; // price = price*rate;\n\nconsole.log(price);`,
      },
      {
        page: 10,
        type: "QUESTION",
        question: `What is the shorthand for the following code?`,
        js: [`x = x*y;`],
        answers: [`x *= y;`, `x =* y;`, `x * y;`],
      },
      {
        page: 11,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `we use the assignment operator = to assign a value to a variable`,
          `you can shorthand codes like x=x+5 with x+=5, and similar logic for all the other mathematical operations`,
        ],
      },
    ],
  },
  // =================================================
  //                 STRINGS
  // =================================================
  {
    name: "Strings",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Strings Review",
        text: [
          `Strings were briefly covered in the previous tomes, but now it's time to dig deeper.`,
          `Remember, we can create a string by entering text between two single or double quotation marks.`,
        ],
        code: `let spell = "Chain Lightning";\nlet spell2 = 'Fireball';\n\nconsole.log(spell);\nconsole.log(spell2);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following represents a string?`,
        answers: [
          `"Health Potion"`,
          `"Mana Potion'`,
          `'Cryptbread"`,
          `*Marrowstone Cheese*`,
        ],
      },
      {
        page: 3,
        type: "INFO",
        title: "Quotes Inside Strings",
        text: [
          `You can use quotes inside the strings, just make sure that they are different from the enclosing ones.`,
        ],
        code: `console.log("I'm Casting Blizzard");\nconsole.log('"Take that!"');`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `Fill in the blank to output text with quotations surrounding it.`,
        js: [`"That's easy!_`],
        answers: [`"`, `'`, `*`],
      },
      {
        page: 5,
        type: "INFO",
        title: "Escape Character",
        text: [
          `In JavaScript, the backslash \ is a special character, called the escape character.`,
          `It is used to represent certain things in a string, such as new lines, tabs, and other useful things.`,
          `But, don't confuse it with the division operator /.`,
        ],
        code: `\\ //I'm a backslash!`,
      },
      {
        page: 6,
        type: "QUESTION",
        question: `Which of the following is the escape character?`,
        answers: [`\\`, `/`, `{`, `%`],
      },
      {
        page: 7,
        type: "INFO",
        title: "Escape Character",
        text: [
          `If you want to include a quote in a string, you need to escape it using a backslash. In this case, you don't need to use different enclosing quotes.`,
        ],
        code: `console.log('I\\'m happy');\nconsole.log("She said \\"Yes!\\"");\n`,
      },
      {
        page: 8,
        type: "QUESTION",
        question: `Fill in the blank to output a string containing a single quote.`,
        js: [`console.log('Dont_t give up!')`],
        answers: [`\\'`, `/'`, `|'`],
      },
      {
        page: 9,
        type: "INFO",
        title: "Newlines",
        text: [
          `The backslash is also used to create new lines in text.`,
          `To create a new line we use '\\n'.`,
        ],
        code: `console.log("One \\nTwo \\nThree");`,
      },
      {
        page: 10,
        type: "QUESTION",
        question: `Which of the following results in exactly 2 lines?`,
        js: [`console.log('Dont_t give up!')`],
        answers: [`Title \\nDescription'`, `1 2 3`, `One \\n Two \\n Three`],
      },
      {
        page: 11,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `you can include a quote in a string if it's different from the ones that enclose it`,
          `as an alternative, you can escape it using the backslash \\`,
        ],
      },
    ],
  },
  // =================================================
  //              TEMPLATE LITERALS
  // =================================================
  {
    name: "Template Literals",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Creating Strings",
        text: [
          `Template literals are another way to create strings and work with them more flexibly.`,
          `They use back-ticks \`\` rather than quotes \"\" to define a string `,
        ],
        code: `let string = \`Hello, hero!\`;\nconsole.log(string);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following is a template literal?`,
        answers: [`\`Evocation\``, `"Abjuration"`, `'Conjuration'`],
      },
      {
        page: 3,
        type: "INFO",
        title: "No Escaping",
        text: [
          `With template literals, you can use both single and double quotes inside a string.`,
          `You don't need to escape the quotes inside template literals.`,
        ],
        code: `console.log(\`I'm happy, she said "Yes"!\`);`,
      },
      {
        page: 4,
        type: "INFO",
        title: "Multiline Strings",
        text: [`Template literals allow multiline strings, without using \\n:`],
        code: `let msg = \`Hey! Are you going to a dungeon?\nIsn't it spooky?\`;\n\nconsole.log(msg);`,
      },
      {
        page: 5,
        type: "INFO",
        title: "Variables Inside Strings",
        text: [
          `Further, template literals allow you to use variables inside the strings. You just need to add a dollar sign $ and enclose the variable name in braces {}.`,
        ],
        code: `let hero = "Siggurd";\nlet text = \`Welcome, \$\{name}\`;\nconsole.log(text);`,
      },
      {
        page: 6,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `template literals are created using back-ticks \`\``,
          `quotes don't need to be escaped (\\) in template literals`,
          `template literals allow multiline strings, without using \\n`,
          `you can use variables inside the string by adding a dollar sign $ and enclosing the variable name in braces {}`,
        ],
      },
    ],
  },
  // =================================================
  //             STRING CONCANTENATION
  // =================================================
  {
    name: "String Concatenation",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Concatenation",
        text: [
          `Not only can we add numbers, but we can also add strings, using something called concatenation, to combine two or more strings together.`,
          `Below, you can see the addition operator + is used for concatenation.`,
        ],
        code: `console.log("Java" + 'Script');`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: ['console.log("Fire" + "ball")'],
        answers: [`Fireball`, `Fire+ball`, `error`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Concatenation",
        text: [
          `Strings containing numbers are still added as strings rather than numbers.`,
        ],
        code: `console.log("2" + "2");`,
      },
      {
        page: 3,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: ['console.log("2" + "5"'],
        answers: [`25`, `2+5`, `7`, `error`],
      },
      {
        page: 4,
        type: "INFO",
        title: "Concatenation",
        text: [`You can perform concatenation with variables as well.`],
        code: `let x = "Java";\nlet y = "Script";\nlet z = x +y; //"Java" + "Script"\nconsole.log(z);`,
      },
      {
        page: 5,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: [
          `let damage = "8"`,
          `let mana = "10"`,
          `console.log(damage + mana)`,
        ],
        answers: [`810`, `18`, `2`, `damagemana`],
      },
      {
        page: 6,
        type: "INFO",
        title: "Concatenation",
        text: [`If you are making a sentence, don't forget about the spaces.`],
        code: `console.log("Spell " + "Scripter");`,
      },
      {
        page: 4,
        type: "SUMMARY",
        title: `Let's review this tome:`,
        listItems: [
          `you can join two or more strings into another using the + operator, that's called concatenation`,
          `you can perform concatenation using variables with string data`,
          `don't forget about the spaces when making a sentence using concatenation`,
        ],
      },
    ],
  },
];
