class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }
    
    // Getter
    get activity() {
        const today = new Date();
        const hour = today.getHours();
        if ( hour > 7 && hour <= 23 ) {
            if ( hour === 8 || hour === 20) {
            return 'eating';
            } else {
                return 'playing';
            }
        } else {
            return 'sleeping';
        }
    }
    
    get owner() {
        return this._owner;
    }
    
    // Setter
    set owner(owner) {
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }
    
    
    speak() {
        console.log(this.sound);
    }
}

class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    
    // Setter
    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }

    get phone() {
        return this._phone;  
    }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'arrooo');
const scofield = new Pet('dog', 6, 'Doberman', 'woof');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer', 'yap yap');

console.log(ernie);
console.log(vera);
console.log(scofield);
console.log(edel);

ernie.speak();
vera.speak();
scofield.speak();
edel.speak();


console.log(ernie.activity);

ernie.owner = "Alan";
console.log(ernie._owner);
console.log(ernie.owner);

ernie.owner = new Owner('Ashley', '123 Main Street')
ernie.owner.phone = '(555) 555-55555'

console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.address);
console.log(ernie.owner.phone);