var a=10
a="Mahi"
var a=30.3
// console.log(a)
let b=50
b="Gobi"
// console.log(b)
const c="GASC"
// console.log(c)
function abc(){
    // var a=10
    // var b=20
    console.log(a)
}
// abc()
function ab(a,b){
    var c=a+b
    console.log(`as ${c}`)
}
// ab(20,30)
var d=[20,'Gobi',34.4]
// var d[1]="Thiran"
// console.log(d[1])
function check(){
    var arr = []
   var d=[20,'Gobi',34.4]
   for(var i=0;i<=d.length;i++){
    // console.log(d)
   console.log(d[i])
   }
}
// check()
// ab(40,50)
/*
var n=[1,2,3,4,5]
var even=[]
var odd=[]
for(i=0;i<n.length;i++){
if(n[i]%2==0){
    // console.log("number is even")
    even.push(n[i])
    
}
else{
    // console.log("Not a even number")
    odd.push(n[i])
}
}
console.log(even)
console.log(odd)
*/
function check() {
    var arr = [10, 3, 'cdm laksd', 50]; 
    var even = [];
    var odd = [];
    var strings = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                even.push(arr[i]);
            } else {
                odd.push(arr[i]);
            }
        } else if (typeof arr[i] === 'string') {
            strings.push(arr[i]);
        }
    }

    console.log("Even numbers:", even);
    console.log("Odd numbers:", odd);
    console.log("Strings:", strings);
}

check();