/*
    This file has functions for handling the modal
*/

import { GetUser } from "./api.js";

// Get the modal element
const modalElement = document.getElementById("usermodal");
if (!modalElement || !modalElement instanceof HTMLDialogElement) {
    throw new Error("Modal dialog element not present");
}

// Set up the button to close the modal
modalElement.querySelector(".modal-close-button").onclick = () => modalElement.close();

/**
 * Shows the modal with the data of a user by it's id
 * @param {number} id
 */
export async function ShowUserModal(id) {
    const user = await GetUser(id);

    // Fill in the modal with the new data
    modalElement.querySelector(".modal-avatar-img").src = user.avatar;
    modalElement.querySelector(".modal-first-name").textContent = user.first_name;
    modalElement.querySelector(".modal-last-name").textContent = user.last_name;

    const emailAnchor = modalElement.querySelector(".modal-email");
    emailAnchor.textContent = user.email;
    emailAnchor.href = `mailto:${user.email}`;

    // Show the modal to the user
    modalElement.showModal();
}
