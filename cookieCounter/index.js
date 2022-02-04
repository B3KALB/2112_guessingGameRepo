const mainCookieButton = document.getElementById("mainCookieButton");
const cookieCountElement = document.getElementById("cookieCountNumber");
const nameFormElement = document.getElementById("nameForm");
const nameFormInputElement = document.getElementById("nameInput");
const introHeader = document.getElementById("introHeader");
const pastUserList = document.getElementById("pastUserList");
​
let numCookies = 0;
let usersName = "";
​
// Whenever we click our button
mainCookieButton.addEventListener("click", function () {
  // Number of cookies is go to go up by 1
  numCookies += 1;
​
  // Cookie Counter on the front-end is going to update
  cookieCountElement.innerText = numCookies;
});
​
// When a user enters their name into our input
nameFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameFormInputElement.value === "") return;
​
  // And when they click submit
  usersName = nameFormInputElement.value;
​
  // Then I want the welcome message to update and welcome the new user
  introHeader.innerText = `Welcome, ${usersName}, to Cookie Clicker!`;
​
  // After submitting, clear out our input to communicate it was used
  nameFormInputElement.value = "";
​
  // Add a new user to our list of past users
​
  // IF WE DON'T HAVE SPACES WE WANNA PLACE INTO:
  //   const newLi = document.createElement("li");
  //   newLi.innerText = usersName;
  //   pastUserList.appendChild(newLi);
​
  console.log(pastUserList.children);
  // Go thorugh all of the items in our user list
  for (var i = 0; i < pastUserList.children.length; i++) {
    const currLi = pastUserList.children[i];
    console.log(pastUserList.children);
​
    // Find the space for our new user
​
    // Check if this space is our current user
    if (currLi.innerText === usersName) break;
    // Check if this space is empty / userless
    if (currLi.innerText === "-") {
      // Put our new user in that space
      currLi.innerText = usersName;
      break;
    }
  }
​
  // * If the user isn't added already
});
