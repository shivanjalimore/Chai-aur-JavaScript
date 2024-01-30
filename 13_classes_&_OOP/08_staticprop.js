class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`;
    }

}
const newUser = new User("Shivanajli");
// console.log(newUser.createId());  // bcoz we use static we can't access createId

// static keyword. Static methods are associated with the class itself, 
// not with instances of the class. They are called on the class 
// rather than on instances, and they cannot access or modify instance-specific data.

class Teacher extends User{
    constructor(username,email)
    {
        super(username);
        this.email = email
    }
}
const random = new Teacher("Shiva","shiva@gmail.com");
console.log(random.logMe());