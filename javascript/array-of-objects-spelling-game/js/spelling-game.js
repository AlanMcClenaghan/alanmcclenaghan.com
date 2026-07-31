// Array of objects containing pairs of keys (definition, word) and values
        var spellings = [
            {
                definition: 'Noun: Shade between black and white',
                word: 'grey'
            },
            {
                definition: 'Verb: To hunt. Noun: Something that is hunted.',
                word: 'prey'
            },
            {
                definition: 'Noun: Animal that pulls Santa sleigh', 
                word: 'reindeer'
            },
            {
                definition: 'Pronoun: Used to identify several people', 
                word: 'they'
            },
            {
                definition: 'Noun: Tube that carries blood in the body', 
                word: 'vein'
            },
            {
                definition: 'Noun: Someone who lives next door', 
                word: 'neighbour'
            },
            {
                definition: 'Noun: Number between seven and nine', 
                word: 'eight'
            },
            {
                definition: 'Verb: Measure how heavy or light something is.', 
                word: 'weigh'
            },
            {
                definition: 'Verb: Do as one is told.', 
                word: 'obey'
            },
            {
                definition: 'Noun: A pale sandy fawn colour', 
                word: 'beige'
            },
            {
                definition: 'Noun: Santa travels in one pulled by reindeer', 
                word: 'sleigh'
            }
        ];

        // Global variables
        var correctWords = 0;
        var definition;
        var word;
        var response;
        var html;
        var correct = [];
        var wrong = [];

        /*
        Function to display the message to the screen
            First the div with the ID of 'output' is selected
            then the content of message is inserted as innerHTML
        */
        function display(message) {
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = message;
        }

        /*
        Function to a build list of definition from the array
            HTML variable is created and an opening Ordered List tag is added
            for loop through the array adding List Item tags
            The Ordered List is closed
            and listHTML is returned
        */
        function buildList(arr) {
            var listHTML = "<ol>";
            for (var i = 0; i < arr.length; i++) {
                listHTML += "<li>" + arr[i] + "</li>";
            }
            listHTML += "</ol>";
            return listHTML;
        }

        /*
        For loop through the spellings array.
            definition variable created and spellings are added from the array using dot notation
            word variable created and words are added from the array using dot notation
            response variable created and each is prompted in the browser
                and the word is parsed into an integer.
            Conditional statement test if the word is correct, and if so
                1 is added to the correctWords variable
                and the definition added to the correct variable using the push method
            else the definition is added to the wrong variable using the push method
        */
        for (var i = 0; i < spellings.length; i++) {
          definition = spellings[i].definition;
          word = spellings[i].word;
          response = prompt(definition);
          if (response.toLowerCase() === word) {
                correctWords += 1;
                correct.push(word);
            } else {
                wrong.push(word);
            }
        }

        /*
        String is built in the html variable with the number of correctWords
        The buildList function is used to create a list of the correct words
        and the wrong words
        the display function inserts the contents of the html to the browser.
        */
        html = "<h2>You got " + correctWords + " spelling(s) right out of " + spellings.length + ".</h2>";
        html += "<h2>You got these spellings correct:</h2>";
        html += buildList(correct);
        html += "<h2>you got these spellings wrong:</h2>";
        html += buildList(wrong);
        display(html);