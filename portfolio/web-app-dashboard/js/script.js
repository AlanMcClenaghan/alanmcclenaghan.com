      let membersArray = [];
      
      //Notifications message array  
      let messages = [
        "You have 3 unread messages",
        "There are 4 new members",
        "Your subscription has been renewed",
      ];
      
      //Alert content variable
      let alertContent = "<strong>Alert:</strong> Hope you like my Project. Have a nice day!";
      
      //Span tag for close button
      const closeButton = "<span class=\"close-button\" onclick=\"this.parentElement.style.display='none';\">&times;</span>";
      
      //Global Selectors
      const notificationList = document.getElementById("notification-list");
      const notificationCount = document.getElementById("notification-counter");
      const buttonDiv = document.getElementById("selector-buttons");
      const buttons = buttonDiv.children;
      
      //create today's date in the format of mm/dd/yyyy.
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      today = mm + '/' + dd + '/' + yyyy;
      console.log(today);

      //Inserts Notifications Items into Alert Div Notifications List
      for (let i = 0; i < messages.length; i++) {
        let notificationItem = document.createElement('li');
        notificationItem.className = "notification-item";
        notificationItem.innerHTML = messages[i] + closeButton;
        notificationList.appendChild(notificationItem);
      }
      
      //Set Notification Counter with number of messages
      notificationCount.textContent = messages.length;
      
      //Displays Notifications when Notification Icon is clicked
      function displayNotifications() {
          notificationList.style.display = "flex";
          notificationCount.style.display = "none";
      }
      
      //Selects Alert Div and Inserts Alert message
      const alertMessage = document.getElementById("alert");
      alertMessage.innerHTML = alertContent + closeButton;
     
      //Removes or adds active class to chart selector buttons
      buttonDiv.addEventListener('click', (event) => {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("active");  
        }
        event.target.className = "active";  
      });

      //Converts names to Title Case
      let titleCase = (text) => {
        text = text.charAt(0).toUpperCase() + text.substr(1);
        return text;
      }
      
      //RANDOM USER GENERATOR
      $.ajax({
        url: 'https://randomuser.me/api/?results=100&inc=picture,name,email&nat=gb',
        dataType: 'json',
        success: function(data) {
          let newMembers = '<h3 class="subhead">New members</h3>';
          for (let i = 0; i < 4; i++ ) {
            let member = data.results[i];
            let picture = member.picture.thumbnail;
            picture = '<img class="member-image" src="' + picture + '" alt="member profile picture">'
            let firstName = titleCase(member.name.first);
            let lastName = titleCase(member.name.last);
            let fullName = firstName + " " + lastName;
            let email = member.email;
            newMembers += '<div class="member">';
            newMembers += picture;
            newMembers += '<p class="member-name">' + fullName + '</p>';
            newMembers += '<p class="member-email">'+ email + '</p>';
            newMembers += '<p class="joined">' + today + '</p>';
            newMembers += '</div>';
          }      
            document.getElementById('new-members').innerHTML = newMembers;           
        }
      }); //End RANDOM USER GENERATOR
    
      //Form validations function
      function validateForm() {
        const user = document.forms["message-form"]["searchbox"].value;
        const message = document.forms["message-form"]["message-user"].value;
          if (user == "" || message == "") {
            alert('Please complete BOTH the "Search for User" and "Message for User" fields.');
          } else {
            alert('Message has been sent.');
          }
      }
      
      //Save to local storage
      function save() {
        if (typeof(Storage) !== "undefined") {
          // Code for localStorage/sessionStorage
          console.log('Yes! Local Storage Available')
          const emailNotifications = document.getElementById("myonoffswitch1");
          localStorage.setItem("myonoffswitch1", emailNotifications.checked);
          const profileToPublic = document.getElementById("myonoffswitch2");
          localStorage.setItem("myonoffswitch2", profileToPublic.checked);
          const timezoneValue = document.getElementById("DropDownTimezone").value;
          localStorage.setItem("timezoneValue", timezoneValue);
        } else {
            // Sorry! No Web Storage support.
            console.log('Sorry! No Web Storage support.')
          }
      }     
      
      //Load from local storage
      if (localStorage.length > 1) {
        const emailPreference = JSON.parse(localStorage.getItem("myonoffswitch1"));
        document.getElementById("myonoffswitch1").checked = emailPreference;
        const profilePreference = JSON.parse(localStorage.getItem("myonoffswitch2"));
        document.getElementById("myonoffswitch2").checked = profilePreference;
        const myTimezone = localStorage.getItem("timezoneValue");
        document.getElementById("DropDownTimezone").value = myTimezone;
      }
      
      //Cancel button to clear local storage
      function cancel() {
        localStorage.clear();
        location.reload();
      }