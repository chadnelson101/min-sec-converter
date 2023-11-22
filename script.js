

document.getElementById('converter').addEventListener('click')

function convert(){
    let minutesInput = document.getElementById('minutes').value;
    
        let results = minutesInput.value * 60;
    
        document.getElementById('seconds').value = results;
    }

// }
// button.addEventListener('click',convert);

// document.getElementById('converter').addEventListener('click', function() {
//     // Get the value entered in minutes input
//     let minutesInput = document.getElementById('minutes').value;

//     // Convert minutes to seconds
//     let seconds = minutesInput * 60;

//     // Display the result in the seconds input
//     document.getElementById('seconds').value = seconds;
// });