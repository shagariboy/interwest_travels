
        function sendMail(params) {

            // Determine which gender radio button is checked
            var genderValue;
            if (document.getElementById("male").checked) {
                genderValue = document.getElementById("male").value;
            } else if (document.getElementById("female").checked) {
                genderValue = document.getElementById("female").value;
            } else {
                // Handle the case where neither radio button is checked
                genderValue = ""; // or some default value
            }

            // Determine hotel rating based on which radio button is checked
            var hotelRating;
            if (document.getElementById("5star").checked) {
                hotelRating = document.getElementById("5star").value;
            } else if (document.getElementById("4star").checked) {
                hotelRating = document.getElementById("4star").value;
            } else {
                // Handle the case where neither radio button is checked
                hotelRating = ""; // or some default value
            }

            // Determine room rating based on which radio button is checked
            var roomRating;
            if (document.getElementById("king").checked) {
                roomRating = document.getElementById("king").value;
            } else if (document.getElementById("queen").checked) {
                roomRating = document.getElementById("queen").value;
            } else {
                // Handle the case where neither radio button is checked
                roomRating = ""; // or some default value
            }

            var tempParams = {
                package_id: document.getElementById("package_id").value,
                from_name: document.getElementById("name").value,
                email_id: document.getElementById("mail").value,
                country_or: document.getElementById("country").value,
                phone_number: document.getElementById("phone_number").value,
                gender: genderValue, // Use a single key for gender
                nationality_id: document.getElementById("nationality").value,
                tour_id: document.getElementById("tour_day").value,
                hotel_rating: hotelRating, // Use a single key for hotel rating
                room_rating: roomRating, // Use a single key for room rating
                no_tour: document.getElementById("numner_of_people_tour").value,
                message: document.getElementById("msg").value,
            };

            emailjs.sendForm("service_5rg4jzd", "template_d3n7vmw", tempParams)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                });
        }
   

        // Add event listener to the form submission
document.getElementById('bookingform_cntr').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Call the sendMail function to handle the submission
    sendMail();
});