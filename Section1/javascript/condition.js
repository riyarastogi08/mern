// Types of Conditions
// 1. if (to check single or multiple condition)
// 2. if-else (to check multiple condition)
// 3. if-else-if (to check multiple condition)
// 4. Ternary operator (to check single condition)

let age = 10
if(age>=18){
    console.log("You are eligible to vote")
}

let a = 10
if(a>=18){
    console.log("You are eligible to vote")
} else{
    console.log("You are not eligible to vote")
}

let temp = 45
if(temp<0){
    console.log("Stay at home")
} else{
    console.log("Digipodiom a jao")
}

let marks = 90
if(marks>=90){
    console.log("Grade A")
} else if(marks>=80){
    console.log("Grade B")
}  else if(marks>=70){
    console.log("Grade C")
} else if(marks>=60){
    console.log("Grade D")
} else {
    console.log("Fail")
}

let c = 20
let result = c>10 ? "Greater than 10" : "Less than 10"
console.log(result)