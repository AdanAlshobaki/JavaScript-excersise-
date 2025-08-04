// question 1
function swapProducts() {
  const container = document.getElementById("product-container");
  const var1 = document.getElementById("product1");
  const var2 = document.getElementById("product2"); 
  container.insertBefore(product2, product1);
}
// question 2
function ticketNumber(serialNumber) {
    if (serialNumber % 2 == 0) {
        return "is even";
    } else {
        return "is odd";
    }
}

let serialNumber1 = 102;
let serialNumber2 = 111;

console.log(`${serialNumber1}${ticketNumber(serialNumber1)}`); 
console.log(`${serialNumber1}${ticketNumber(serialNumber2)}`);
// question 3
// factoiral number 
function factExercise(){
    let n=5;
// let n=prompt("enter your number Exercises:");
// let num = parseInt(n);

let factorial =1;
for(let i=1 ; i<=n ; i++){
   factorial *=i;
  
}
  return `factorial exercise is ${n}  is ${factorial}`
}
console.log(factExercise())
// question 4
function PalindromeCheck() {
    const input=document.getElementById("inputcheck").value;
  let reversed = input.split("").reverse().join("");
 let check= input === reversed;
 document.getElementById("result").innerText=check
}
PalindromeCheck()
// question 5
function largestNumber(){
let x=1;
let y=5;
let z=9;
if(! isNaN (x) && !isNaN (y) && ! isNaN( y)){
  return  Math.max(x,y,z)
}
}
console.log(largestNumber())

// qusetion 6
function FibonacciSequence(n){
    let fibr=[0,1]
for(let i=2 ; i<n ; i++){
    fibr[i]=fibr[i-1]+fibr[i-2];
  
}
  return fibr.slice(0,n)
}
console.log(FibonacciSequence(10));

// question 7
function sumDigts(number){
   let str = number.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}
let num1=234;
let num2=879;
 

console.log(sumDigts(num1));
console.log(sumDigts(num2));
// question 8
function primenumbers(number){
   if (number<=1)
    return "Is not prime number"
    for(let i=2;i<number;i++){
      if(number%i===0){
        return "Is not prime number"
      }
    }
 return "Is Prime number"
}


console.log(primenumbers(4));
console.log(primenumbers(2))

// question 9
function reversestring(word){
if(isNaN(word)){
    let rev=word.split("").reverse().join("");
    return rev;
}
}
let text="adan"
console.log(reversestring(text))

// question 10

function loopFactorial(){
 let input=document.getElementById("inputfact").value;
 let n=parseInt(input);
let factorial =1;
for(let i=1 ; i<=n ; i++){
   factorial *=i;
   
  
}
document.getElementById("myresult").innerText= `Factorial of ${n} is ${factorial}`;
}
loopFactorial();

//question 11
function GCD(num1,num2){
while(num2 !==0){
let result=num2;    
num2=num1 % num2;
num1=result;
}
return num1;
}
console.log(GCD(10,20));
//question 12
function perfectNumber(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num %i==0){
    sum+=i;
    }
    }
    if(num==sum){
        return (num +"number is perfect") 
    }else{
        return (num +"number is not perfect") 
    }

}

console.log(perfectNumber(6))
//question 13
 function GCD(n1,n2){
while(n2 !==0){
let result=n2;    
n2=n1 % n2;
n1=result;
}
return n1;
}
function lcm(n1,n2){
return (n1*n2)/GCD(n1,n2)
}
console.log( `LCM is ${lcm(4,2)}`)
// question 14

let array=[];
function Duplicate(arr){
for(let i=0;i<arr.length;i++ ){
    if(! array.includes(arr[i])){
array.push(arr[i]);
    }
}
return array;
}
console.log(Duplicate([123,741,123]));
// question 15
let sum=0;
function sumElement(arr1){
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
    }
    return sum;
}
console.log(sumElement([1,2,4,3]));
// question 16
function maxElement(arra){
    let max=arra[0];
 for(let i=1;i<arra.length;i++){
    if(arra[i]>max){
       max=arra[i]
    }
    }
    return max;
    }
console.log(` max element in array is:${maxElement([1,2,4,9,7,80])}`)
// question 17
function minElement(arre){
    let min=arre[0];
 for(let i=1;i<arre.length;i++){
    if(arre[i]<min){
       min=arre[i]
    }
    }
    return min;
    }
console.log(` min element in array is:${minElement([1,2,4,9,7,80])}`)
// question 18
function findCommonMovies(arr1,arr2)
{
    let Result=[];
for(let i=0;i<arr1.length;i++){
            let movie=arr1[i];
    if(arr2.includes(movie) && !Result.includes(movie)){
        Result.push(movie)
}
}
 return Result; 
}
let list1=["fast and farious","titanic","fast 2"];
let list2=["titanic ","fast 2","need for speed","fast 2"]
console.log(findCommonMovies(list1,list2));
// question 19
function Occurrences(arrr,targetvalue){
    let count=0;
    //  can use for of loop:
    // for(const element of arrr){}
    for(let i=0;i<arrr.length;i++){
        if(arrr[i]===targetvalue){
            count++;
        }
    }
    return count;
}
let value1=[1,2,1,5,7,2,4,1];
let targetvalue=1;
console.log(Occurrences(value1,targetvalue))
// question 20

function findSongIndex(playlist, songTitle) {
  return playlist.indexOf(songTitle);
}
const playlist = ["Hello", "Closer", "RightNow", "Peaches"];
const titleToFind = "RightNow";

const index = findSongIndex(playlist, titleToFind);
console.log(` ${titleToFind} is index:${index}`);
