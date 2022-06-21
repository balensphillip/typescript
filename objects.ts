// // -creating objects in javascript/tyescript:
// // -object literal
// // -using a factory function
// // -using a constructor function.
// // -using a class

// // create objects literally
// // let customer1:object = {name:"john doe", address:"New york"}
// // let customer2:object = {name:"jane doe", address:"Nansana"}
// // let customer3:object = {name:"aryan", address:"kampala"}

// // create objects using a factory function.
// // 1. Defining the template/blueprint
// function customer(nameArg:string, addressArg:any):object{
//     return {name:nameArg, address:addressArg} 
// }

// // 2. creating objects
// let customer1:object = customer("john doe","New york")
// let customer2:object = customer("maja","Nansana")
// let customer3:object = customer("Dabbie", "Kabaale")






// 1. Defining the template/blueprint
function JumiaCustomer(nameArg:string, addressArg:string){
    this.name = nameArg;
    this.address = addressArg;
}

// 2. creating objects
let customer1 = new JumiaCustomer("john doe","New york")
let customer2 = new JumiaCustomer("maja","Nansana")
let customer3 = new JumiaCustomer("Debbie", "Kabaale")

customer1.name = "arafat"
console.log(customer1.name);