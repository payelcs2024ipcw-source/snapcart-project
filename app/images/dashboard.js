// // dashboard.js

// document.addEventListener('DOMContentLoaded', () => {
//     const userName = localStorage.getItem('loggedInUser');
//     const logoutBtn = document.getElementById('logout-btn');

//     if (!userName) {
//         window.location.href = 'home.html';
//     } else {
//         // Event listener for logout button
//         logoutBtn.addEventListener('click', () => {
//             localStorage.removeItem('loggedInUser'); // Remove the user status
//             window.location.href = 'home.html'; // Redirect to the home page
//         });
//     }
// });

/// File Upload
const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");

// Click on box = trigger input
uploadBox.addEventListener("click", () => fileInput.click());

// Drag over effect
uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.style.background = "rgba(155, 93, 229, 0.3)";
});

// Reset background
uploadBox.addEventListener("dragleave", () => {
  uploadBox.style.background = "rgba(255, 255, 255, 0.05)";
});

// Drop file
uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  const file = fileInput.files[0];
  if (file) {
    updateProductPage(file.name, file);
  }
});

// Select from file picker
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    updateProductPage(file.name, file);
  }
});

// Mic Recording (demo only)
let recording = false;
const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("recordingStatus");

micBtn.addEventListener("click", () => {
  recording = !recording;
  micBtn.textContent = recording ? "Stop Recording" : "Start Recording";
  statusText.textContent = recording ? "🎙️ Recording..." : "";
});

// QR Code Generator using QRious
// const qr = new QRious({
//   element: document.getElementById("qrcode"),
//   value: "https://yourwebsite.com/product", // default
//   size: 150,
//   background: "white",
//   foreground: "#9b5de5"
// });

// Update Product Page after upload
function updateProductPage(fileName, file) {
  document.getElementById("story").textContent =
    `This handmade piece, '${fileName}', was crafted with love by artisans.`;
  document.getElementById("hashtags").textContent =
    "#Artisan #Handmade #SupportLocal";

  // Preview uploaded image
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("originalImg").src = e.target.result;
    document.getElementById("enhancedImg").src = e.target.result; 
    // Later: replace enhanced with backend-processed output
  };
  reader.readAsDataURL(file);

  // Update QR dynamically
  qr.value = `https://yourwebsite.com/product/${encodeURIComponent(fileName)}`;

  // Show product page
  document.getElementById("productPage").style.display = "block";
}

const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', () => {
    // Replace with your actual product URL and message
    const productUrl = window.location.href; // Get the current page URL
    const message = encodeURIComponent("Check out my amazing craft on SnapCart!");
    
    // Construct the WhatsApp share URL
    const whatsappUrl = `https://wa.me/?text=${message}%20${productUrl}`;
    
    // Open the URL in a new window
    window.open(whatsappUrl, '_blank');
});

const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
    const productUrl = window.location.href;
    
    navigator.clipboard.writeText(productUrl).then(() => {
        // Optional: Provide visual feedback to the user
        alert("Link copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

const liveBtn = document.getElementById('liveBtn');

liveBtn.addEventListener('click', () => {
    // Replace with the URL of your live stream or meeting link
    const liveStreamUrl = 'https://meet.google.com/your-meeting-code'; 
    
    // Open the live stream in a new tab
    window.open(liveStreamUrl, '_blank');
});