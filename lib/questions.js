const questions = [
        {
          type: "input",
          message:"What text would you like you logo to display? (3 character maximum)",
          name: "text",
        },
        {
          type: "input",
          message:"Choose text colour",
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
          name: "shapeColour",
        }
  ]
  
  module.exports = questions