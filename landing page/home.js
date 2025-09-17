// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

/// Background slideshow (fixed version)
const images = ["images/bg1.png","images/bg2.png","images/bg3.png","images/bg4.png"];
let index = 0;
const slideshow = document.querySelector(".slideshow");

// Preload all images for smooth transition
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Show first image
slideshow.style.backgroundImage = `url(${images[0]})`;
slideshow.classList.add("show");
index = 1;

// Function to change background
function changeBackground() {
  // Fade out current image
  slideshow.style.opacity = 0;

  setTimeout(() => {
    // Change image after fade-out
    slideshow.style.backgroundImage = `url(${images[index]})`;

    // Fade in new image
    slideshow.style.opacity = 1;

    // Next image
    index = (index + 1) % images.length;
  }, 2000); // matches CSS transition duration
}

// Change every 40 seconds
setInterval(changeBackground, 40000);


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
const qr = new QRious({
  element: document.getElementById("qrcode"),
  value: "https://yourwebsite.com/product", // default
  size: 150,
  background: "white",
  foreground: "#9b5de5"
});

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

