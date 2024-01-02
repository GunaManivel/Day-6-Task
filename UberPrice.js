// create a class Uber

class Uber {
    constructor ( Model,Basefare , CostperKm , Distance ) {
        this.Model = Model;
        this.Basefare = Basefare ;
        this.CostperKm = CostperKm;
        this.Distance = Distance;
    }

    // create a method CalculatePrice() to calculate the price based on the user

    calculatePrice()
    {
        
        if ( this.Model === "UberGo")
        {
       this.Basefare = 40 ;
       this.CostperKm = 12
        }
        else{
            this.Basefare = 60;
            this.CostperKm = 16;
        }
        const  totalfare = this.Basefare + this.CostperKm * this.Distance;
        return totalfare;
    }
}

//creating user objects for the class Uber

 const user1 = new Uber("UberGo",30,12,10);
 const user2 = new Uber("UberXl",40,12,8);

 // calculate the price for the user by using the CalculatePrice() method

 console.log('\n',user1.calculatePrice());
 console.log('\n',user2.calculatePrice());