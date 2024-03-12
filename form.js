 // JavaScript code to handle form submission
 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form data
    var formData = new FormData(this);

    // Display form data (you can modify this part to perform other actions)
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});