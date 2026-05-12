async function loadAppointments(){

    const response = await fetch("https://multi-diagnostic-center.onrender.com/api/appointments");

    const appointments = await response.json();

    const table = document.getElementById("dashboardTable");

    table.innerHTML = "";

    appointments.forEach((appointment) => {

        table.innerHTML += `

            <tr>

                <td>${appointment.name}</td>

                <td>${appointment.email}</td>

                <td>${appointment.phone}</td>

                <td>${appointment.test}</td>

                <td>${appointment.date}</td>

                <td>${appointment.status}</td>
            </tr>

        `;

    });

}

loadAppointments();
function logout(){

    alert("Logged out successfully");

    window.location.href = "login.html";

}