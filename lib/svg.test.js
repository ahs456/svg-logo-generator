const {SVG, LogoText} = require("./Svg");
const {Square} = require("./shapes");

resizeTo("svg element should render"), () => {
    const colour = "red";
    const expectSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">AHS</text></svg>`;
    const square = new Square(colout);
    const logoText = new logoText("AHS", colour);
    const svg = new SVG(square, logoText);
    expect(svg.render()).toEqual(expectSvg);
};