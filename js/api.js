/*
    This file has wrappers for the api and related interface defintions
*/

// Interface definiton for a single user
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} email
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} avatar
 */

/**
 * Get a user from it's id
 * @param {number} id
 * @returns {Promise<User>}
 */
export async function GetUser(id) {
    const request = await fetch(`https://reqres.in/api/users/${id}`);
    const object = await request.json();

    return object.data;
}

/**
 * Get list of users
 * @returns {Promise<User[]>}
 */
export async function GetUsers() {
    const request = await fetch(`https://reqres.in/api/users/?per_page=12`);
    const object = await request.json();

    return object.data;
}
