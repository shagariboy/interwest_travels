<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $package = $_POST['package_id'];
    $fullName = $_POST['user_name'];
    $country = $_POST['country_of_res'];
    $email = $_POST['user_email'];
    $phoneNumber = $_POST['phone_number'];
    $gender = $_POST['gender_options'];
    $nationality = $_POST['nationality'];
    $tourDuration = $_POST['tour_day'];
    $hotelRating = $_POST['hotel_rating'];
    $roomRating = $_POST['room_rating'];
    $numberOfPeople = $_POST['numner_of_people_tour'];
    $otherActivity = $_POST['msg'];

    // Compose email message
    $to = "nnamdiezeh0@gmail.com";
    $subject = "New Booking Form Submission";
    $message = "Package: $package\n";
    $message .= "Full Name: $fullName\n";
    $message .= "Country: $country\n";
    $message .= "Email: $email\n";
    $message .= "Phone Number: $phoneNumber\n";
    $message .= "Gender: $gender\n";
    $message .= "Nationality: $nationality\n";
    $message .= "Tour Duration: $tourDuration\n";
    $message .= "Hotel Rating: $hotelRating\n";
    $message .= "Room Rating: $roomRating\n";
    $message .= "Number of People: $numberOfPeople\n";
    $message .= "Other Activity: $otherActivity\n";

    // Send email
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
}
?>
