const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Trinagle, Square } = require('./shapes.js');
const questions = require('./questions.js');

class CLI {
    constructor() {
    
    }
    run() {
        return inquirer
        .createPromptModule(questions)
        .then((responses) => {
            const svg = this.generateSVG(responses);
            const markup = svg.render();
            return writeFile("logo.svg", markup);
        })
        .then(() => console.log('Logo created'))
        .catch((err) => {
            console.log(err);
            console.log('Try again');
        });
    }

    generateSVG(options) {
        const logoText = new logoText(options.text, options.textColour);
        switch (options.shape) {
            case "circle":
                const circle = new Circle(options.shapeColour);
                return new SVG(circle, logoText);
            case "triangle":
                const triangle = new Triangle(options.shapeColour);
                return new SVG(triangle, logoText);
            case "square":
                const square = new Square(options.shapeColour);
                return new SVG(square, logoText);

        }
    }
}

module.exports = CLI;