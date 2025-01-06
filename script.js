document.getElementById("demoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Send data to Google Sheets (replace with your webhook URL)
    const webhookURL = "https://script.google.com/macros/s/AKfycbxbgnwtB_tX73EY6_9LMPVu1NtmH-hsYV_mhbpUP6o8rP-0j8gtM-GvUzxSmS0muG6bSw/exec";
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
    })
    .then(() => {
        alert("Form submitted successfully!");

        // Show countdown
        startCountdown();
    })
    .catch(() => {
        alert("Error submitting the form. Please try again.");
    });
});

// Countdown Timer
function startCountdown() {
    const countdown = document.getElementById("countdown");
    const timer = document.getElementById("timer");
    countdown.style.display = "block";

    let time = 300; // 5 minutes in seconds
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timer.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            alert("The demo call is starting now!");
        }
    }, 1000);
}
