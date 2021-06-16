let students = [
    { student: "jane", color: "pink", number: 4 },
    { student: "Jim", color: "blue", number: 5}
];
const loaded = () => {

    //not finished in this part
    
    let body = document.getElementsByTagName
    display();
}
const add = ()=> {
    let studentValue = document.getElementById("student").value;
    let colorValue = document.getElementById("color").value;
    let numberValue = document.getElementById("number").value;
    let studentJson = {
        student : studentValue,
        color: colorValue,
        number: numberValue
    };
    students.push(studentJson);
    display();
}

const display = () => {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = ""
    for(let s of students) {
        let tr ="<tr>";
        tr += `<td>${s.Student}</td>`;
        tr += `<td>${s.Coler}</td>`;
        tr += `<td>${s.Number}</td>`;
        tr =+ "</tr>";
        tbodyCtrl.innerHTML += tr;
           
    }
};
