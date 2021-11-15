const container = document.getElementById("container");
let amountOfSubjects = prompt("Amount of Subjects Taken:", " ");
let sum = 0;
let grade = "";

for(let i = 1; i<=amountOfSubjects; i++){
    
    let elem = document.createElement('input');
    elem.type = "text";
    elem.placeholder = "Marks for Subject " + i + " in %";
    container.appendChild(elem);

}

let elem = document.createElement('button');
elem.type = "button";
elem.innerHTML = "Submit";
elem.id = "button";
container.appendChild(elem);
let button = document.getElementById("button");

button.addEventListener("click", (e) => {
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i<inputs.length; i++){
        sum+=Number(inputs[i].value);
    }

    if(sum/amountOfSubjects > 90 ){
        grade = "A";
    }else if(sum/amountOfSubjects > 80 && sum/amountOfSubjects < 89){
        grade = "B";
    }else if(sum/amountOfSubjects > 70 && sum/amountOfSubjects < 79){
        grade = "C";
    }else if(sum/amountOfSubjects > 60 && sum/amountOfSubjects < 69){
        grade = "D";
    }else{
        grade = "F";
    }
    alert("You Recived: " + (sum/amountOfSubjects).toFixed(2) + "%\nYour Grade is: " + grade)
    window.location.reload();
})

