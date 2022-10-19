'use strict'

function Device () {
    this.power = 'off';
    this.powerOutlet = function (brand,model,kWh){
        if (this.power == 'on') {
            console.log(`${brand} `+`${model} ` + 'was disabled');
            this.power = 'off';
        }else if (this.power == 'off') {
            console.log(`${brand} `+`${model} ` + 'was enabled. The electricity consumption is '+`${kWh} kW per hour`);
            this.power = 'on';
        } else {
            console.log('Error')
        }
    }
}

function Fridge (capacity, type){
    this.capacity = capacity;
    this.type = type;
}

function Heater (method,weight) {
    this.method = method;
    this.weight = weight;
}

Fridge.prototype = new Device()
Heater.prototype = new Device()

const samsung = new Fridge(365, 'dual chamber');
samsung.powerOutlet('Samsung', 'RB36T677FSA',0.035);

const deLonghi = new Heater('Convection',5);
deLonghi.powerOutlet( 'DeLonghi', 'DCH5915ER',0.5);
console.log(samsung, deLonghi);