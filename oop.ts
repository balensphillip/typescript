class Customer{
    // Data/Attribute
       name:String
       address: any
    // Operators/ methods/ behaviors
    constructor(nameArg:String, addressArg:String){
        this.name = nameArg;
        this.address = addressArg
    }
    // concatenateName(fname:string, lname:string):string{return this.name}
}

class Payment{
    // attribute
    private amount: number;

}

class Cash extends Payment{
    // attribute
    private cashTendered: number;
}

class Check extends Payment{
    // attribute
    private name: string
    private bakID: string
    // behavior
    authorised(){return null}
}

class Credit extends Payment{
    // attribute
     private number: string
     private type: string
     private expDate: any
    // behavior
    authorized(){return null} 
}

