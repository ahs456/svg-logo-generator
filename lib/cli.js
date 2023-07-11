const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triagnle, Square } = require('./shapes.js');
const questions = require('./questions.js');
const { LogoText, SVG } = require('./Svg');

class CLI {
    constructor() {
    }
    run() {
        return inquirer
        .prompt(questions)
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
        const logo = new LogoText(options.text, options.textColour);
        switch (options.shape) {
            case "circle":
                const circle = new Circle(options.shapeColour);
                return new SVG(circle, logo);
            case "triangle":
                const triangle = new Triangle(options.shapeColour);
                return new SVG(triangle, logo);
            case "square":
                const square = new Square(options.shapeColour);
                return new SVG(square, logo);

        }
    }
}

module.exports = CLI;