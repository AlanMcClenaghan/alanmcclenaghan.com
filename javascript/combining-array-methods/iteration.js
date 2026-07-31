const arr = [1,2,3];

const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);

console.log(smallerArr); // => [2,4]

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years.filter(year => year > 2001 )
    .map(year => `${year} A.D.`);

console.log(displayYears);

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

const newUsersArray = users.filter(user => user.name !== 'Samir')
console.log(newUsersArray);

const userAge = users.map(user => `${user.name} is ${user.age} years old.`)
console.log(userAge)

const usersObject = users.reduce((usersObject, user) => {
    usersObject[user.name] = user.age;
    return usersObject;
}, {});
console.log(usersObject);


const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`)
console.log(fullAuthorNames)


const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const sNames = userNames
    .filter(name => name.charAt(0) === 'S')
    .map(name => ({ name}));

console.log(sNames);


const moreUsers = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

const usersOver30 = moreUsers
    .filter(name => name.age >= 29)
    .map(name => name.name)

console.log(usersOver30);


const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

unfinishedTasks = todos
    .filter(todo => todo.done === false)
    .map(todo => todo.todo)

console.log(unfinishedTasks)


const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }

const product = products
    .filter(product => product.price < 10)
    .reduce((highest, product) => {
        if ( highest.price > product.price ) {
            return highest;
        }
        return product;
    });

console.log(product);

const productTotal = products
    .filter(product => product.price > 10)
    .reduce((sum, product) => sum + product.price, 0)
    .toFixed(2)

console.log(productTotal);


const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

// groceryTotal should be: 9.47
// Write your code below


groceryTotal = purchaseItems
    .filter(item => item.dept === 'groceries')
    .reduce((sum, item) => sum + item.price, 0);

console.log(groceryTotal)


const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

const flatMovies = movies.reduce((arr, innerMovies) => [ ...arr, ...innerMovies], []);

console.log(flatMovies)


const readers = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const books = readers
    .map(reader => reader.favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [ ...arr, ...titles ], []);

console.log(books);


const customerNames = [
    [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
    [ "Barry", "Wanda", "Jamal", "Hayden" ],
    [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

flattenedCustomerNames = customerNames.reduce((arr, innerNames) => [ ...arr, ...innerNames], []);

console.log(flattenedCustomerNames);


const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

hobbies = customers
    .reduce((arr, customer) => [ ...arr, ...customer.personal.hobbies ], []);

console.log(hobbies);
