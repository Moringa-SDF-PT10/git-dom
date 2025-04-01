// TODO 1: Selecting a DOM element and injecting a CSS class

// 1.1: Select the header element with the ID 'main-header' using an appropriate DOM method.
//    Hint: Look for methods that select elements by their ID.
let header = document.getElementById("main-header");

// 1.2: Define a CSS class in the 'styles.css' file (if you haven't already).
//    This class should have some visual styling (e.g., background color, text color, border).
//    Example CSS class:
//    .highlighted {
//        background-color: yellow;
//        color: black;
//        border: 2px solid orange;
//    }

// 1.3: Get the class list of the selected header element.
//    Hint: DOM elements have a property that represents their classes.
console.log(header.classList);

// 1.4: Add the CSS class you defined (e.g., 'highlighted') to the header element's class list.
//    Hint: Look for methods to add classes to an element's class list.
header.classList.add("highlighted");

// TODO 2: Query the DOM and add an element that matches the existing styling

// 2.1: Select the section with the ID 'overview' using an appropriate DOM method.
//    Hint: Look for methods that select elements by their ID.
let overviewSection = document.getElementById("overview");

// 2.2: Query the DOM to find an existing element within the 'overview' section that has a specific style.
//    For example, find the first paragraph element (<p>) within the 'overview' section.
//    Hint: Look for methods that select elements based on their tag name or other selectors within a specific parent.
let firstParagraph = overviewSection.querySelector("p");
console.log(firstParagraph);

// 2.3: Get the class name (or names) of the element you found in the previous step.
//    Hint: DOM elements have a property that represents their classes.
firstParagraph.classList.add("new-class");
console.log(firstParagraph.classList); 

// 2.4: Create a new paragraph element (<p>) using an appropriate DOM method.
//    Hint: Look for methods to create new HTML elements.
let newParagraph = document.createElement("p");

// 2.5: Set the text content of the newly created paragraph element to something like "This is a new paragraph with the same styling."
//    Hint: DOM elements have a property to set their inner text.
newParagraph.textContent = "This is a new paragraph with the same styling";
document.getElementById("history").append(newParagraph);

// 2.6: Add the same class name (or names) you retrieved in step 2.3 to the newly created paragraph element's class list.
//    Hint: Look for methods to add classes to an element's class list.
newParagraph.classList.add("new-class");
console.log(newParagraph.classList);

// 2.7: Append the newly created and styled paragraph element to the 'overview' section.
//    Hint: Look for methods to add a child element to a parent element.
document.getElementById("overview").append(newParagraph);  // moved from history to overview section

// TODO 3: Query the DOM and remove child elements

// 3.1: Select the unordered list element (<ul>) within the section with the ID 'features' using an appropriate DOM method.
//    Hint: You might need to select the 'features' section first and then find the <ul> within it.
let featureList = document.getElementById("features");
let listItems = featureList.querySelector("ul");
console.log(listItems);

// 3.2: Get a reference to the first child element of the selected unordered list.
//    Hint: DOM elements have properties to access their first child.
//let firstItem = listItems.firstElementChild;   or use childer[index]
//console.log("First Element: ",  firstItem);

// 3.3: Use a loop (e.g., a `while` loop) to repeatedly remove the first child element of the unordered list until it has no more children.
//    Hint: DOM elements have a method to remove a child element. Be careful with how the DOM updates as you remove elements.
//while(listItems.firstElementChild){
    //listItems.removeChild(listItems.firstElementChild);
//}

// Alternatively (more efficient approach for step 3):

// 3.1 (Alternative): Select the unordered list element (<ul>) within the section with the ID 'features'.
//featureList = document.querySelector("#features ul");
//console.log(featureList);

// 3.2 (Alternative): While the unordered list has at least one child element...
//    Hint: DOM elements have a property to check the number of their children.
//listItems = featureList.querySelector("ul").children.length;
//console.log(listItems);

// 3.3 (Alternative): ...remove the last child element of the unordered list.
//    Hint: DOM elements have a method to remove their last child.
//while(listItems.lastElementChild){
    //listItems.removeChild(listItems.lastElementChild);
//}
// console.log(listItems);