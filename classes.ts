// abstract class Shape {
//   abstract getArea(): number;
//   printArear(): void {
//     console.log(`The area is ${this.getArea()}`);
//   }
// }

// class Rectrangle extends Shape {
//   constructor(private width: number, private heigth: number) {
//     super();
//   }
//   getArea(): number {
//     return this.width * this.heigth;
//   }
// }

// const rect = new Rectrangle(2, 4);
// rect.printArear()


// // setters and getters

class Circle{
    private _radius:number
    constructor(_radius:number){
        this._radius = _radius
    }

    get radius():number{
        return this._radius
    }

    set radius(value:number){
        if(value <= 0)
            throw new Error("Radius Must be positive")
        this._radius = value
    }
}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 12
console.log(circle.radius);

// circle.radius = -5
// console.log(circle.radius);


