
// JavaScript for Image Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function updatePrice() {
    const destinationSelect = document.getElementById('destination');
    const numberOfPassengersInput = document.getElementById('numberOfPassengers');
    const totalPriceInput = document.getElementById('totalPrice');

    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const numberOfPassengers = numberOfPassengersInput.value;

    if (price && numberOfPassengers) {
        const totalPrice = price * numberOfPassengers;
        totalPriceInput.value = `$${totalPrice}`;
    } else {
        totalPriceInput.value = '';
    }
}

function submitForm(event) {
    event.preventDefault(); 


    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const numberOfPassengers = document.getElementById('numberOfPassengers').value;
    const totalPrice = document.getElementById('totalPrice').value;

    


    const resultMessage = `Booking Confirmed! Details:\n
        Full Name: ${fullName}\n
        Email: ${email}\n
        Destination: ${destination}\n
        Departure Date: ${departureDate}\n
        Number of Passengers: ${numberOfPassengers}\n
        Total Price: ${totalPrice}`;

    document.getElementById('bookingResult').innerText = resultMessage;
}
