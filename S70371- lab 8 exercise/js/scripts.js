/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name");
    if (!name.value.trim()) {
        name.classList.add("is-invalid");
    } else {
        name.classList.remove("is-invalid");
    }
});
