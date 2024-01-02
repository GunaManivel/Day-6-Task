// create a class named person

class Person {
    constructor (FirstName , LastName , Age , Gender , Qualification , Place , DateOfBirth , PhoneNo , EmailId ) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this._Age = Age;
        this.Gender = Gender;
        this. Qualification = Qualification;
        this.Place = Place;
        this.DateOfBirth = DateOfBirth;
        this.PhoneNo = PhoneNo;
        this.EmailId = EmailId;
    }
    getGender() {
        return `${this.FirstName} ${this.LastName} is a ${this.Gender}`;
    }
    get Age()
    {
        return this._Age;
    }
    set Age(newage) {
        this._Age = newage;
    }

}

// create objects for the person class

const person1 = new Person("Guna","Manivel","22","Male","B.E(cse)","Ariyalur","04-06-2001","9360453231","gunamani0461@gmail.com")
console.log('\n',person1);
const person2 = new Person("Aarthi","Annadurai","23","Female","B.E(Ece)","chennai","08-12-2002","9350953231","Aarthi0461@gmail.com")
console.log('\n',person2);

// getting the gender of the person using the getGender() method

console.log('\n',person1.getGender());
console.log('\n',person2.getGender());

//getting the age of the person and change the age of the person using get Age() and set Age() methods

console.log('\n',person1.Age);
person2.Age = "21";
console.log('\n',person2.Age);