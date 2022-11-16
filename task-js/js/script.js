//Reverse String check String
function ReverseString(str) {
    if(typeof str === 'string'){
        return [...str].reduce((x, y) => y.concat(x));
    }
}
console.log(ReverseString("Code Academy"))
//duplicate array elements
let chars = ['Aqil', 'Orxan', 'Aqil', 'Semed', 'Semed'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//Calc
var count=0;
function Add()
{
    if(count>=0){
        count++; 
    }
    document.getElementById('total').innerText=count;
}
function Minuse()
{
    if(count>0){
        count--; 
    }
    document.getElementById('total').innerText=count;
}