
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


var pageCount = 19;
var startIndex = 0;
var increment = objArr.length / pageCount;
var endIndex = startIndex + increment;
var pages = [];
var recordIndex = 0;
var globalIndex = 0;
var pageIndex = 0;
var currentPage = [];

for(var i = 0; i < pageCount; i++) {
var page = [];
while(recordIndex < 20){
page.push(objArr[recordIndex]); //TOODO add names
globalIndex++;
recordIndex++;
}
pages[i] = [page];
pageIndex++
recordIndex = 0;
}


function myFunction(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
function myFunction1(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
function myFunction2(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
function myFunction3(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
function myFunction4(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
function myFunction5(e) {
  e.preventDefault();
 
    var textnode = document.createTextNode(pages[1][0][0].name);
    var textnodes = document.createTextNode(pages[1][0][1].name);
    var textnodess = document.createTextNode(pages[1][0][2].name);
    var textnodesss = document.createTextNode(pages[1][0][3].name);
    var textnodessss = document.createTextNode(pages[1][0][4].name); 
    document.getElementById("nameList").appendChild(textnode);
    document.getElementById("nameList").appendChild(textnodes);
    document.getElementById("nameList").appendChild(textnodess);
    document.getElementById("nameList").appendChild(textnodesss);
    document.getElementById("nameList").appendChild(textnodessss);
}
document.getElementById("whatever").addEventListener("click", myFunction);
document.getElementById("whatever1").addEventListener("click", myFunction1);
document.getElementById("whatever2").addEventListener("click", myFunction2);
document.getElementById("whatever3").addEventListener("click", myFunction3);
document.getElementById("whatever4").addEventListener("click", myFunction4);
document.getElementById("whatever5").addEventListener("click", myFunction5);



