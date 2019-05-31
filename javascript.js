
var objArr = [
  { name: "Bart"},
  { name: "Keanu"}, 
  { name: "Bob"},
  { name: "Jeffrey"},
  { name: "Brian"}, 
  { name: "Michael" },
  { name: "John"}, 
  { name: "Chris"} ,
  { name: "George"} ,
  { name: "Baba"},
  { name: "Dax"}, 
  { name: "Anita"},
  { name: "Marlene"}, 
  { name: "Patricia"}, 
  { name: "Amanda"},
  { name: "Lily"}, 
  { name: "Zoe"}, 
  { name: "Barbie"}, 
  { name: "Paul"},
  { name: "Archie"}
];


var pageCount = 4;
var startIndex = 0;
var increment = objArr.length / pageCount;
var endIndex = startIndex + increment;
var pages = [];
var recordIndex = 0;
var globalIndex = 0;
var pageIndex = 0;
var currentPage = [];
var bartIndex = 0; 
var num = 1;
var num1 = 2;
var num2 = 3;
var num3 = 4;

for(var i = 0; i < pageCount; i++) {
var page = [];
while(recordIndex < 20){
page.push(objArr[bartIndex]); //TOODO add names
globalIndex++;
recordIndex++;
bartIndex++;
}
pages[i] = [page];
pageIndex++
recordIndex = 0;
}

switch(num) {
case 1:
function myFunction(e) {
  e.preventDefault();

  for (var i = 0; i < 5; i ++) {
    var textnode = document.createTextNode(pages[0][0][i].name); 
    document.getElementById("nameList").appendChild(textnode);
}}
break;
case 2:
function myFunction1(e) {
  e.preventDefault();
 
  for (var i = 5; i < 10; i++) {
    var textnode = document.createTextNode(pages[0][0][i].name);
    document.getElementById("nameList").appendChild(textnode);
  
}}
break;
case 3:
function myFunction2(e) {
  e.preventDefault();
  
  for (var i = 10; i < 15 ; i++) {
    var textnode = document.createTextNode(pages[0][0][i].name);
    document.getElementById("nameList").appendChild(textnode);
}}
break;
case 4:
function myFunction3(e) {
  e.preventDefault();

  for (var i = 15; i < 20; i++) {
 
    var textnode = document.createTextNode(pages[0][0][i].name);
    document.getElementById("nameList").appendChild(textnode);
  
}}
break;
}
document.getElementById("whatever1").addEventListener("click", myFunction).num;
document.getElementById("whatever2").addEventListener("click", myFunction1).num1;
document.getElementById("whatever3").addEventListener("click", myFunction2).num2;
document.getElementById("whatever4").addEventListener("click", myFunction3).num3;




