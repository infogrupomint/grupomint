function requestContact(serviceName) {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").onclick = function(event) {
        if (event.target === this) {
            hideContactForm();
        }
    };
}

function hideContactForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("contactForm").reset();
}

function sendData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name && email) {
        var message = "¡Hola! Estoy interesado en con tacarme con ustedes." +  ". Mi nombre es " + name + " y mi correo electrónico es " + email + ".";


        const numeroWhatsApp = '2364265933'; // Reemplaza con tu número de WhatsApp
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(enlaceWhatsApp, '_blank');
        hideContactForm();
    } else {
        alert("Por favor, ingresa tu nombre y correo electrónico para continuar.");
    }
}