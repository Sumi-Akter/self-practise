// Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700........................solution


let gaveHim=1000;
let totalCost=700;
let shopkeeperReturn=gaveHim-totalCost;
console.log(shopkeeperReturn);

//  Write a program to calculate the average marks of Mathematics,
// Biology, Chemistry, Physics, and Bangla of a student.
let MathematicsMarks=90;
let BiologyMarks=80;
let ChemistryMarks=60;
let PhysicsMatks=80;
let BanglaMarks=60;
let averageMarks=(MathematicsMarks+BiologyMarks+ChemistryMarks+PhysicsMatks+BanglaMarks)/5;
console.log(averageMarks);



//  John’s teacher gave him two variables. Each variable contains a string.
// John’s teacher asked him to combine these two strings(‘I am going to
//     be’ and ‘an awesome web developer’) and print them in one line. Help
//     John write the program


let sentenceOne='I am going to';
let sentenceTwo='an awesome web developer';
let joint=sentenceOne.concat(sentenceTwo);
console.log(joint);


// Sarah’s mother is teaching her mathematics. She gave Sarah the number
// 119 and asked her what the remainder would be if she divided the number
// by 5. Help Sarah write the program.

let number=119;
let num=5;
let findRemainder=number%num;
console.log(findRemainder);


//  You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.


let  fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));
fruits[1]='Mango';
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);



// You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using
// if-else.

let marks=29;
if(marks>=80){
    console.log("got A+");
}
else if(marks>=70){
    console.log('got A')
}
else if(marks>=60){
    console.log('got B')
}
else if(marks>=50){
    console.log('got c')
}
else{
    console.log('fail')
}

//  You are given three numbers 13, 79, and 45. Write a program that will
// print the largest number using if-else

let num1=13;
let num2=79;
let num3=45;
if(num1>num2 && num1>num3){
    console.log("largest number:",num1);
}
else if(num2>num1 && num2>num3){
    console.log("largest number:",num2);
} 
else{
    console.log("largest number:",num3);

}

// তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
// সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
// পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
// হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
// signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
// সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।



let signal='green';
if(signal=='red'){
    console.log('risky');
}
else if(signal=='yellow'){
    console.log('should stop');
}
else if(signal=='green'){
    console.log('cross the road')
}
else{
    console.log('ghumao');
}

// প্রতি দি ন ত োমার কাজ কি ?
// ১) রাত ৮ টা বাজে মডি উল আনলক কর ো
// ২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
// ৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
// ৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
// ৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
// জয়ে ন কর ো
// এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
// দে খান ো।

// for(i=0;i<10;i++){
//     console.log("unlock module at 8 pm");
// }

// for(i=10;i>5;i--){
//         console.log("unlock module at 8 pm");
//     }

// let practise=0;
// while(practise<10){
//     console.log("practise vedio");
//     practise++;
// }

// ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
// কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
// ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।

let taka=4000;
if(taka==80000){
    console.log('buy mac');
}
else if(taka==60000){
    console.log('buy gamming');
}
else if(taka==40000){
    console.log('buy lenovo yoga');
}
else if(taka==20000){
    console.log('mobile');
}
else{
    console.log('icelolly');
}


// আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও
for(i=0;i<39;i++){
    console.log('ajke amr mon vlo nei');
}

// একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও
for(i=58;i<=98;i++){
    console.log(i);
}

// একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
// দে খাও
for(i=412;i<=456;i=i+2){
    console.log(i);
}

// একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও

for(i=581;i<623;i=i+2){
    console.log('odd=',i);
}

// তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
// for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।
let learn=['variable','loop','array','condition','function','object'];
for(i=0;i<learn.length;i++){
    let learns=learn[i];
    console.log(learns);
}

// তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
// array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
// আউটপুট হি সে বে দে খাও
let mobile=['oppo','nokia','realme'];
let count=0;
while(count<mobile.length){
   
    console.log(mobile[count]);
    count++;
}
// একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
// জি নি স ক োড করে দে খাও

for(var i=30;i<=86;i++){
    if(i==44){
        break;
    }
    console.log(i);
}

// ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
// টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
// আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।

let bookPrice=[450,65,100,678,432,150,250,22,45,38,79];
for(i=0;i<bookPrice.length;i++){
    if(bookPrice[i]>200){
        continue;
    }
    console.log(i);
}

// Write a function to check odd or even number.
// You need to do it in 2 ways- has return and no return.
function checkEvenOdd(numm){
    if(numm% 2== 0){
        console.log("it's even number")
    }
    else{
        console.log("it's odd number")

    }
    

}
checkEvenOdd(34);

