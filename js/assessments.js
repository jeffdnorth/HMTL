class Assessment {
    constructor(techassess, score){
        this.techassess = techassess;
        this.score = score;
    }
    toTr(){
        return `<tr>`
        + `<td>${this.techassess}</td>`
        + `<td>${this.score}</td>`
    }
}
let assessments = [];

const add = () => {
    //get value from input controls
    let techassess = document.getElementById("techassess").value;
    let score = document.getElementById("score").value;

    //create instance of assessments
    let assessment = new Assessment(techassess, score);
    assessments.push(assessment);
    console.log(assessments);
    //display all assessments in array
    display();
};
    const display = () => {
        let tbodyCtrl = document.getElementById("assessments");
        //clear table body
        tbodyCtrl.innerHTML = "";
        //DOING AVG OF SCORES
        //let sum = 0;
        //for(let a of assessments)
        //{ sum +=score;
        // tbodyCtrl.innerHTML += a.toTr();
       // }
        //letavg = sum / assessments.length;
        //console.log("Avg=",avg, "Sum=", sum, "Len=", assessments.length);
        //tbodyCtrl.innerHTML += `<tr>`
        //           + `<td>Average</td>`
        //           +  `<td>${sum / assessments.lenght}</td>`
        //           + `</tr>
 
        for (let assessment of assessments){
            tbodyCtrl.innerHTML += assessment.toTr();
        }
}