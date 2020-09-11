//Create button, add text label, set type attribute to button
let sqButton = document.createElement("button");
let sqButtonLabel = document.createTextNode("Add Square");
sqButton.appendChild(sqButtonLabel);
sqButton.setAttribute("type", "button");
document.body.appendChild(sqButton);

let containerDiv = document.createElement("div");
containerDiv.style.display = "flex";
containerDiv.style.flexFlow = "row wrap";
document.body.appendChild(containerDiv);

//Call the createBlackSq fn for when the button is clicked:
sqButton.addEventListener("click", createBlackSq);

//Put the button we made (incl. its class) on the page:
function createBlackSq() {
    //Define black squares & give them class name so they can be styled in CSS
    let blackSq = document.createElement("div");
    blackSq.setAttribute("class", "black-sq");
    //Create a black square every time sqButton is clicked
    containerDiv.appendChild(blackSq);
    //Generate an ID number for each new black square that = quantity of boxes on the page prior to its creation (so the 1st black square's ID will be "0")
    blackSq.id = ++idCounter;//JW NOTE TO SELF:  Remember diff btwn ++ pre-/suf-fix
    let blackSqText = blackSq.id;//JW NOTE TO SELF ON KEY CONCEPT NEED TO SOLIDIFY IN BRAIN:  Remember why blackSq.id not nested in quotes
    blackSq.addEventListener("mouseover", function () {
        blackSq.textContent = blackSqText;//JW NOTE TO SELF ON KEY CONCEPT NEED TO SOLIDIFY IN BRAIN:  Remember why blackSqText in camelCase here rather than subterms hyph-delineated
    });
    blackSq.addEventListener("mouseout", function () {
        blackSq.textContent = "";
    });
    blackSq.addEventListener("click", function () {
        //console.log("YAHTZEE")
        blackSq.style.backgroundColor = colors[randomColorIdxPositionGenerator()];
    });
    blackSq.addEventListener("dblclick", function (e) {
        if (e.target.id % 2 == 0) {
            e.target.nextSibling.style.display = "none";//could also do this via e.target.nextSibling.style.display = "none";
            console.error("NO SQUARES AFTER THIS ONE, YA DOOFUS!")
        } else if (isOdd(e.target.id)) {
            e.target.previousSibling.style.display = "none";
            console.error("NO SQUARES BEFORE THIS ONE, YA TURKEY!")
        }
    });
}

function isOdd(value) {
    if (value % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

let idCounter = -1;

let colors = [
    "#1f3ea0", //[0] item 1
    "#2f3ea0", //[1] item 2
    "#3f3ea0", //[2] item 3
    "#4f3ea0", //[3] item 4
    "#5f3ea0", //[4] item 5
    "#6f3ea0", //[5] item 6
    "#7f3ea0", //[6] item 7
    "#8f3ea0"  //[7] item 8
];
//Generate random index position for array:
function randomColorIdxPositionGenerator() {
    return Math.floor(Math.random() * colors.length);
}

//When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square

//Google previousSibling & nextSibling