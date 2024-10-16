function checkDate() {
    const targetDate = new Date("2024-10-17"); // Replace with your desired date

    if (Date.now() >= targetDate.getTime()) {
        showNotification();
    } else {
        // If the target date hasn't arrived yet, you can implement a countdown or other logic
    }
}

function showNotification() {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            sendNotification();
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    sendNotification();
                }
            });
        }
    } else {
        alert("Your browser doesn't support notifications.");
    }
}

function sendNotification() {
    const notification = new Notification("Notification Title", {
        body: "This is a notification message.",
        icon: "path/to/your/icon.png" // Optional: Add an icon
    });
}

// Check the date initially and set up a recurring check (e.g., every minute)
checkDate();
setInterval(checkDate, 60000); // Check every minute
