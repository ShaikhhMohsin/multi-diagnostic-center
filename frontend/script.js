/* APPOINTMENT FORM */

const appointmentForm = document.getElementById("appointmentForm");

if(appointmentForm){

    appointmentForm.addEventListener("submit", async function(event){

        event.preventDefault();

        const name = document.getElementById("appointmentName").value;

        const email = document.getElementById("appointmentEmail").value;

        const phone = document.getElementById("appointmentPhone").value;

        const date = document.getElementById("appointmentDate").value;

        const test = document.getElementById("appointmentTest").value;

        const response = await fetch("https://multi-diagnostic-center.onrender.com/api/appointments/book", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,
                email,
                phone,
                test,
                date

            })

        });

        const data = await response.json();

        alert(data.message);

        appointmentForm.reset();

    });

}

/* REGISTER FORM */

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", async function(event){

        event.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if(password !== confirmPassword){

            alert("Passwords do not match");

            return;

        }

        const response = await fetch("https://multi-diagnostic-center.onrender.com/api/auth/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,
                email,
                password

            })

        });

        const data = await response.json();

        alert(data.message);

        registerForm.reset();

    });

}

/* LOGIN FORM */

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async function(event){

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;

        const password = document.getElementById("loginPassword").value;

        const response = await fetch("https://multi-diagnostic-center.onrender.com/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email,
                password

            })

        });

        const data = await response.json();

        alert(data.message);

        loginForm.reset();

    });

}