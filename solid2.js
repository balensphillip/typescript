Main;
Menu;
BC;
10;
SOLID;
Design;
Principles;
Object - Oriented;
Design;
Code;
Jackson;
Ssenengo;
Yesterday;
solid.ts;
Text;
Class;
comments;
Code;
var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    // Methods
    KeyBoard.prototype.inputData = function () {
        return "data";
    };
    return KeyBoard;
}());
var InMemory = /** @class */ (function () {
    function InMemory() {
        this.memory = [];
    }
    InMemory.prototype.storeData = function (data) {
        this.memory.push(data);
        return true;
    };
    InMemory.prototype.retrieveData = function () {
        return this.memory;
    };
    return InMemory;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function (data) {
        var information = "Processed: " + data;
        return information;
    };
    return CPU;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    // Methods
    Monitor.prototype.display = function (data) {
        console.log("Displaying " + data + "on monitor.");
        return true;
    };
    return Monitor;
}());
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (error) {
        console.log("Error: " + error);
    };
    return ErrorHandler;
}());
var Computer = /** @class */ (function () {
    // Methods
    function Computer(inputDevice, memory, processor, diplayDevice) {
        this.errorHandler = new ErrorHandler();
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.diplayDevice = diplayDevice;
    }
    Computer.prototype.input = function () {
        return this.inputDevice.inputData();
    };
    Computer.prototype.store = function (data) {
        // Delegate
        return this.memory.storeData(data);
    };
    Computer.prototype.retrieve = function (data) {
        return this.memory.retrieveData(null);
    };
    Computer.prototype.process = function (data) {
        this.processor.process(data);
    };
    Computer.prototype.display = function (data) {
        return this.diplayDevice.display(data);
    };
    Computer.prototype.handleError = function (error) {
        this.errorHandler.handleError(error);
    };
    return Computer;
}());
// Test
var inputDevice = new KeyBoard();
var computer = new Computer();
computer.diplayDevice = new Monitor();
computer.display("fffff");
solid.ts;
Displaying;
solid.ts
