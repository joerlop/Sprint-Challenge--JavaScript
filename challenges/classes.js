// 1. Copy and paste your prototype in here and refactor into class syntax.

/* function CuboidMaker(cubeAttributes) {
    this.length = cubeAttributes.length;
    this.width = cubeAttributes.width;
    this.height = cubeAttributes.height;
} */

class CuboidMaker {
    constructor(cubeAttributes) {
        this.length = cubeAttributes.length;
        this.width = cubeAttributes.width;
        this.height = cubeAttributes.height;
    }
    
    volume() {
        return this.length * this.height * this.width;   
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}  

cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height:5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cAtts) {
        super(cAtts);
    }

    cubeVolume() {
        return this.length ** 3;
    }

    cubeSurfaceArea() {
        return 6 * (this.length ** 2);
    }
}

cube = new CubeMaker({
    length: 10,
    width: 10,
    height: 10
});

console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurfaceArea()); // 130
