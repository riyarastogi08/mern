let fruits=['Apple', 'Mango', 'Orange', 'Guava', 'Banana', 'Strawberry','Pineapple']
console.log(fruits)

//Array Methods
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove lement from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. splice() - add or remove element from the array
// 6. slice() - copy elements from the array
// 7. indexOf() - find the index of the element
// 8. concat() - merge two array
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

console.log(fruits[0])
console.log(fruits.length)
console.log(fruits[5])
console.log(fruits.slice(2,6))

fruits.push('banana')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.concat()
console.log(fruits)

let index =fruits.indexOf('Mango')
console.log(index)

console.log('------------------------')

// Iteration using loop

let num = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<num.length; i++){
    console.log(num[i]**2)
}

//Iteration using forEach

num.forEach((i) => {
    console.log(i**2)
})

//Iteration Using Map

let square = num.map((x) => x**2)
console.log(square)

//Filter function
let evenNum=[]
for(let i=0; i<num.length; i++){
    if(i%2==0){
        evenNum.push(i)
    }
}

let even = num.filter((x) => x%2==0)
console.log(even)

let odd = num.filter((x) => x%2!= 0)
console.log(odd)

let color= ['red', 'blue', 'green','yellow','black','white','orange', 'pink', 'violet']
let newColor = color.filter((x) => x.length>4)
console.log(newColor)

let rupe=[900, 1000, 1500,1600,1700,1800, 1900,2000, 2500,2800,3000, 3500,4000]
let newArr = rupe.filter((x) => x>=1000 && x<=3000)
console.log(newArr)