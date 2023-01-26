/* Declare variables below to save the different sections (divs) of your story*/
let Storypart2Expensive = document.querySelector(".option-one-screen");
let Storypart2Cheap = document.querySelector(".option-two-screen");
let ExpensiveButton = document.querySelector(".option-one");
let CheapButton = document.querySelector(".option-two");
let ExpensiveEnd = document.querySelector(".option-one-end");
let CheapEnd = document.querySelector(".option-two-end");
let ClickEx = document.querySelector(".ClickExpensive");
let ClickCh = document.querySelector(".ClickCheap");


    /* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
     */

    CheapButton.onclick = function() {
        Storypart2Cheap.style.display = "block";
        Storypart2Expensive.style.display = "none";
        ExpensiveEnd.style.display = "none";
        CheapEnd.style.display = "none";
       
    };

ExpensiveButton.onclick = function() {
    Storypart2Expensive.style.display = "block";
    Storypart2Cheap.style.display = "none";
    ExpensiveEnd.style.display = "none";
    CheapEnd.style.display = "none";

};
 
ClickEx.onclick = function() {
    ExpensiveEnd.style.display = "block";

};

ClickCh.onclick = function() {
    CheapEnd.style.display = "block";

};