// find long length string from array
let friends=['sweet','tanu','peu','johirul','shahadat'];
// for(i=0;i<friends.length;i++){
//     let bestFriend=friends[i]
//     console.log(bestFriend);
// }
let temp=friends[0];
for(i=0;i<friends.length;i++){
    let bestFriend=friends[i]
    if(bestFriend.length>temp.length){
        temp=bestFriend;
        console.log(temp);
    }
}

// Write a function that will take feet as the input parameter and will convert it into inch and will return the result in inch.
function feetToInch(feet){
    const inchValue=feet*12;
    return inchValue;
}
const resullt=feetToInch(5);
console.log(resullt);



// Write a function which will take 3 integers and return the largest number.
// You need to do it in 2 ways- has return and no return.
function findLargest(num1,num2,num3){
    if (num1>num2 && num1>num3){
        console.log('The Largest Number is:',num1);
    }
   else if (num2>num1 && num2>num3){
        console.log('The Largest Number is:',num2);
    }
    else{
        console.log('The Largest Number is:',num3);

    }
}
findLargest(23,67,98);


// Write a program to find the total price of those product object.

// { name: “Laptop”, color: “black” , price: 12000 }
// { name: “Monitor”, color: “gray” , price: 5000 }
// { name: “Mobile”, color: “black” , price: 2500 }
let a={ name: 'laptop',
     color: 'black', 
     price: 12000 };
let b={ name: 'monitor',
     color: 'gray' ,
      price: 5000 }
let c={ name: 'mobile',
     color: 'gray' ,
      price: 5000 }

      const totalPrice=a.price+b.price+c.price;
      console.log(totalPrice);



// Area of Circle
function areaOfCircle(r){
    const pi=3.1416;
    const area=pi*r*r;
   return area.toFixed(2);
}
console.log(areaOfCircle(4));



// Write a function that takes input the total price of the products you bought and returns the net price calculated according to the discount table below.
// Total Price
// Discount
// >= 1000
// 10%
// >= 3000
// 15%
// > 5000
// 20%
// function discountCalculate(totalCost){
//     if(totalCost>=5000){
//         const discountPrice=totalCost*(20/100);
//         const netPrice=totalCost-discountPrice
//         console.log(netPrice);
//     }
//     else   if(totalCost>=3000){
//         const discountPrice=totalCost*(15/100);
//         const netPrice=totalCost-discountPrice;
//         console.log(netPrice);
//     }
//     else   if(totalCost>=1000){
//         const discountPrice=totalCost*(5/100);
//         const netPrice=totalCost-discountPrice;
//         console.log(netPrice);
//     }
//     else{
//         console.log('nothing');
//     }
// }
// discountCalculate(1700); wrong..............
// Write a function that will take a year as a input parameter and will check the year is leap year or not
function isLeapYear(year){
    if((year%4==0) && (year100==0) || (year%400==0)){
        return 'Leapyear';
    }
    else{
        return 'not Leapyear';
    }
}
console.log(isLeapYear(2026));




// Write a function that will take an array and will return odd sum and even sum.
function oddEvenSum(arr){
    let evenSum=0;
    let oddSum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenSum=evenSum+arr[i];
        }
        else{
            oddSum=oddSum+arr[i];
        }
    }
    console.log(evenSum,oddSum);
}
const arr=[1,2,5,8,4,9,12];
(oddEvenSum(arr));

// Write a function that will take a number and will check the number is positive or negative.
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Write a function named findArea() that will take base and height of a triangle and will return the area of triangle.
// Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle.
// Write a function which will take an integer and will return the square of a number.
// Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50









// ) Write a function called foo() which prints “foo” and a function called bar()
// which prints “bar”. Call function bar() in the foo() function after printing. What
// will be the output? Now call the foo() to see the output.




// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 


function feetToInch(feet) {
    const inchValuee=feet*12;
    return inchValuee;

}
const resuulltt=feetToInch(20);
console.log(resuulltt);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(cm){
    const MeterResult=cm/100;
    return MeterResult;

}
const Convert=centimeterToMeter(500);
console.log(Convert);



// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(needPage1,needPage2,needPage3){
    const calculation=needPage1+needPage2+needPage3;
    return calculation;
}

console.log( paperRequirements(100,200,300));


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend(arr){
    let max_str = arr[0].length;
    let ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var maxi = arr[i].length;
        if (maxi > max_str) {
            ans = arr[i];
            max_str = maxi;
        }
    }

        return ans;
    }
    console.log(bestFriend(["sudepta", "tanvir", "FaridaYesmin","shahadat"]));

