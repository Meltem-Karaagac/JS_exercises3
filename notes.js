{// OBJECTS



    const phone_camera = ""
    const phone_model = ""
    const phone_memory = ""
    const phone_price = ""


    call()
    photo()
    mesaj()
}

const model = ""
const engine = ""
const km = ""

start()
stop()


const user = {
    userName: "Albert",
    userPassword: "emc2",
    userAge: 40,
    logIn() {
        console.log("Logging in!")
    },
    logOut() {
        console.log("Loggin out!")
    },
    findLaw(law) {
        console.log(`I've found ${law} law!`)
    }
}



console.log(user.userName);     // Albert
console.log(user["userName"]);  // Albert

const propName = "userName";
console.log(user[propName]);  // Albert


user.logIn();
user.logOut();
user.findLaw("relativity")

// Property Değişimi
user.userName = "Thomas";

console.log(user.userName);


{// CLASSES
    class User {
        constructor(param) {
            this.property_1_Name = param.prop_1_Name;
            this.property_2_Name = param.prop_2_Name;
            this.property_3_Name = param.prop_3_Name;
            // ...
            // ...
            // ...
        }
        myFunction() {
            // ...
            // ...
        }
    }

    const myUser = new User(/* properties **/)

    console.log(myUser.property_1_Name)
    console.log(myUser.property_2_Name)
    console.log(myUser.property_3_Name)

    myUser.myFunction();

}