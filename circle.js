// create an class named as Circle

class circle {             
    constructor(Radius = "1.0" , Color = "Red") {
        this._Radius = Radius;
        this._Color = Color;
    }

    //getter for radius

    get Radius() {
        return this._Radius;
    }

    //setter for radius

    set Radius(NewRadius) {
        this._Radius = NewRadius;
    }

    // getter for color

    get Color() {
        return this._Color;
    }

    // setter for color

    set Color(NewColor) {
        this._Color = NewColor; 
    }

    // convert the circle object  to a sting representation

    tostring() {
       return `Circle Radius : ${this._Radius} , color : ${this._Color}`;
    }

    // method for finding the area of a circle

    getArea() {
        return  Math.PI * (this._Radius * this._Radius);
    }

    // method for finding the circumference of a circle

    getCircumference() {
        return 2 * Math.PI * this._Radius;
    }

    } 

    //creating a new objects of the  class circle

    const circle1 = new circle("2.2","Black")
    const circle2 = new circle("4,6","White")
    const circle3 = new circle("3,0","Green")
    console.log(circle1,circle2,circle3);

    // calling the methods one by one and displaying the results
    console.log('\n',circle1.Radius)
    circle1.Radius = "4.1";
    console.log('\n',circle1.Radius)
    console.log('\n',circle2.Color);
    circle2.Color="Blue";
    console.log('\n',circle2.Color); 
    console.log('\n',circle1.tostring());
    console.log('\n',circle1.getArea().toFixed(2));
    console.log('\n',circle1.getCircumference().toFixed(2));
   
