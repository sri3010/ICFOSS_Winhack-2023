// Ticket information
const ticketInfo = {
  from: "New York",
  to: "Los Angeles",
  date: "March 20, 2023",
  trainNumber: generateRandomTrainNumber(),
  departureTime: "10:00 AM",
  arrivalTime: "6:00 PM",
  seatNumber: generateRandomSeatNumber()
};

// Update HTML with ticket information
document.getElementById("from").innerHTML = ticketInfo.from;
document.getElementById("to").innerHTML = ticketInfo.to;
document.getElementById("date").value = ticketInfo.date;
document.getElementById("trainNumber").innerHTML = ticketInfo.trainNumber;
document.getElementById("departureTime").value = ticketInfo.departureTime;
document.getElementById("arrivalTime").value = ticketInfo.arrivalTime;
document.getElementById("seatNumber").innerHTML = ticketInfo.seatNumber;

// Add event listener to check-in button
const checkInButton = document.getElementById("checkInButton");
checkInButton.addEventListener("click", function() {
  // Hide check-in button and show form
  checkInButton.classList.add("hidden");
  const checkInForm = document.getElementById("checkInForm");
  checkInForm.classList.remove("hidden");

  // Add event listener to form submit
  checkInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get passenger name and email
    const passengerName = document.getElementById("passengerName").value;
    const passengerEmail = document.getElementById("passengerEmail").value;
    
    // Update status
    const status = document.getElementById("status");
    status.innerHTML = `Checked in for ${ticketInfo.trainNumber}`;
    status.style.color = "green";
    
    // Hide form
    checkInForm.classList.add("hidden");
    
    // Show success message
    const successMessage = document.createElement("p");
    successMessage.innerHTML = `Check-in successful! Thank you, ${passengerName}.`;
    successMessage.style.color = "green";
    checkInForm.parentNode.insertBefore(successMessage, checkInForm.nextSibling);
  });
});
function generateRandomSeatNumber() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  return `${randomNumber}${randomLetter}`;
}
function generateRandomTrainNumber() {
  const randomNumber = Math.floor(Math.random() * 10000);
  return randomNumber.toString().padStart(4, "0");
}