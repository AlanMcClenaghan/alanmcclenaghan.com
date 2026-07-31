$(document).ready(function() {
    
    let employees = "../data/employees.json";
    $.getJSON(employees, function(response) {
        let statusHTML = '<ul class="bulleted">';
        $.each(response, function(index, employee){
            if (employee.inoffice === true) {
                statusHTML += '<li class="in">'
            } else {
                statusHTML += '<li class="out">'
            }
            statusHTML += employee.name;
            statusHTML += '</li>'
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    }); // end getJSON
    
    let rooms = "../data/rooms.json";
    $.getJSON(rooms, function(response) {
        let statusHTML = '<ul class="rooms">';
        $.each(response, function(index, room){
            if (room.available === true) {
                statusHTML += '<li class="empty">'
            } else {
                statusHTML += '<li class="full">'
            }
            statusHTML += room.room;
            statusHTML += '</li>'
        });
        statusHTML += '</ul>';
        $('#roomList').html(statusHTML);
    }); // end getJSON
    
}); // end ready