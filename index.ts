let triButton: HTMLElement;
let cirButton: HTMLElement;
let squButton: HTMLElement;
let recButton: HTMLElement;
let triHeight: string;
let cirRadius: string;
let squHeight: string;
let recHeight: string;
let recWidth: string;
let triHeightNum: number;
let cirRadiusNum: number;
let squHeightNum: number;
let recHeightNum: number;
let recWidthNum: number;

document.addEventListener("DOMContentLoaded", () => {
    triHeight = (<HTMLInputElement>document.getElementById("triangle-input")).value;
    triHeightNum = +triHeight;
    triButton = document.getElementById("#triangle-button");
    triButton.addEventListener("click",() => {

    })
    cirButton = document.getElementById("#circle-button");
    cirRadius = (<HTMLInputElement>document.getElementById("circle-input")).value;
    cirRadiusNum = +cirRadius;
    cirButton.addEventListener("click",() => {
        
    })
    squButton = document.getElementById("#square-button");
    squHeight = (<HTMLInputElement>document.getElementById("square-input")).value;
    squHeightNum = + squHeight;
    squButton.addEventListener("click",() => {

    })
    recButton = document.getElementById("#rectangle-button");
    recHeight = (<HTMLInputElement>document.getElementById("rectangle-input-1")).value;
    recHeightNum = +recHeight;
    recWidth = (<HTMLInputElement>document.getElementById("rectangle-input-2")).value;
    recWidthNum = +recWidth;
    recButton.addEventListener("click",() => {

    })        
});

class Shape {
    constructor(){

    }
    describe(){

    }
    draw(){

    }
}

class Circle {
    div
    constructor(radius){

    }

}



class Square {
    constructor(sideLength){
        
    }
}

class Triangle {
    constructor(height){
        
    }
}

class Rectangle {
    constructor(width, height){
        
    }
}