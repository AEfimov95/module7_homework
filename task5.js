'use strict'

class Device {
    constructor(brand,model,kWh) {
        this.brand = brand;
        this.model = model;
        this.kWh = kWh;
        this.power = 'off';
    }
    powerOutlet(){
        if (this.power == 'on') {
            console.log(`${this.brand} `+`${this.model} ` + 'was disabled.');
            this.power = 'off';
        } else if (this.power == 'off') {
            console.log(`${this.brand} `+`${this.model} ` + 'was enabled. The electricity consumption is '+`${this.kWh} kW per hour.`);
            this.power = 'on';
        } else {
            console.log('Error')
        }
    }

}
class Fridge extends Device {
    constructor(capacity,type,brand,model,kWh) {
        super(brand,model,kWh);
        this.capacity = capacity;
        this.type = type;
    }
}
class Heater extends Device{
    constructor(method,weight,brand,model,kWh) {
        super(brand,model,kWh);
        this.method = method;
        this.weight = weight;
    }
}
const samsung = new Fridge(365, 'dual chamber','Samsung', 'RB36T677FSA',0.035);
samsung.powerOutlet();

const deLonghi = new Heater('Convection',5,'DeLonghi', 'DCH5915ER',0.5);
deLonghi.powerOutlet();
