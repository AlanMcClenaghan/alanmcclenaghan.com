class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob)
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);

console.log(mary.greeting());

console.log(mary.calculateAge());

mary.getsMarried('Thompson');

console.log(mary);
console.log(mary.greeting());