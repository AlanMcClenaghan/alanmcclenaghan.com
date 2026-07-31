/* Event listener on the document object in case the script is loaded before the HTML
    The rest of the code is then placed in the callback function
*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrar');
    const input = form.querySelector('input');
    const mainDiv = document.querySelector('.main')
    const ul = document.getElementById('invitedList'); 
    
    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckbox = document.createElement('input');
    
    filterLabel.textContent = "Hide those who haven't responded";
    filterCheckbox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);
    
    /* Change event handler added to the filter checkbox
        Callback function
            
    */
    filterCheckbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        const lis = ul.children;    
        if (isChecked) {
            for ( let i = 0; i < lis.length; i++ ) {
              let li = lis[i];
                if (li.className === 'responded') {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            }
        } else {
            for ( let i = 0; i < lis.length; i++ ) {
              let li = lis[i] 
              li.style.display = '';
            }
        }
    });
    
    /* creatLI function with a parameter of 'text'
        Creates a list item
        and a span element
        with the name as text content
        and span elment is added to the list item
        Creates a label
        adds text
        and creates an input
        assigns the type of 'checkbox'
        then adds the checkbox to the label
        and adds the label to the list item
        and creates an edit button
        assigns the textContent of 'edit'
        and adds the button to the list item
        and creates a remove button
        assigns the textContent of 'remove'
        and adds the button to the list item
        and return li
    */
    const createLI = (text) => {
        
        const createElement = (elementName, property, value) => {
            const element = document.createElement(elementName);
            element[property] = value;
            return element;
        }
        
        const appendToLI = (elementName, property, value) => {
            const element = createElement(elementName, property, value);
            li.appendChild(element);
            return element;
        }
        
        const li = document.createElement('li');
        
        appendToLI('span', 'textContent', text);
        
        appendToLI('label', 'textContent', 'Confirmed')
            .append(createElement('input', 'type', 'checkbox'));
        
        appendToLI('button', 'textContent', 'edit');
        
        appendToLI('button', 'textContent', 'remove');
        
        return li;
    };
    
    /* Submit event handler added to the form
        Callback function
            Cancels the browser's default submit behaviour.
            Takes the name entered in the input field
            Calls the createLI function with 'text' as an argument
            and adds the list item created by createLI to the Unordered list.
    */
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // 
        const text = input.value;
        input.value = '';
        const li = createLI(text);
        ul.appendChild(li);
    });
    
    /* Change event handler added to the unordered list
        Callback function
          The change event stores a boolean value in checkbox variable
          The value true or false is stored in the checked variable
          Varaible created for the listItem
          Conditional statement if checked is true
            listItem's className is changed to 'responded'
            else className is blank.  
    */
    ul.addEventListener('change', (e) => {
        const checkbox = e.target;
        const checked = checkbox.checked;
        const listItem = checkbox.parentNode.parentNode;
        if (checked) {
            listItem.className = 'responded';
        } else {
            listItem.className = '';
        }
    });
    
    /* Click event handler added to the unordered list
        Callback function
            If the target of the event is a button
                the target button is assigned to the button variable
                the button's parentNode is assigned to the li variable
                the list item's parentNode is assigned to the ul variable
                    if the button's text content is 'remove'
                        the list item is removed from the unordered list.
                    else if the button's text content is 'edit'
                        span element inside the list item assign to span variable
                        input element is creates and assigned to input variable
                        input type set as text
                        input value set as the text content of the span element
                        input is inserted into the list item before the span
                        the span is removed
                        and the button text content is changed to save
    */
    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            const li = button.parentNode;
            const ul = li.parentNode;
            const action = button.textContent;
            const nameActions = {
                remove: () => {
                    ul.removeChild(li);
                },
                edit: () => {
                    const span = li.firstElementChild;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = span.textContent;
                    li.insertBefore(input, span);
                    li.removeChild(span);
                    button.textContent = 'save'
                },
                save: () => {
                    const input = li.firstElementChild;
                    const span = document.createElement('span');
                    span.textContent = input.value;
                    li.insertBefore(span, input);
                    li.removeChild(input);
                    button.textContent = 'edit'
                }
            };
        
            // Select and run action in button's name
            nameActions[action]();
        }
    });
});