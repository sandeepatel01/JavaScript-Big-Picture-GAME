class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sandeep`
    }

    set password(value){
        this._password = value
    }
}

const sandeep = new User("s@sandep.ai", "abc")
console.log(sandeep.password);
console.log(sandeep.email);