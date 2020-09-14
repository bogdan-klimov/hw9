class User {
    constructor(name, surname,) {
        this.name = name;
        this.surname = surname;
    }

    getFullName () {
        return `${this.name} ${this.surname}`
    }

}

class Student extends User{
    constructor (year) {
        super();
        this.year = year;
    }

    getSource () {
        let thisYear = 2020;
        return thisYear - this.year;
    }

}

const Ivan = new Student (2016);

Ivan.name = "Иван";

Ivan.surname = "Иванов";

console.log(Ivan.getFullName());

console.log(Ivan.getSource());

