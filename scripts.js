function myButtonFunction() {    // create a function in JS called "myButtonFunction" by using HTML onclick Attribute for my button "Add"
    var input = document.querySelector("#input");           // find HTML element with ID "input"
    var ul = document.querySelector("#unordered-list");     // find HTML element with ID "unordered-list"
    var li = document.createElement("li"); // create HTML li elements
    li.textContent = input.value; //populate the HTML text content to create a list with a value that end-user input into the field
    ul.appendChild(li); // adding new li elements (child) to the ul elements (parent)
}



