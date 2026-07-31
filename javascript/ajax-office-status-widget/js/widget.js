const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 ) {
        let employees = JSON.parse(xhr.responseText);
        let statusHTML = '<ul class="bulleted">';
        for ( let i = 0; i < employees.length; i++ ) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
}
xhr.open('GET', 'data/employees.json');
xhr.send();

const xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
    if ( xhrRooms.readyState === 4 ) {
        let rooms = JSON.parse(xhrRooms.responseText);
        let roomsHTML = '<ul class="rooms">';
        for ( let i = 0; i < rooms.length; i++ ) {
            if (rooms[i].available === true) {
                roomsHTML += '<li class="empty">';
            } else {
                roomsHTML += '<li class="full">';
            }
            roomsHTML += rooms[i].room;
            roomsHTML += '</li>';
        }
        roomsHTML += '</ul>';
        document.getElementById('roomList').innerHTML = roomsHTML;
    }
}
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();