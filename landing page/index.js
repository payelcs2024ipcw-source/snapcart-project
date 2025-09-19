document.addEventListener('DOMContentLoaded', () => {
    const logoVideo = document.getElementById("logoVideo");
    const animatedLogo = document.getElementById("animatedLogo");
    const body = document.body;

    logoVideo.addEventListener("ended", () => {
        // Show the static logo
        animatedLogo.style.opacity = 1;
        
        // Start the animation by adding the new class
        animatedLogo.classList.add('animate-to-navbar');

        // Hide the video
        logoVideo.style.opacity = 0;

        // Redirect to home.html after the animation completes
        setTimeout(() => {
            // Add a class to fade out the entire page before redirecting
            body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000); // Wait for the body fade-out
        }, 1500); // Wait for the logo animation to finish
    });
});



