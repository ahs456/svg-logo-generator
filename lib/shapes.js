class Shape {
    constructor(colour = '') {
        this.colour = colour;
    }
    setColor(colour) {
        this.colour = colour;
    }
}

class Square extends Shape {
    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />`;
        return svg;
    }
}

class Triangle extends Shape {
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
        return svg;
    }
}

class Circle extends Shape {
    render() {
        const svg = `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
        return svg;
    }
}

module.exports = {Square, Triangle, Circle};