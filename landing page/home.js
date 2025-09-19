document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const artisanBtn = document.getElementById('signup-artisan-btn');
  const customerBtn = document.getElementById('signup-customer-btn');

  const handleSignup = (event) => {
    event.preventDefault(); // Prevents the form from submitting in a traditional way

    if (nameInput.value.trim() !== '') {
      // This is the only line you need for a smooth redirect.
      // It sends the user directly to the new page.
      window.location.href = 'dashboard.html';
    } else {
      // This part is for error handling, to ensure a name is entered.
      // You can keep this or replace it with a more visually appealing error message.
      alert('Please enter your name.'); 
    }
  };

  // Attach the same function to both buttons
  artisanBtn.addEventListener('click', handleSignup);
  customerBtn.addEventListener('click', handleSignup);
});

// // home.js

// const handleSignup = (event) => {
//     event.preventDefault();
//     const userName = nameInput.value.trim();

//     if (userName) {
//         // Step 1: Save the user's name to localStorage
//         localStorage.setItem('loggedInUser', userName);

//         // Then redirect as planned
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('Please enter your name.');
//     }
// };



