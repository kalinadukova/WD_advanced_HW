// Represent the data, about 5 rectangles with next properties:

//       id: r1, width: 40, height: 20
//       id: r2, width: 30, height: 30
//       id: r3, width: 10, height: 80
//       id: r4, width: 90, height: 2
//       id: r5, width: 20, height: 20

// Write a function which will return the id of the rectangle with biggest area.

// Expected output: r2

class Rectangle{
    constructor(id, width, height){
        this.id = id;
        this.width = width;
        this.height = height;
    }
}

const rectangle1 = new Rectangle("r1", 40, 20); 
const rectangle2 = new Rectangle("r2", 30, 30); 
const rectangle3 = new Rectangle("r3", 10, 80); 
const rectangle4 = new Rectangle("r4", 90, 2); 
const rectangle5 = new Rectangle("r5", 20, 20); 

let array = [
    rectangle1,
    rectangle2,
    rectangle3,
    rectangle4,
    rectangle5
]

function maxArea(array){
    let area;
    let maxArea=0;
    let id;
    for (let i = 0; i < array.length; i++) {
        const rec = array[i];
        area = rec.width*rec.height;
        if(maxArea < area){
            maxArea = area;
            id = rec.id;
        }
    }
    return id;
}

console.log(maxArea(array));

