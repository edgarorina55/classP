// modelling a bank account 

class Car {
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0; //default value 
    }
    drive(miles) {
        this.mileage += miles;
    }
}

const myCar = new Car("Audi", "Q5", 2023);
myCar.drive(100);
console.log(myCar.mileage);