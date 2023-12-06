// Object in javascript 
console.log("Object in JS")

let rectangle = {
    length: 1,
    breadth: 2,

    dwar: function () {                // call method
        console.log("Dwar the painting")
    }
}
console.log(rectangle);
console.log(rectangle.length);
console.log(rectangle.dwar())


// // Object creation - function - create multiple object
//   1. Factory function
function createRectangle() {
    let rectangle = {
        length: 2,
        breadth: 4,
        draw() {
            console.log("drawing Rectange");
        }
    }
    return rectangle;
}

// With given input parameters 
function createRect(len, bre) {
    return rectangle = {
        length: len,
        breadth: bre,

        draw() {
            console.log("draw rectangle one");
        }
    }
}
let rectangleObj1 = createRect(4, 6)
let rectangleObj2 = createRect(1, 2)
let rectangleObj3 = createRect(3, 6)

// console.log(rectangleObj1)


//   2. constructor function 
function Rectange(len, bre) {
    this.length = len,
        this.breadth = bre,

        this.draw = function () {
            console.log("drawing")
        }

}

let rectangleObject = new Rectange(2, 2);
// console.log(rectangleObject)


// Dynamic Nature of OBject 
function createRect(len, bre) {
    return rectangle = {
        length: len,
        breadth: bre,

        draw() {
            console.log("draw rectangle one");
        }
    }
}

let dynamicObj = createRect(3, 3);
console.log(dynamicObj);

//    Creation 
dynamicObj.color = "blue";
console.log(dynamicObj)

//    Deletion 
delete dynamicObj.color;
console.log(dynamicObj)

// Primitive types VS Reference types 
// 1. Primitive type 
// let a = 10;
// let b = a;
// a++;
// console.log(a);     // 11
// console.log(b)     // 10

let a = 10;
function inc(a) {
    a++;
}
inc(a);
console.log(a);




// 2. Reference type 
let d = {
    value: 12
};
// let e = d;
// d.value++;

// console.log(d.value);
// console.log(e.value);

function increase(d) {
    d.value++;
}
increase(d);
console.log(d.value)