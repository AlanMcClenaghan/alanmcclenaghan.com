//RANDOM USER GENERATOR
      $.ajax({
        url: 'https://randomuser.me/api/?results=12&inc=picture,name,location,email,cell,dob&nat=gb',
        dataType: 'json',
        success: function(data) {
          let employeeDirectory = '<div id="searchbox"><input type="text" class="search" placeholder="Search"></div><div class="list">';
          for (let i = 0; i < 12; i++ ) {
            let employee = data.results[i];
            let picture = employee.picture.large;
            picture = '<img class="image" src="' + picture + '" alt="Employee photo">';
            let firstName = employee.name.first;
            let lastName = employee.name.last;
            let fullName = firstName + " " + lastName;
            let email = employee.email;
            let street = employee.location.street;
            let city = employee.location.city;
            let state = employee.location.state;
            let postcode = employee.location.postcode;
            let address = street + ', ' + city + ',<br> ' + state + ', ' + ' UK, ' + postcode
            let cell = employee.cell;
            console.log(employee.dob.date);
            let birthYear = employee.dob.date.slice(2,4);
            let birthMonth = employee.dob.date.slice(5,7);
            let birthDay = employee.dob.date.slice(8,10)
            let birthday = birthDay + '/' + birthMonth +  '/' + birthYear;
            
            
            employeeDirectory += '<div class="modal"><input id="modal__trigger' + [i+1] + '" type="checkbox"><label for="modal__trigger' + [i+1] + '"><div class="employee-short">';
            employeeDirectory += picture;
            employeeDirectory += '<span class="name">' + fullName + '</span>';
            employeeDirectory += '<span class="email">'+ email + '</span>';
            employeeDirectory += '<span class="city">' + city + '</span>';
            employeeDirectory += '</div></label>';
               
            
            employeeDirectory += '<div class="modal__overlay"><div class="modal__wrap"><label for="modal__trigger' + [i+1] + '" class="x">&#10006;</label><div class="employee-long"}>';
            employeeDirectory += picture;
            employeeDirectory += '<span class="name">' + fullName + '</span>';
            employeeDirectory += '<span class="userName">' + firstName + lastName + birthYear +'</span>';
            employeeDirectory += '<span class="email">'+ email + '</span>';
//            employeeDirectory += '<span class="city">' + city + '</span>';
            employeeDirectory += '<hr>';
            employeeDirectory += '<span class="cell">' + cell + '</span>';
            employeeDirectory += '<span class="address">' + address + '</span>';
            employeeDirectory += '<span class="birthday"> Birthday: ' + birthday + '</span>';
            if ( i > 0 ) {
              employeeDirectory += '<button onclick="document.getElementById(\'modal__trigger' + [i+1] + '\').checked = false; document.getElementById(\'modal__trigger' + [i] + '\').checked = true;" class="previous">Previous</button>';
            }
            if ( i < (data.results.length -1) ) {
              employeeDirectory += '<button onclick="document.getElementById(\'modal__trigger' + [i+1] + '\').checked = false; document.getElementById(\'modal__trigger' + [i+2] + '\').checked = true;" class="next">Next</button>';
            }
            employeeDirectory += '</div></div></div></div>';
            

          }
            employeeDirectory += '</div>';
            document.getElementById('container').innerHTML = employeeDirectory;
          
             let example = document.getElementsByClassName('name');
          
             var options = {
               valueNames: [ 'name' ]
             };
             var container = new List('container', options);
        }
      }); //End RANDOM USER GENERATOR