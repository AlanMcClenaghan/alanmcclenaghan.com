var report = "";
var student;
var search;

function display(report) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = report;
}

function getStudentReport(student) {
    var report = "<h2>Student: " + student.name + "</h2>";
    report += "<p>Track: " + student.track + "</p>";
    report += "<p>Achievements: " + student.achievements + "</p>";
    report += "<p>Points: " + student.points + "</p>";
    return report
}

while (true) {
    search = prompt('Search student records: type a name (or type "quit" to exit)')
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if ( student.name === search ) {
            report = getStudentReport(student);
            display(report)
        }
 
    }
}

display(report)