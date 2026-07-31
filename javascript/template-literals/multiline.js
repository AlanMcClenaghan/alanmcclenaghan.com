// Multi-line string literal
const fruitList = 
    "<ul>" +
        "<li>Kiwi</li>" +
        "<li>Lime</li>" +
        "<li>Pineapple</li>" +
    "</ul>";

/* Multi-line template literal
Only one backtick is required at the beginnng and the end.
All the other quotes and pluses can be deleted. */
const vegetableList = `
    <ul>
        <li>Potato</li>
        <li>Onion</li>
        <li>Broccoli</li>
    </ul>
`;

/* Selects the element with the class of fruits 
and adds the contents of the fruitList variable as innerHTML */
document.querySelector('.fruits').innerHTML = fruitList;

/* Selects the element with the class of vegetables 
and adds the contents of the vegetableList variable as innerHTML */
document.querySelector('.vegetables').innerHTML = vegetableList;