const input_1 = document.getElementById("input_1")
const input_2 = document.getElementById("input_2")
const submit_btn = document.getElementById("submit_btn")
const result_btn = document.getElementById("result_btn")

let rows;
let columns;

submit_btn.addEventListener("click", function () {
    rows = parseInt(input_1.value);
    columns = parseInt(input_2.value)
    let html = "<h3>Matrix 1</h3> <table >";
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < columns; j++) {
            html += `<td><input type="number" value="0" id="usama-${i}${j}" class="usama"></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    html += "<h3>Matrix 2</h3><table >";
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < columns; j++) {
            html += `<td><input type="number" value="0" id="fazal-${i}${j}" class="usama"></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    html += "<h3>Result</h3><table >";
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < columns; j++) {
            html += `<td><input type="number" value="0" id="amir-${i}${j}" class="usama" input="checkbox"></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    document.querySelector(".result").innerHTML = html;
    submit_btn.disabled = true;
});


result_btn.addEventListener("click", function () {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            const value = document.querySelector(`#usama-${i}${j}`).value;
            const value1 = document.querySelector(`#fazal-${i}${j}`).value;
            const plus = parseInt(value) + parseInt(value1);
            
            document.querySelector(`#amir-${i}${j}`).value = plus;
        }
    }
});