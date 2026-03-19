function calculateResult() {

    let marks1 = Number(document.getElementById("m1").value);
    let marks2 = Number(document.getElementById("m2").value);

    let totalMarks = marks1 + marks2
    document.getElementById("total").innerHTML = "Total Marks: " + totalMarks + " /800";
    
    if (totalMarks >= 700) {
        document.getElementById("result").innerHTML = "Distinction";
        document.getElementById("result").style.color = "green";
    }
    else if (totalMarks >= 600) {
        document.getElementById("result").innerHTML = "PASS! First Division"; 
        document.getElementById("result").style.color = "black";


}
