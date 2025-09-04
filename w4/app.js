//Was able to Do the Easier task like Header and start the prompts//
//Wrote Codes right in the first half then couldnt figure out to finish the rest"//
//Wrote out the first half like "document.getElement or const message, then asked Ai to give me and idea how to write the rest"


// Listen for the form submission
document.getElementById("gymForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get the user's name from the input field
  const name = document.getElementById("nameInput").value.trim();

  // My Personal Reminder
  const message = name
    ? `Hey ${name}, don't forget to hit the gym today! 💪`
    : "Please enter your name so I can remind you properly.";

  // Display the message in the output element
  document.getElementById("gymMessage").textContent = message;

  // Reset the form input
  document.getElementById("gymForm").reset();
});

