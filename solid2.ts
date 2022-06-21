// Main Menu
// BC 10 : SOLID Design Principles
// Object-Oriented Design
// Code
// Jackson Ssenengo
// •
// Yesterday

// solid.ts
// Text
// Class comments

// Code
// Car

// Calculator
    //  add, sub, mult, normal division, modulus division, outpution   

// Computer
    // pluging into power source
    // Powring on / off
    // Loading Programs
    // inputs data through the keyboard
    // stores data to in-memory
    // processes data in the CPU
    // outputs data on a monitor
    // Handles errors and exceptions

/*
    Computer
        - inputs data through the keyboard
        - stores data to in-memory
        - retrieve data from in-memory
        - processes data in the CPU
        - displaying information on a monitor
        - Handles errors and exceptions

*/ 

// High Cohesion: How focused the class is?
// Loosely Cooped Designs?
// Dependency Inversion Principle:
    // High Level Modules should not depend on low level modules, but instead both should depend on Abstractions

interface InputDevice{
    inputData():any;
}

class KeyBoard implements InputDevice{
    // Methods
    inputData(){
        return "data"
    }
}

interface Memory {
    storeData(data:any): boolean;
    retrieveData(basis:any): any;
}

class InMemory implements Memory{
    memory:Array<any> = [];

    storeData(data:any){
        this.memory.push(data);
        return true;
    }

    retrieveData(){
        return this.memory
    }
}


class CPU {
    process(data:string){
        let information = "Processed: " + data
        return information
    }
}

interface DisplayDevice{
    display(data:any): boolean;
}

class Monitor implements DisplayDevice{
    // Methods
    display(data:any){
        console.log("Displaying "+ data + "on monitor.");
        return true;
    }
}


class ErrorHandler{
    handleError(error:any){
        console.log("Error: " + error);
    }
}

class Computer {
    // Data
    private inputDevice:InputDevice;
    private memory:Memory;
    private processor:CPU;
    private displayDevice:DisplayDevice;
    private errorHandler:ErrorHandler  = new ErrorHandler();


    // Methods
    constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, displayDevice:DisplayDevice){
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.displayDevice = displayDevice;
    }

    input(){
       return this.inputDevice.inputData();
    }

    store(data:any):boolean{
        // Delegate
        return this.memory.storeData(data);
    }

    retrieve(data:any){
        return this.memory.retrieveData(null)
    }

    process(data:any){
       this.processor.process(data)
    }

    display(data:any){
        return this.displayDevice.display(data)
    }

    handleError(error:any){
        this.errorHandler.handleError(error)

    }

    // setters and getters
    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice
    }
    getInputDevice(){
        this.inputDevice = inputDevice
    }

    setDisplayDevice(displayDevice:DisplayDevice){
        this.displayDevice = displayDevice
    }
    getDisplayDevice(){
        this.displayDevice = displayDevice
    }

}


// Test
let inputDevice = new KeyBoard()
let computer = new Computer(inputDevice, new InMemory(), new CPU(), new Monitor())

computer.setDisplayDevice(new Monitor());
console.log(computer.getDisplayDevice())
// computer.display("fffff");

class Mouse implements InputDevice{
     inputData() {
         return "input by mouse"
     }    
}
computer.setInputDevice(new Mouse())
console.log(computer.getInputDevice())


// open/closed principle(ocp):
// open for extension
// closed for modification

class ChargeableComputer extends Computer{
    private charger:any;
    constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, displayDevice:DisplayDevice){
        super(inputDevice,memory,processor,displayDevice)
        this.charger = charger;
    }
}