/*
    This is the entrypoint of the javascript that fetches data and renders it to the DOM
*/

import { GetUsers } from "./api.js";
import { ShowUserModal } from "./modal.js";

// Get the list element
const userListElement = document.getElementById("userlist");
if (!userListElement || !userListElement instanceof HTMLUListElement) {
    throw new Error("User list ul element not present");
}
// and the user template
const userTemplate = document.getElementById("user-template");
if (!userTemplate || !userTemplate instanceof HTMLTemplateElement) {
    throw new Error("User list item template element not present");
}

// Get all the users
const users = await GetUsers();

// For each user clone the template, fill it with data, and append it to the userlist
users.forEach((user) => {
    const clone = userTemplate.content.cloneNode(true);
    clone.querySelector(".first-name-slot").textContent = user.first_name;
    clone.querySelector(".last-name-slot").textContent = user.last_name;
    clone.querySelector(".email-slot").textContent = user.email;
    clone.querySelector(".user-avatar").src = user.avatar;

    // Register the button to open the modal with the corresponding id
    clone.querySelector(".user-button").onclick = () => {
        ShowUserModal(user.id);
    };

    userListElement.appendChild(clone);
});
