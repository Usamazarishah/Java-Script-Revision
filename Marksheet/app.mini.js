var urdu = +prompt("Enter Your Urdu Number ");
var english = +prompt("Enter Your English Number");
var islamiyat = +prompt("Enter Your Islamiyat Number");
var computer_science = +prompt("Enter Your Computer Science Number");
var physics = +prompt("Enter Your Physics Number");
var math = +prompt("Enter Your Math Number");

var secured = parseInt((urdu + english + islamiyat + computer_science + physics + math));
var percentage = secured / 550 * 100;
var grade_num = secured;

for (var i = 0; i <= 1; i++) {
    document.querySelectorAll(".urdu_number")[i].innerHTML = urdu;
    document.querySelectorAll(".english_number")[i].innerHTML = english;
    document.querySelectorAll(".islamiyat_number")[i].innerHTML = islamiyat;
    document.querySelectorAll(".computer_number")[i].innerHTML = computer_science;
    document.querySelectorAll(".physics_number")[i].innerHTML = physics;
    document.querySelectorAll(".math_number")[i].innerHTML = math;
}
document.querySelector(".secured_number").innerHTML = secured;
document.querySelector(".percentage_number").innerHTML = `${percentage}%`;

var grade;

if (grade_num >= 440) {
    grade = `A1`;
}
else if (grade_num >= 385) {
    grade = `A`;
}
else if (grade_num >= 330) {
    grade = `B`;
}
else if (grade_num >= 275) {
    grade = `C`;
}
else if (grade_num >= 220) {
    grade = `D`;
}
else {
    grade = `F`;
}
document.querySelector(".grade").innerHTML = grade;

document.querySelector(".urdu_remarks").innerHTML = calcSubjectGrade(urdu);
document.querySelector(".english_remarks").innerHTML = calcSubjectGrade(english);
document.querySelector(".islamiyat_remarks").innerHTML = calcSubjectGrade(islamiyat);
document.querySelector(".computer_remarks").innerHTML = calcSubjectGrade(computer_science);
document.querySelector(".physics_remarks").innerHTML = calcSubjectGrade(physics);
document.querySelector(".math_remarks").innerHTML = calcSubjectGrade(math);

function calcSubjectGrade(marks) {
    var remarks;
    if (marks >= 50) {
        remarks = `Pass`;
    }
    else {
        remarks = `Fail`;
    }
    return remarks;
}