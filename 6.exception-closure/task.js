function parseCount(a) {
    if (Number.isNaN(Number.parseFloat(a))) {
        throw new Error("Невалидное значение");
    }

    return Number.parseFloat(a);
}

function validateCount(b) {
    try {
        return parseCount(b);
    } catch (error) {
        return error;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const errorMessage = "Ошибка! Треугольник не существует"
        return {
            get area() {
                return errorMessage;
            },

            get perimeter() {
                return errorMessage;
            }
        }
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.validateTriangle();
    }

    validateTriangle() {
        const sum1 = this.a + this.b;
        const sum2 = this.a + this.c;
        const sum3 = this.b + this.c;

        if (sum1 < this.c || sum2 < this.b || sum3 < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        const s = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return s;
    }
}