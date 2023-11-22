
document.getElementById('converter').addEventListener('click', 

function() {
    let minutesInput = document.getElementById('minutes').value;

    if (isNaN(minutesInput)) {
        alert('Please enter a valid number');
        return;
    }

    let seconds = minutesInput * 60;

    document.getElementById('seconds').value = seconds;
});