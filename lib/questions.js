const questions = [
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
        }
  ]
  
  module.exports = questions