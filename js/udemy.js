let age = prompt("Please enter your age:");

age = Number(age);

if(age<= 12){
    alert("You are a child.");
} else if(age<= 18 && age <= 65){
    alert("You are an adult.");
} else {
    alert("You are a senior.");
}