var report = "";
var student;

function display(report) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = report;
}

for (var i = 0; i < students.length; i++) {
    student = students[i];
    report += "<h2>Student: " + student.name + "</h2>";
    report += "<p>Track: " + student.track + "</p>";
    report += "<p>Achievements: " + student.achievements + "</p>";
    report += "<p>Points: " + student.points + "</p>";
    
}

display(report)