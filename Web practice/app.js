// Sample data
const userData = [
    { appName: "Google Drive", userCount: 1000000000 },
    { appName: "Microsoft Office Online", userCount: 100000000 },
    { appName: "Slack", userCount: 12000000 },
    { appName: "Trello", userCount: 50000000 },
    { appName: "Zoom", userCount: 300000000 },
    { appName: "Asana", userCount: 10000000 },
    { appName: "LinkedIn", userCount: 774000000 },
    { appName: "Twitter", userCount: 330000000 },
    { appName: "Evernote", userCount: 225000000 },
    { appName: "Dropbox", userCount: 600000000 }
];

// Function to create and append list items
function appendUserToList(user, userListId) {
    const userList = document.getElementById(userListId);

    const listItem = document.createElement("li");

    const userSpan = document.createElement("span");
    userSpan.classList.add("user");
    userSpan.textContent = user.appName;

    const userCountSpan = document.createElement("span");
    userCountSpan.classList.add("user-count");
    userCountSpan.textContent = `(${user.userCount} users)`;

    listItem.appendChild(userSpan);
    listItem.appendChild(userCountSpan);

    userList.appendChild(listItem);
}

// Function to sort data by most users
function sortMostUsers() {
    userData.sort((a, b) => b.userCount - a.userCount);
    updateList();
}

// Function to sort data by fewest users
function sortFewestUsers() {
    userData.sort((a, b) => a.userCount - b.userCount);
    updateList();
}

// Function to update the list with sorted data
function updateList() {
    const userList = document.getElementById("userList");
    // Clear the existing list
    userList.innerHTML = "";
    // Loop through the sorted data and append it to the list
    userData.forEach(user => {
        appendUserToList(user, "userList");
    });
}

// Run the function when the window has finished loading
window.onload = function () {
    // Initial data display
    updateList();
};