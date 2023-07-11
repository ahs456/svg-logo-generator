const {Square, Triangle, Circle} = require("./lib/shapes");

describe("Circle", () => {
    test("should render an SVG circle", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green"/>';
        const circle = new Circle();
        circle.setColour = ("green");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    toString("fillColour param should be accepted", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue"/>';
        const circle = new Circle();
        circle.setColour = ("blue");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});


describe("Square", () => {
    test("should render an SVG square", () => {
        const expectedSvg = '<"rect x="90" y="40" width="120" height="120" fill="orange"/>';
        const square = new Square();
        square.setColour = ("orange");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    toString("fillColour param should be accepted", () => {
        const expectedSvg = '<"rect x="90" y="40" width="120" height="120" fill="white"/>';
        const square = new Square();
        square.setColour = ("white");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});


describe("Triangle", () => {
    test("should render an SVG triangle", () => {
        const expectedSvg = '<polygon points="150, 18, 244, 182, 56, 182" fill="black"/>';
        const triangle = new Triangle();
        triangle.setColour = ("black");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    toString("fillColour param should be accepted", () => {
        const expectedSvg = '<"polygon points="150, 18, 244, 182, 56, 182" fill="yellow"/>';
        const triangle = new Triangle();
        triangle.setColour = ("yellow");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});
