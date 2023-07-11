function promptUser() {
    inquirer
      .prompt([
        {
          type: "input",
          message:"What text would you like you logo to display? (3 character maximum)",
          name: "text",
        },
        {
          type: "input",
          message:"Choose text color",
          name: "textColor",
        },
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        {
          type: "input",
          message:"Choose shape color",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          writeToFile("logo.svg", answers);
        }
      });
  }
  
  promptUser();