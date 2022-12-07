// function f1() {
//     const a = this;
//     return a;
// }
// const f2 = () => {
//     const a = this;
//     return a; 
// }
// const f = f1;
// f();
// f2();
// f1.d = 20;
// console.log(f1.d);
// console.log(f1);
// const rectangle = {
//     width: 3,
//     height:5,
//     square: function() {
        
//         return this.width * this.height;
//     },
//     perimeter: function() {
//         return this.width * 2 + this.height * 2;
//     },
//     display: function() {
//         console.log(`square is ${this.square()}; perimeter is ${this.perimeter()}`)
//     }
// }
function createRectangle(width, height) {
    return {
            width,
            height:height,
            square: function() {
                
                return this.width * this.height;
            },
            perimeter: function() {
                return this.width * 2 + this.height * 2;
            },
            display: function() {
                console.log(`square is ${this.square()}; perimeter is ${this.perimeter()}`)
            }
        }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return this.width * 2 + this.height * 2;
    }
}
const rectangles1 = [new Rectangle(3, 5),
new Rectangle(10, 20)];
const rectangles2 = [createRectangle(3, 5), createRectangle(10, 20)]
console.log(rectangles2[0].square());
console.log(rectangles2[1].perimeter());
//rectangle.display();
const ar = [1, 2, 3];
Array.prototype.mymap = function(fun) {
    console.log("This is my map method, congratulations");
    const res = [];
    for(let i = 0; i < this.length; i++) 
    return this.map(fun)
}
console.log(ar.mymap(e => e * 2));
Object.prototype.toString = function() {
    return "kuku";
}
Array.prototype.toString = function() {
    return "kukureku";
}
console.log(`${rectangles1[0]}`)
console.log(`${ar}`)
