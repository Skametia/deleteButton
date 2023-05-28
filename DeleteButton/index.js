// Retrieve existing user data from localStorage
let users = localStorage.getItem('users');

// If no user data exists, initialize an empty array
if (!users) {
  users = [];
} else {
  // Parse the existing user data from string to array
  users = JSON.parse(users);
}

// Function to render the user list in the UI
function renderUserList() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  // Loop through the users array and create UI elements for each user
  users.forEach((user, index) => {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    const userName = document.createElement('span');
    userName.textContent = user.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteUser(index); // Call the deleteUser function passing the index
    });

    userContainer.appendChild(userName);
    userContainer.appendChild(deleteButton);
    userList.appendChild(userContainer);
  });
}

// Function to delete a user
function deleteUser(index) {
  // Remove the user from the users array
  users.splice(index, 1);

  // Update the localStorage with the modified user array
  localStorage.setItem('users', JSON.stringify(users));

  // Re-render the user list in the UI
  renderUserList();
}

// Add a new user to the array
const newUser = {
  name: 'John',
  age: 25,
  // Add other user details here
};
users.push(newUser);

// Store the updated user array back to localStorage
localStorage.setItem('users', JSON.stringify(users));

// Render the initial user list in the UI
renderUserList();


