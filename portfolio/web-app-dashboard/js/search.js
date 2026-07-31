var memberSearch = new autoComplete({
            selector: '#searchbox',
            minChars: 1,
            source: function(term, suggest){
                term = term.toLowerCase();
                var memberList = ['Alex Alexander', 'Eric Alvarez', 'Maurice Austin', 'Tom Bates', 'Owen Brown', 'Grace Carr', 'Suzy Carr', 'Elizabeth Collins', 'Isabella Davies', 'Victor Evans', 'Sophia Fowler', 'Kimberly Garza', 'Juan Gonzales', 'Cathy Hamilton', 'Mia Jackson', 'Rosie Jimenez', 'Roland Johnson', 'Ethan Jordan', 'Marion Knight', 'Scott Lewis', 'Melvin Little', 'Vicki Long', 'Peter Milligan', 'Nicole Mitchell', 'Philip Perez', 'Kimberly Perkins', 'Heather Phillips', 'Robert Riley', 'Neil Watts'];
                var suggestions = [];
                for (i=0;i<memberList.length;i++)
                    if (~memberList[i].toLowerCase().indexOf(term)) suggestions.push(memberList[i]);
                suggest(suggestions);
            }
        });